const fs = require("fs")
const rl = require('readline')
const { ethers } = require("ethers")

function compareAddr(a, b) {
	for(var i=0; i<20; i++) {
		if(a.at(i) > b.at(i)) {
			return 1
		} else if(a.at(i) < b.at(i)) {
			return -1
		}
	}
	return 0
}

async function run(fileName, targetNum) {
	var lineReader = rl.createInterface({input: fs.createReadStream(fileName)})

	var addrList = []

	for await (const line of lineReader) {
		const addr = line.trim()
		let n = ethers.BigNumber.from(addr.substr(0, 8)).toNumber()
		if(n%2048==targetNum) {
			let arr = ethers.utils.arrayify(addr)
			addrList.push(arr)
			//console.log('Line from file:', n, arr)
		}
	}

	//console.log("len", addrList.length)
	
	addrList.sort(function(a,b) {return compareAddr(a,b)})
	//for(var i=0; i<addrList.length; i++) {
	//	console.log("here", addrList[i])
	//}

	var b = new Buffer(addrList.length*20)
	for(var i=0; i<addrList.length; i++) {
		for(var j=0; j<20; j++) {
			b[i*20+j] = addrList[i].at(j)
		}
	}

	fs.writeFile(`addr_list.${targetNum}.dat`, b, (err) => {
	   if (err) throw err;
	   console.log('saved', targetNum);
	})
}

async function main() {
	for(var targetNum=0; targetNum<2048; targetNum++) {
		await run("addr_list.txt", targetNum)
	}
}

main();
