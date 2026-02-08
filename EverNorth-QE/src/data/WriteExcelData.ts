// Writing Data To Excel Sheets
// Using 'exceljs' library to write Excel files
// use npm install exceljs to install the library
import ExcelJS from 'exceljs';
let workbook = new ExcelJS.Workbook(); //initialize excel
//create new sheet
let worksheet = workbook.addWorksheet('AddEmp');
if (!worksheet || worksheet === null) {
    throw new Error(`Worksheet AddEmp not found`);
}

// set the column headers
worksheet.columns = [{
    header: 'Id',
    key: 'id'
},
{ header: 'Name', key: 'name' },
{ header: 'Role', key: 'role' }];

// add rows
worksheet.addRow({ id: 1, name: 'sudhakar', role: "trainer" });
worksheet.addRow({ id: 2, name: 'bale', role: "architect" });
worksheet.addRow({ id: 3, name: 'kumar', role: "manager" });
worksheet.addRow({ id: 4, name: 'raja', role: "developer" });
worksheet.addRow({ id: 5, name: 'rani', role: "tester" });
worksheet.addRow({ id: 6, name: 'swathi', role: "ba" });
//add new row at end
worksheet.addRow({ id: 7, name: 'John Doe', role: "HR" });

//save the workbook
workbook.xlsx.writeFile("src/data/output.xlsx").then(function () {
    console.log("Data written successfully");
});

