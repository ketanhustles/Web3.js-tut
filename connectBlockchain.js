const {Web3}= require('web3'); //importing web3
let web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))

const connectBlockchain = async()=>{
    const balance = await web3.eth.getBalance("0x48FeFc220423776e0A13a0f156FC98b91CC5C311")
    const balanceEther = web3.utils.fromWei(balance,"ether")
    const balanceWei = web3.utils.toWei(balanceEther, "ether")
    console.log(balance.toString())
    console.log(balanceEther)
    console.log(balanceWei)
}

connectBlockchain()