const sharp = require('sharp');

/**
 * Compress JPEG image.
 * @param {string} inputPath - Path to the input image.
 * @param {string} outputPath - Path to save the compressed image.
 * @param {number} quality - Compression quality (1-100).
 * @returns {Promise<string>} - Path to the compressed image.
 */
async function jpegCompressor(inputPath, outputPath, quality) {
    try {
        await sharp(inputPath).jpeg({ quality }).toFile(outputPath);
        return outputPath;
    } catch (error) {
        throw new Error(`JPEG compression failed: ${error.message}`);
    }
}

module.exports = jpegCompressor;