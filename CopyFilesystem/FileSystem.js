//ESversion:6 code
//  import { copyFileSync } from "fs";

// copyFileSync("file1.txt","file2.txt");

//Here file2.txt created after run this js file on Cmd.
const fs =require("fs");

fs.copyFileSync("file1.txt","file2.txt");