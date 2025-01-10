const sharp = require('sharp');

/**
 * Compress a JPEG image.
 * @param {string} inputPath - Input file path.
 * @param {string} outputPath - Output file path.
 * @param {number} quality - Compression quality.
 * @returns {Promise<string>} - Output file path.
 */
async function pngCompressor(inputPath, outputPath, quality) {
    try {
        await sharp(inputPath).png({ quality }).toFile(outputPath);
        return outputPath;
    } catch (error) {
        throw new Error(`PNG compression failed: ${error.message}`);
    }
}

module.exports = pngCompressor;