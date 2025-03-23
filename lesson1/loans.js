const fs = require('fs');
const xlsx = require('xlsx');

const path = './loans.json';
const excelPath = './loans.xlsx';

class Loan {
    constructor(userId, bookId, date) {
        this.userId = userId;
        this.bookId = bookId;
        this.date = date;
    }
}

// פונקציה לקריאה מקובץ JSON
function readLoans() {
    try {
        if (!fs.existsSync(path)) {
            return [];
        }
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.log("Error reading loans file:", err);
        return [];
    }
}

// פונקציה להוספת השאלה ושמירה ל־JSON ול־Excel
function addLoan(userId, bookId) {    
    console.log(`Adding loan: User=${userId}, Book=${bookId}`);
    const loans = readLoans();
    console.log("Current loans:", loans.length);
    
    const newLoan = new Loan(userId, bookId, new Date().toISOString().split('T')[0]);
    loans.push(newLoan);
    console.log("Updated loans:", loans.length);
  
    try {
      fs.writeFileSync(path, JSON.stringify(loans, null, 2), 'utf8');
      console.log("JSON file saved successfully");
    } catch (err) {
      console.error("Error saving JSON file:", err);
    }
    
    saveToExcel(loans);
    console.log("Loan process completed");
  }

// פונקציה לשמירת הנתונים בקובץ Excel
function saveToExcel(loans) {
    console.log("Saving to Excel...");
  console.log("Excel path:", excelPath);
  console.log("Current directory:", process.cwd());
  
  try {
    const ws = xlsx.utils.json_to_sheet(loans);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Loans");
    
    console.log("Workbook created, attempting to write file...");
    xlsx.writeFile(wb, excelPath);
    console.log("Excel file saved successfully!");
  } catch (error) {
    console.error("Error saving Excel file:", error);
    console.error("Error details:", error.stack);
  }
}

// פונקציה להצגת השאלות עם אפשרות סינון
function getLoansByUser(userId) {
    const loans = readLoans();
    return loans.filter(loan => loan.userId === userId);
}

module.exports = { addLoan, getLoansByUser, readLoans };
