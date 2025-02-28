const express = require("express");

const app = express();
const PORT = 3000;

// Sample bank statement JSON
const bankStatement = {
  "Bank Name": "XYZ Bank Ltd.",
  "Branch": "Mumbai Main Branch",
  "Account Holder Name": "John Doe",
  "Account Number": "1234 5678 9101 1121",
  "Statement Period": "01-June-2024 to 30-June-2024",
  "Transactions": [
    {
      "Date": "01-Jun-24",
      "Transaction ID": "TXN1001",
      "Description": "Opening Balance",
      "Debit (INR)": "",
      "Credit (INR)": "",
      "Balance (INR)": "50,000.00"
    },
    {
      "Date": "03-Jun-24",
      "Transaction ID": "TXN1002",
      "Description": "ATM Withdrawal",
      "Debit (INR)": "5,000.00",
      "Credit (INR)": "",
      "Balance (INR)": "45,000.00"
    },
    {
      "Date": "05-Jun-24",
      "Transaction ID": "TXN1003",
      "Description": "Online Transfer",
      "Debit (INR)": "10,000.00",
      "Credit (INR)": "",
      "Balance (INR)": "34,900.00*"
    },
    {
      "Date": "07-Jun-24",
      "Transaction ID": "TXN1004",
      "Description": "Salary Credit",
      "Debit (INR)": "",
      "Credit (INR)": "50,000.00",
      "Balance (INR)": "85,000.00"
    },
    {
      "Date": "10-Jun-24",
      "Transaction ID": "TXN1005",
      "Description": "Utility Bill",
      "Debit (INR)": "3,500.00",
      "Credit (INR)": "",
      "Balance (INR)": "81,400.00*"
    },
    {
      "Date": "15-Jun-24",
      "Transaction ID": "TXN1006",
      "Description": "Shopping (POS)",
      "Debit (INR)": "7,500.00",
      "Credit (INR)": "",
      "Balance (INR)": "73,800.00"
    },
    {
      "Date": "18-Jun-24",
      "Transaction ID": "TXN1007",
      "Description": "UPI Payment",
      "Debit (INR)": "2,000.00",
      "Credit (INR)": "",
      "Balance (INR)": "71,800.00"
    },
    {
      "Date": "20-Jun-24",
      "Transaction ID": "TXN1008",
      "Description": "Cashback Reward",
      "Debit (INR)": "",
      "Credit (INR)": "500.00",
      "Balance (INR)": "72,300.00"
    },
    {
      "Date": "22-Jun-24",
      "Transaction ID": "TXN1009",
      "Description": "Loan EMI",
      "Debit (INR)": "12,000.00",
      "Credit (INR)": "",
      "Balance (INR)": "60,300.00*"
    },
    {
      "Date": "25-Jun-24",
      "Transaction ID": "TXN1010",
      "Description": "Interest Credit",
      "Debit (INR)": "",
      "Credit (INR)": "1,200.00",
      "Balance (INR)": "61,600.00"
    },
    {
      "Date": "28-Jun-24",
      "Transaction ID": "TXN1011",
      "Description": "ATM Withdrawal",
      "Debit (INR)": "6,000.00",
      "Credit (INR)": "",
      "Balance (INR)": "55,600.00"
    },
    {
      "Date": "30-Jun-24",
      "Transaction ID": "TXN1012",
      "Description": "End Balance",
      "Debit (INR)": "",
      "Credit (INR)": "",
      "Balance (INR)": "55,600.00"
    }
  ],
  "Notes": [
    "Minor mismatches marked with (*)",
    "Some transactions show incorrect balance calculations",
    "Possible rounding-off errors in certain transactions",
    "Checksum validation for transactions missing"
  ]
};

// API Endpoint to return the bank statement
app.get("/api/statement/:pan", (req, res) => {
  res.json(bankStatement);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
