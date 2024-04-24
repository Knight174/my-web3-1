import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

const provider = ethers.getDefaultProvider(); // 提供默认的以太网络连接
// const provider = new ethers.JsonRpcProvider(url) // 提供特定节点服务商的节点连接

// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 连接以太坊主网
const providerETH = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// 连接sepolia主网
const providerSepolia = new ethers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  // 读取链上数据
  // 1. 查询vitalik在主网和Goerli测试网的ETH余额
  console.log('1. 查询vitalik在主网和Goerli测试网的ETH余额');
  const balance0 = await provider.getBalance(`vitalik.eth`);
  console.log(
    `默认方法：ETH Balance of vitalik: ${ethers.formatEther(balance0)} ETH`
  );

  const balance = await providerETH.getBalance(`vitalik.eth`);
  console.log(
    `指定主网：ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`
  );

  const balanceSepolia = await providerSepolia.getBalance(`vitalik.eth`);
  console.log(
    `指定测试网：Sepolia ETH Balance of vitalik: ${ethers.formatEther(
      balanceSepolia
    )} ETH`
  );

  // 2. 查询provider连接到了哪条链
  console.log('\n2. 查询provider连接到了哪条链');
  const network = await providerETH.getNetwork();
  console.log(network.toJSON());

  // 3. 查询区块高度
  console.log('\n3. 查询区块高度');
  const blockNumber = await providerETH.getBlockNumber();
  console.log(blockNumber);

  // 4. 查询 vitalik 钱包历史交易次数
  console.log('\n4. 查询 vitalik 钱包历史交易次数');
  const txCount = await providerETH.getTransactionCount('vitalik.eth');
  console.log(txCount);

  // 5. 查询当前建议的gas设置
  console.log('\n5. 查询当前建议的gas设置');
  const feeData = await providerETH.getFeeData();
  console.log(feeData);

  // 6. 查询区块信息
  console.log('\n6. 查询区块信息');
  const block = await providerETH.getBlock(0);
  console.log(block);

  // 7. 给定合约地址查询合约bytecode，例子用的WETH地址
  console.log('\n7. 给定合约地址查询合约bytecode，例子用的WETH地址');
  const code = await providerETH.getCode(
    '0xc778417e063141139fce010982780140aa0cd5ab'
  );
  console.log(code);
};

main();
