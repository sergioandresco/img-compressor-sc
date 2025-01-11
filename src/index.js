/**
 * img-compressor-sc library created by Sergio Andres Cobos Suarez from Colombia
 * The code is life
 */

const jpegCompressor = require('./compressors/jpegCompressor');
const pngCompressor = require('./compressors/pngCompressor');
const webpCompressor = require('./compressors/webpCompressor');
const svgCompressor = require('./compressors/svgCompressor');
const { getFileExtension } = require('./utils/fileUtils');

/**
 * Compress an image based on its type.
 * @param {string} inputPath - Path to the input image.
 * @param {number} quality - Compression quality (1-100, default: 80).
 * @returns {Promise<string>} - Path to the compressed image.
 */

//This is the principal file where it call all compressor Js files for select the file for to use
async function compressImage(inputPath, quality = 80) {
    const extension = getFileExtension(inputPath).toLowerCase();

    switch (extension) {
        case 'jpg':
        case 'jpeg':
            return await jpegCompressor(inputPath, quality);
        case 'png':
            return await pngCompressor(inputPath, quality);
        case 'webp':
            return await webpCompressor(inputPath, quality);
        case 'svg':
            return await svgCompressor(inputPath);
        default:
            throw new Error(`Unsupported file type: ${extension}`);
    }
}

module.exports = { compressImage };