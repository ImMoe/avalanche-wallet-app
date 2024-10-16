'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAvax from '@/hooks/useAvax';
import Image from 'next/image';

export default function SwapPage() {
  const avax = useAvax();
  return (
    <div className='h-screen w-full max-w-md mx-auto pt-32'>
      <div className='max-w-sm mx-auto text-center mb-6 space-y-6'>
        <Image
          src='/avalanche.png'
          width={64}
          height={64}
          alt='Avax'
          className='mx-auto'
        />
        <p className='text-xl font-light'>
          Send <span className='font-bold'>AVAX</span> to any Avalanche address
        </p>
      </div>
      <Card>
        <CardContent className='space-y-4 py-6'>
          {avax.error && (
            <p className='bg-red-500 rounded p-2 text-center'>{avax.error}</p>
          )}
          <div className='text-sm font-medium'>
            Connected:{' '}
            {avax.account
              ? avax.truncateAddress(avax.account)
              : 'Not connected'}
          </div>
          {avax.message.content && avax.message.type !== 'error' && (
            <div
              className={`p-4 rounded-md ${
                avax.message.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-blue-100 text-blue-700'
              }`}
            >
              {avax.message.content}
            </div>
          )}
          <div className='space-y-2'>
            <Label htmlFor='recipient'>Recipient Address</Label>
            <Input
              id='recipient'
              placeholder='Enter recipient address'
              value={avax.recipient}
              onChange={(e) => avax.setRecipient(e.target.value)}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='amount'>Amount (AVAX)</Label>
            <Input
              id='amount'
              type='number'
              step='0.000000000000000001'
              min='0'
              placeholder='Enter amount to send'
              value={avax.amount}
              onChange={(e) => avax.setAmount(e.target.value)}
            />
          </div>
          {avax.txHash && (
            <div className='text-sm'>
              <a
                href={`${avax.AVALANCHE_EXPLORER_URL}/tx/${avax.txHash}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                View Transaction Details on Snowtrace
              </a>
            </div>
          )}
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            onClick={avax.connectWallet}
            disabled={avax.isConnecting || avax.account !== ''}
            className='flex gap-2 bg-gray-800 text-white'
          >
            <Image src='/avalanche.png' width={24} height={24} alt='Avax' />
            {avax.isConnecting
              ? 'Connecting...'
              : avax.account
              ? 'Connected'
              : 'Connect Wallet'}
          </Button>
          <Button
            onClick={avax.sendAVAX}
            disabled={
              !avax.account || !avax.recipient || !avax.amount || avax.isSending
            }
            className='bg-red-500 text-white'
          >
            {avax.isSending ? 'Sending...' : 'Send AVAX'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
