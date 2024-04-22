# ERC20 代币合约标准

## transferFrom() 基本流程

transferFrom 属于授权转账，需要先授权后转账：

1. 代币拥有者先调用 approve()函数，授权智能合约（或者其他 EOA）转移一定数量的代币。
2. 智能合约（或者其他 EOA）再调用 transferFrom()函数，实际执行代币的转移操作。
