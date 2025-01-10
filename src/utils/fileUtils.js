const path = require('path');

/**
 * Extract the file extension.
 * @param {string} filePath - File path.
 * @returns {string} - File extension.
 */
function getFileExtension(filePath) {
    return path.extname(filePath).replace('.', '');
}

/**
 * Generate an output path for the compressed image.
 * @param {string} inputPath - Input file path.
 * @returns {string} - Output file path.
 */
function generateOutputPath(inputPath) {
    const { dir, name, ext } = path.parse(inputPath);
    return path.join(dir, `${name}-compressed${ext}`);
}

module.exports = { getFileExtension, generateOutputPath };