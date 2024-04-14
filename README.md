# Smart Verify!

#
## Smart Contract Vulnerability Checker

This is a web application that allows users to upload their Solidity smart contracts and check if they are vulnerable based on four key parameters. The application uses a machine learning model running in the backend to analyze the smart contract code and provide a report on its security status.

## Features

- Upload Solidity smart contract files (.sol)
- Analyze the contract against four key vulnerability parameters:
  1. Reentrancy Vulnerability
  2. Timestamp Dependence Vulnerability
  3. Delegate Call Vulnerability
  4. Integer Overflow Vulnerability
- Provide a clear and concise report on the contract's security status
- Offer suggestions for improving the contract's security (if vulnerabilities are found)