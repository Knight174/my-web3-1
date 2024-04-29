import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 连接sepolia主网
const provider = new ethers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // WETH的ABI
  const abi = [
    'function balanceOf(address) public view returns(uint)',
    'function deposit() public payable',
    'function transfer(address, uint) public returns (bool)',
    'function withdraw(uint) public',
  ];
  // WETH合约地址（Sepolia测试网）
  const contractAddress = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'; // WETH Contract

  console.log('\n1. 读取WETH余额');
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const address = await wallet.getAddress();
  const balance = await contract.balanceOf(address);
  console.log(
    `存款前持仓：WETH balance of ${address}: ${ethers.formatEther(balance)}`
  );

  console.log('\n2. 调用desposit()函数，存入0.001 ETH');
  const tx = await contract.deposit({ value: ethers.parseEther('0.001') });
  await tx.wait();
  console.log(`交易详情：`);
  console.log(tx);
  const balanceWETH_deposit = await contract.balanceOf(address);
  console.log(`存款后WETH持仓: ${ethers.formatEther(balanceWETH_deposit)}\n`);

  const tx2 = await contract.transfer(
    'vitalik.eth',
    ethers.parseEther('0.001')
  );
  await tx2.wait();
  const balanceWETH_transfer = await contract.balanceOf(address);
  console.log(`转账后WETH持仓: ${ethers.formatEther(balanceWETH_transfer)}\n`);
};

main();
