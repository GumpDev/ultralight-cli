import { execSync } from 'child_process';
import { copySync } from 'fs-extra'
import {existsSync, mkdirSync, renameSync, rmSync, unlinkSync} from 'fs';
import { Color } from './color';

export default (dir) => {
	try{
		if(!dir) return console.log(Color.FgRed, "Invalid directory! use 'ultralight-cli build <build directory>'");
		if(!existsSync("./"+dir)) return console.log(Color.FgRed, "Invalid directory! choose and valid directory");
		if(!existsSync("./app/src/main.cpp"))  return console.log(Color.FgRed, "Use 'ultralight-cli init' first!");

		console.log(Color.FgBlue, `Preparing ultralight...`)
		if(!existsSync("./app/build")) mkdirSync("./app/build");
		execSync("cmake ..", {cwd: "./app/build"})

		console.log(Color.FgBlue, `Removing old build files...`)
		rmSync("./app/assets", { recursive: true, force: true })
		mkdirSync("./app/assets")
		
		console.log(Color.FgBlue, `Copying new build files...`)
		copySync("./"+dir, "./app/assets");
		renameSync("./app/assets/index.html", "./app/assets/app.html")
		console.log(Color.FgBlue, `Building ultralight...`)
		execSync("cmake --build . --config Release --clean-first", {cwd: "./app/build"})

		console.log(" ")
		console.log(Color.FgGreen, `Your app is builded!`)
		console.log(Color.FgWhite, "Look into app/build folder :)")
	}catch(e){
		console.log(Color.FgRed, "An error has occurred! please try again or open an issue https://github.com/gumpdev/ultralight-cli/issues")
	}
}