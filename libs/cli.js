import build from './build'
import buildvite from './buildvite'
import buildreact from './buildreact'
import init from './init'
import {Color} from './color'

const VERSION = "1.0.0"

export function cli (args){
	const method = args[2] || ""
	const file   = args[3] || ""

	switch(method){
		case "init":
			init()
		break
		case "build":
			build(file)
		break
		case "build-vite":
			buildvite()
		break
		case "build-react":
			buildreact()
		break
		default:
			header()
		break
	}
}

function header(){
	console.log(Color.FgCyan, `Ultralight CLI ${VERSION}`)
	console.log(Color.FgCyan, "https://github.com/gumpdev/ultralight-cli")
	console.log(" ")
	console.log(Color.FgRed, "This is an Unofficial CLI for ultralight")
	console.log(Color.FgGreen, "See https://ultralig.ht/")
	console.log(" ")
	console.log(Color.FgWhite, "Use:")
	console.log(Color.FgCyan, "ultralight-cli init", Color.FgWhite, "- to initializate the Ultralight in your project")
	console.log(Color.FgCyan, "ultralight-cli build", Color.FgGreen, "<build dir>", Color.FgWhite, "- to build selected directory")
	console.log(Color.FgCyan, "ultralight-cli build-react", Color.FgWhite, "- to build react project")
	console.log(Color.FgCyan, "ultralight-cli build-react", Color.FgWhite, "- to build vite project")
}