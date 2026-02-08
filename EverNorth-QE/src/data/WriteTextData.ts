// Read data from text file
import { log } from 'console';
import fs from 'fs'; // Node.js file system module
import path from 'path'; // Node.js path module

export function writeTxtData(fileName: string, data: string): void {
    // Resolve the file path relative to the current file
    const filePath = path.resolve(".", fileName);
    console.log(filePath);
    
    // Read the file content
    fs.writeFileSync(fileName, data, 'utf-8'); //write data to file
    
}

export function apendTxtData(fileName: string, data: string): void {
    // Resolve the file path relative to the current file
    const filePath = path.resolve(".", fileName);
    console.log(filePath);
    
    // Read the file content
    fs.appendFileSync(fileName, data, 'utf-8'); //append data to existing file
}
let dt = writeTxtData('src\\data\\demo.txt', 'Your data here');
let dt1 = apendTxtData('src\\data\\demo.txt', '\nAppended data here');

