const sharp = require('sharp');

/**
 * Compress JPEG image.
 * @param {string} inputPath - Path to the input image.
 * @param {number} quality - Compression quality (1-100).
 * @returns {Promise<string>} - Path to the compressed image.
 */

//This is a function for compress images with jpeg or jpg extension
async function jpegCompressor(inputPath, quality) {
    try {
        const buffer = await sharp(inputPath)
            .jpeg({ quality })
            .toBuffer();
        return buffer;
    } catch (error) {
        throw new Error(`Error compressing JPEG: ${error.message}`);
    }
}

module.exports = jpegCompressor;