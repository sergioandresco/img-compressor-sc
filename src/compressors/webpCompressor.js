const sharp = require('sharp');

/**
 * Compress a WebP image.
 * @param {string} inputPath - Input file path.
 * @param {number} quality - Compression quality (1-100).
 * @returns {Promise<Buffer>} - Compressed image as a Buffer.
 */

//This is a function for compress images with webp extension
async function webpCompressor(inputPath, quality) {
    try {
        const buffer = await sharp(inputPath)
            .webp({ quality })
            .toBuffer();
        return buffer;
    } catch (error) {
        throw new Error(`Error compressing WebP: ${error.message}`);
    }
}

module.exports = webpCompressor;