import { ethers } from 'ethers';
import { config } from 'dotenv';

config();

// 构建过滤器
// const filter = contract.filters.EVENT_NAME( ...args )

// 1 过滤来自 myAddress 的 Transfer 事件
// const filter = contract.filters.Transfer(myAddress); // Transfer 为事件名称，可以是其他的
// 2 过滤所有发给 myAddress地址的Transfer事件
// contract.filters.Transfer(null, myAddress)
// 3 过滤所有从 myAddress发给otherAddress的Transfer事件
// contract.filters.Transfer(myAddress, otherAddress)
// 4 过滤所有发给myAddress或otherAddress的Transfer事件
// contract.filters.Transfer(null, [ myAddress, otherAddress ])

// infura API key
const INFURA_ID = process.env.INFURA_ID;

// 连接主网
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// 连接钱包
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// 合约地址
const address = '0xdac17f958d2ee523a2206206994597c13d831ec7';
// 交易所地址
const accountBinance = '0x28C6c06298d514Db089934071355E5743bf21d60';
// abi
const abi = [
  'event Transfer(address indexed from, address indexed to, uint amount)',
  'function balanceOf(address account) external view returns (uint256)',
];

// 声明合约实例
const contract = new ethers.Contract(address, abi, provider);

const main = async () => {
  // ...
  const balanceUSDT = await contract.balanceOf(accountBinance);
  console.log(`USDT余额: ${ethers.formatUnits(balanceUSDT, 6)}\n`);

  // 监听：USDT转入交易所
  // console.log('\n2. 创建过滤器，监听USDT转进交易所');
  // const filter = contract.filters.Transfer(null, accountBinance);
  // const events = await contract.queryFilter(filter);
  // console.log('过滤器详情：');
  // contract.on(events, (res) => {
  //   console.log('---------监听USDT进入交易所--------');
  //   console.log(
  //     `${res.args[0]} -> ${res.args[1]} ${ethers.formatUnits(res.args[2], 6)}`
  //   );
  // });

  // 监听：交易所转出USDT
  let filterToBinanceOut = contract.filters.Transfer(accountBinance);
  console.log('\n3. 创建过滤器，监听USDT转出交易所');
  console.log('过滤器详情：');
  console.log(filterToBinanceOut);
  contract.on(filterToBinanceOut, (res) => {
    console.log('---------监听USDT转出交易所--------');
    console.log(
      `${res.args[0]} -> ${res.args[1]} ${ethers.formatUnits(res.args[2], 6)}`
    );
  });

  // res.args[0] = from
  // res.args[1] = to
  // res.args[2] = amount
};

main();
