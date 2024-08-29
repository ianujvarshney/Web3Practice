const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/37af0b81e7cc43bea4a3ef7f29205fe3`);

const walletaddress = '0xa88a43c156dc6191ee06b33fe7c99c1eda133603';

const walletABI = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractIntraction = async () => {
    const walletContract = new ethers.Contract(walletaddress, walletABI, provider);

    const contractName = await walletContract.name();
    console.log(`contractName = ${contractName}`); 

    const contractBalance = await walletContract.contractBalance();
    const balethuser1 = ethers.formatEther(contractBalance);
    console.log(`contractBalance = ${balethuser1}`); 
        
    const userBalance = await walletContract.accountBalance('0xf7f5dC128E57d1Def75A79AEeF89b5ED7dbE714C');
    const balethuser = ethers.formatEther(userBalance);
    console.log(`userBalance = ${balethuser}`); 
}

contractIntraction();