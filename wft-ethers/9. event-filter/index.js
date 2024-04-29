import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

// 持续监听合约的事件
// contract.on("eventName", function)

// 只监听一次合约释放事件
// contract.once("eventName", function)

// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 连接主网
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// 连接钱包
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const abi = [
  'event Transfer(address indexed from, address indexed to, uint amount)',
];
// 主网Tether USD地址
const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

// 声明合约实例
const contract = new ethers.Contract(address, abi, provider);

const main = async () => {
  // ...
  console.log('\n1. 利用contract.once()，监听一次Transfer事件');
  contract.once('Transfer', (from, to, amount) => {
    console.log('Transfer event fired! -- 单次监听');
    console.log(`from: ${from}`);
    console.log(`to: ${to}`);
    console.log(`amount: ${amount}`);
  });

  console.log('\n2. 利用contract.on()，持续监听Transfer事件');
  contract.on('Transfer', (from, to, amount) => {
    console.log('Transfer event fired! -- 持续监听');
    console.log(`from: ${from}`);
    console.log(`to: ${to}`);
    console.log(`amount: ${amount}`);
  });
};

main();
