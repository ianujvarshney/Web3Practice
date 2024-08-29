const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/37af0b81e7cc43bea4a3ef7f29205fe3`
);

const queryBlockchain = async () => {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log('Current Blockchain Number: ' + blockNumber);
        const balance = await provider.getBalance('0xF1CB37D9F632aE7814BC667Bd4B8f6cA65e72310');
        console.log(`balance = ${balance}`);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

queryBlockchain();
