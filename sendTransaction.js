const {Web3}= require('web3'); //importing web3
let web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))

const sendEther = async()=>{
    const weiValue = web3.utils.toWei("10","ether");
    await web3.eth.sendTransaction({
        
        from: "0x48FeFc220423776e0A13a0f156FC98b91CC5C311",
        to: "0x7da043B1fd54EA09604911140C301D1B5922687E",
        value:weiValue
    })
    console.log("transaction successful")
}

sendEther()