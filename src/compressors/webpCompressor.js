const sharp = require('sharp');

/**
 * Compress a JPEG image.
 * @param {string} inputPath - Input file path.
 * @param {string} outputPath - Output file path.
 * @param {number} quality - Compression quality.
 * @returns {Promise<string>} - Output file path.
 */
async function webpCompressor(inputPath, outputPath, quality) {
    await sharp(inputPath).webp({ quality }).toFile(outputPath);
    return outputPath;
}

module.exports = webpCompressor;