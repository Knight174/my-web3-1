import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

// 读取合约释放的事件（需包含在 abi 中）
// const transferEvents = await contract.queryFilter('事件名', 起始区块, 结束区块);

// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 连接sepolia主网
const provider = new ethers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

// 连接钱包
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// WETH ABI，只包含我们关心的Transfer事件
const abiWETH = [
  'event Transfer(address indexed from, address indexed to, uint amount)',
];
// 测试网WETH地址
const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6';

// 声明合约实例
const contract = new ethers.Contract(addressWETH, abiWETH, provider);

const main = async () => {
  // ...

  const block = await provider.getBlockNumber();
  console.log(`当前区块高度: ${block}`);

  console.log(`打印事件详情:`);
  const transferEvents = await contract.queryFilter(
    'Transfer',
    block - 100,
    block
  );
  transferEvents.forEach((event, index) =>
    console.log(`事件#${index + 1}`, event)
  );

  // 解析Transfer事件的数据（变量在args中）
  console.log('\n2. 解析事件：');
  console.log(transferEvents[0]);
  // const amount = ethers.formatUnits(
  //   ethers.getBigInt(transferEvents[0].args['amount']),
  //   'ether'
  // );
  // console.log(
  //   `地址 ${transferEvents[0].args['from']} 转账${amount} WETH 到地址 ${transferEvents[0].args['to']}`
  // );
};

main();
