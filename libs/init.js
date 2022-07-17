import { execSync } from 'child_process'
import { Color } from './color';

export default () => {
	console.log(Color.FgBlue, `Cloning ultralight in your project...`)
	try{
		execSync("git clone https://github.com/ultralight-ux/ultralight-quick-start app")
		console.log(Color.FgGreen, "Cloned ultralight in your project!");
	}catch(e){
		console.log(Color.FgRed, "An error has occurred! please try again or open an issue https://github.com/gumpdev/ultralight-cli/issues")
	}
}