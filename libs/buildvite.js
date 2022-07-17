import {execSync} from 'child_process'
import { Color } from './color';

export default () => {
	console.log(Color.FgBlue, `Building your vite project...`)
	try{
		execSync("tsc && vite build")
		console.log(Color.FgGreen, "Vite project builded!");
		build("dist")
	}catch(e){
		console.log(Color.FgRed, "An error has occurred! please try again or open an issue https://github.com/gumpdev/ultralight-cli/issues")
	}
}