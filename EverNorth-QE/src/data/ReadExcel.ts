// Reading Data From Excel Sheets
// Using 'exceljs' library to read Excel files
// use npm install exceljs to install the library
import ExcelJS from 'exceljs';

// export async function readExcelData(filePath: string, sheetName: string): Promise<any[]> {

//     const workbook: ExcelJS.Workbook = new ExcelJS.Workbook();
//     await workbook.xlsx.readFile(filePath); // Read the Excel file

//     const worksheet = workbook.getWorksheet(sheetName); // Get the specified sheet
//     const data: any[] = [];
//     if (!worksheet || worksheet === null) {
//         throw new Error(`Worksheet AddEmp not found`);
//     }

//     const headerRow = worksheet.getRow(1); // Assuming first row is header
//     const headers: string[] = headerRow.values as string[];
//     worksheet.eachRow((row, rowNumber) => {
//         if (rowNumber === 1) return; // Skip header row
//         const rowData: any = {};

//         (row.values as any[]).forEach((value, colNumber) => {
//             if (colNumber > 0) { // Skip first empty value
//                 rowData[headers[colNumber]] = value;
//             }
//         });
//         data.push(rowData);
//     });

//     return data;
// }
// // Example usage
// (async () => {
//     const excelData = await readExcelData('src/data/Ohrm.xlsx', 'AddEmp');
//     console.log('Data from Excel file:', excelData);
// })();

let workbook = new ExcelJS.Workbook(); //initialize excel
//open and read file
workbook.xlsx.readFile("src/Data/Ohrm.xlsx").then(function () {
    //get sheet
    let worksheet = workbook.getWorksheet('AddEmp');

    //get used row count

    if (!worksheet || worksheet === null) {
        throw new Error(`Worksheet AddEmp not found`);
    }

    let rc = worksheet.rowCount; //? used to avoid null pointer exception

    //get column count
    let cc = worksheet.columnCount; //? used to avoid null pointer exception

    //loop all rows and columns

    for (let r = 1; r < rc; r++) {
        for (let c = 1; c <= cc; c++) {
            //get cell value
            console.log(worksheet.getRow(r).getCell(c).value);
        }
    }
});