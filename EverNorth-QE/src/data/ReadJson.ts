// Read JSON data from file
import fs from 'fs'; // Node.js file system module
import path from 'path'; // Node.js path module
export function readJsonData(fileName: string): any {
    // Resolve the file path relative to the current file
    const filePath = path.resolve(".", fileName);
    console.log(filePath);
    // Read the file content
    const data = fs.readFileSync(filePath, 'utf-8');
    // Parse and return JSON data
    return JSON.parse(data);
}
let jsonData = readJsonData('src\\data\\userdata.json');
console.log('Data from JSON file:', jsonData);