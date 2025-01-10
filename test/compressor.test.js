const fs = require('fs');
const path = require('path');
const { compressImage } = require('../src/index'); // Adjust this path to your library's main file

(async () => {
    try {
        // Path to the input image
        const inputImage = path.join(__dirname, 'test.jpg'); // Replace with your image file

        console.log(`Original Image: ${inputImage}`);

        // Check the original file size
        const originalSize = fs.statSync(inputImage).size / 1024; // Convert to KB
        console.log(`Original Size: ${originalSize.toFixed(2)} KB`);

        // Compress the image
        const compressedPath = await compressImage(inputImage, 75); // Pass only the input image and quality

        // Check the compressed file size
        const compressedSize = fs.statSync(compressedPath).size / 1024; // Convert to KB
        console.log(`Compressed Image: ${compressedPath}`);
        console.log(`Compressed Size: ${compressedSize.toFixed(2)} KB`);

        // Calculate compression percentage
        const compressionRate = ((originalSize - compressedSize) / originalSize) * 100;
        console.log(`Compression Rate: ${compressionRate.toFixed(2)}%`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})();