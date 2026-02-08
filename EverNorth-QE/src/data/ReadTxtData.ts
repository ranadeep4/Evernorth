// Read data from text file
import { log } from 'console';
import fs from 'fs'; // Node.js file system module
import path from 'path'; // Node.js path module

export function readTxtData(fileName: string): void {
    // Resolve the file path relative to the current file
    const filePath = path.resolve(".", fileName);
    console.log(filePath);
    
    // Read the file content
    const data = fs.readFileSync(fileName, 'utf-8');
    
    console.log('Data from text file:', data);
}

let dt = readTxtData('src\\data\\demo.txt');

