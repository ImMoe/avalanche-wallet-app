import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

interface ExtendedEip1193Provider extends ethers.Eip1193Provider {
  on(event: string, listener: (...args: any[]) => void): void;
  removeListener(event: string, listener: (...args: any[]) => void): void;
}

declare global {
  interface Window {
    ethereum?: ExtendedEip1193Provider;
  }
}

const AVALANCHE_CHAIN_ID = '0xa86a';
const AVALANCHE_RPC_URL = 'https://api.avax.network/ext/bc/C/rpc';
const AVALANCHE_EXPLORER_URL = 'https://snowtrace.io';
const Avalanche = () => {
  const [account, setAccount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [txHash, setTxHash] = useState('');

  useEffect(() => {
    checkConnection();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          'accountsChanged',
          handleAccountsChanged
        );
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  async function checkConnection() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          await ensureAvalancheNetwork();
        }
      } catch (error) {
        console.error(
          'An error occurred while checking the connection:',
          error
        );
      }
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      setIsConnecting(true);
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          await ensureAvalancheNetwork();
          setMessage({
            type: 'success',
            content:
              'Your wallet has been successfully connected to Avalanche.',
          });
        }
      } catch (error) {
        console.error(
          'User denied account access or an error occurred:',
          error
        );
      } finally {
        setIsConnecting(false);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  }

  async function ensureAvalancheNetwork() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: AVALANCHE_CHAIN_ID }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: AVALANCHE_CHAIN_ID,
                  chainName: 'Avalanche Network',
                  nativeCurrency: {
                    name: 'Avalanche',
                    symbol: 'AVAX',
                    decimals: 18,
                  },
                  rpcUrls: [AVALANCHE_RPC_URL],
                  blockExplorerUrls: [AVALANCHE_EXPLORER_URL],
                },
              ],
            });
          } catch (addError) {
            console.error('Failed to add Avalanche network:', addError);
          }
        }
        console.error('Failed to switch to Avalanche network:', switchError);
      }
    }
  }

  function handleAccountsChanged(accounts: string[]) {
    if (accounts.length === 0) {
      setAccount('');
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
    }
  }

  function handleChainChanged(_chainId: string) {
    window.location.reload();
  }

  async function sendAVAX() {
    if (typeof window.ethereum !== 'undefined' && account) {
      setIsSending(true);
      try {
        await ensureAvalancheNetwork();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        if (!ethers.isAddress(recipient)) {
          throw new Error('Invalid recipient address');
        }

        const amountWei = ethers.parseEther(amount);
        const balance = await provider.getBalance(account);
        if (amountWei > balance) {
          throw new Error('Insufficient AVAX balance');
        }

        const tx = await signer.sendTransaction({
          to: recipient,
          value: amountWei,
        });

        setMessage({
          type: 'info',
          content: 'Transaction sent. Waiting for confirmation...',
        });

        const receipt = await tx.wait();
        setTxHash(receipt ? receipt.hash : tx.hash);
        setMessage({
          type: 'success',
          content: 'Your AVAX has been sent successfully on Avalanche.',
        });
        setRecipient('');
        setAmount('');
      } catch (error: any) {
        console.error('An error occurred while sending AVAX:', error);
        // Only set error message for non-rejection errors
        if (error.code !== 4001) {
          setMessage({
            type: 'error',
            content: `Failed to send AVAX: ${error.message || 'Unknown error'}`,
          });
        }
      } finally {
        setIsSending(false);
      }
    }
  }

  function truncateAddress(address: string) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  return {
    account,
    recipient,
    amount,
    isConnecting,
    isSending,
    message,
    txHash,
    setAccount,
    setRecipient,
    setAmount,
    setIsConnecting,
    setIsSending,
    setMessage,
    setTxHash,
    truncateAddress,
    connectWallet,
    sendAVAX,
    AVALANCHE_EXPLORER_URL,
  };
};

export default Avalanche;
