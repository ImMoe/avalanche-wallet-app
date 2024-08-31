# Avalanche Wallet App

This is a Next.js application that allows users to connect their MetaMask wallet and send AVAX tokens on the Avalanche network. The app is built with TypeScript and uses the shadcn UI components for a sleek, modern interface.

![View](https://i.imgur.com/nyc7sxS.png)

## Features

- Connect MetaMask wallet
- Switch to Avalanche network
- Send AVAX tokens to any Avalanche address
- View transaction details on Snowtrace

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MetaMask browser extension installed

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/ImMoe/avalanche-wallet-app.git
   ```

2. Navigate to the project directory:

   ```
   cd avalanche-wallet-app
   ```

3. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   ```

## Usage

1. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Connect your MetaMask wallet and ensure you're on the Avalanche network

4. Enter the recipient's Avalanche address and the amount of AVAX you want to send

5. Click "Send AVAX" to initiate the transaction

## Dependencies

- Next.js
- React
- ethers.js
- shadcn UI components
- TypeScript

## Configuration

The app is configured to use the following Avalanche network settings:

- Chain ID: `0xa86a`
- RPC URL: `https://api.avax.network/ext/bc/C/rpc`
- Explorer URL: `https://snowtrace.io`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [Avalanche](https://www.avax.network/) for the blockchain network
- [MetaMask](https://metamask.io/) for wallet integration
- [shadcn](https://ui.shadcn.com/) for UI components
- [ethers.js](https://docs.ethers.org/) for Ethereum interactions
