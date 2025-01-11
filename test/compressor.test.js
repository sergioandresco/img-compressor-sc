const fs = require('fs');
const path = require('path');
const { compressImage } = require('../src/index'); // Adjust the path to the main library file

(async () => {
    try {
        // Path to the input image
        const inputImage = path.join(__dirname, 'serch1.png'); // Replace with your image file

        console.log(`Original Image: ${inputImage}`);

        // Check the original file size
        const originalSize = fs.statSync(inputImage).size / 1024; // Convert bytes to KB
        console.log(`Original Size: ${originalSize.toFixed(2)} KB`);

        // Compress the image
        const compressedBuffer = await compressImage(inputImage, 75); // Compress and get a buffer
        console.log('Image compressed successfully.');

        // Calculate the size of the compressed image from the buffer
        const compressedSize = compressedBuffer.byteLength / 1024; // Convert bytes to KB
        console.log(`Compressed Size: ${compressedSize.toFixed(2)} KB`);

        // Calculate compression percentage
        const compressionRate = ((originalSize - compressedSize) / originalSize) * 100;
        console.log(`Compression Rate: ${compressionRate.toFixed(2)}%`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
})();