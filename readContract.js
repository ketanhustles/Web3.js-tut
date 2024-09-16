const {Web3}= require('web3'); //importing web3
let web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
const ABI = require("./abi.json")

//create a contract instance- ABI + Contract address
const readContract = async()=>{
    const contractAddress= "pass the contract address"
    const contratInstance = new web3.eth.Contract(ABI, contractAddress)
    console.log(contractInstance)

    //calling methods from contract
    const value = await contractInstance.methods.get().call()
    console.log(value.toString())

    // call()- used to read from the blockchain

}
readContract()