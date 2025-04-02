# QR Code Generator (Node.js)

## Description
This is a simple Node.js application that generates a QR code from a given URL, saves the QR code image in the current directory, and stores the input URL in a `url.txt` file.

## Features
- Generates QR codes from user input.
- Saves the QR code as an image in the current directory.
- Stores the input URL in a text file (`url.txt`).

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/qr-code-generator-nodejs.git
   ```
2. Navigate to the project folder:
   ```sh
   cd qr-code-generator-nodejs
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Run the script:
   ```sh
   node index.js
   ```
2. Enter a URL when prompted.
3. The QR code image will be saved in the current directory.
4. The entered URL will be saved in `url.txt`.

## Dependencies
This project uses the following npm package:
- `qrcode`: For generating QR codes.

To install it manually:
```sh
npm install qrcode
```

## Example Output
- **QR Code Image**: `qrcode.png`
- **Stored URL**: `url.txt`

## License
This project is open-source and available under the MIT License.

## Author
Deepak Kumar

