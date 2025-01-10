const jpegCompressor = require('./compressors/jpegCompressor');
const pngCompressor = require('./compressors/pngCompressor');
const webpCompressor = require('./compressors/webpCompressor');
const svgCompressor = require('./compressors/svgCompressor');
const { getFileExtension, generateOutputPath } = require('./utils/fileUtils');

/**
 * Compress an image based on its type.
 * @param {string} inputPath - Path to the input image.
 * @param {number} quality - Compression quality (1-100, default: 80).
 * @returns {Promise<string>} - Path to the compressed image.
 */
async function compressImage(inputPath, quality = 80) {
    const extension = getFileExtension(inputPath).toLowerCase();
    const outputPath = generateOutputPath(inputPath);

    if (quality < 1 || quality > 100) {
        throw new Error(`Quality must be between 1 and 100. Received: ${quality}`);
    }

    try {
        switch (extension) {
            case 'jpg':
            case 'jpeg':
                return await jpegCompressor(inputPath, outputPath, quality);
            case 'png':
                return await pngCompressor(inputPath, outputPath, quality);
            case 'webp':
                return await webpCompressor(inputPath, outputPath, quality);
            case 'svg':
                return await svgCompressor(inputPath, outputPath);
            default:
                throw new Error(`Unsupported file type: ${extension}`);
        }
    } catch (error) {
        throw new Error(`Error compressing ${inputPath}: ${error.message}`);
    }
}

module.exports = { compressImage };