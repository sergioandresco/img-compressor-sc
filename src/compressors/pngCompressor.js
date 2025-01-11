const sharp = require('sharp');

/**
 * Compress a JPEG image.
 * @param {string} inputPath - Input file path.
 * @param {number} quality - Compression quality.
 * @returns {Promise<string>} - Output file path.
 */

//This is a function for compress images with png extension
async function pngCompressor(inputPath, quality) {
    try {
        const buffer = await sharp(inputPath)
            .png({ quality })
            .toBuffer();
        return buffer;
    } catch (error) {
        throw new Error(`Error compressing JPEG: ${error.message}`);
    }
}

module.exports = pngCompressor;