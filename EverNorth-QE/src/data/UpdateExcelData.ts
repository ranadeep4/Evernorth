// Update Data To Excel Sheets
// Using 'exceljs' library to write Excel files
// use npm install exceljs to install the library
import ExcelJS from 'exceljs';
let workbook = new ExcelJS.Workbook(); //initialize excel
await workbook.xlsx.readFile('src/data/output.xlsx'); // Read the Excel file

const worksheet = workbook.getWorksheet('AddEmp'); // Get the specified sheet

if (!worksheet || worksheet === null) {
    throw new Error(`Worksheet AddEmp not found`);
}

    let rc = worksheet.rowCount; //? used to avoid null pointer exception

    //add new row at specific position
   let r = worksheet.insertRow(rc + 1, { id: rc, name: 'Jane Smith', role: "Consultant" });    
    r.commit();
    
//save the workbook
workbook.xlsx.writeFile("src/data/output.xlsx").then(function () {
    console.log("Data written successfully");
});

