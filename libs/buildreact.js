import {execSync} from 'child_process'
import { Color } from './color'

export default () => {
	console.log(Color.FgBlue, `Building your react project...`)
	try{
		execSync("react-scripts build")
		console.log(Color.FgGreen, "React project builded!");
		build("build")
	}catch(e){
		console.log(Color.FgRed, "An error has occurred! please try again or open an issue https://github.com/gumpdev/ultralight-cli/issues")
	}
}