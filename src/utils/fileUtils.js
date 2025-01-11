const path = require('path');

/**
 * Extract the file extension.
 * @param {string} filePath - File path.
 * @returns {string} - File extension.
 */

//This function is used to extracts the file extension
function getFileExtension(filePath) {
    return path.extname(filePath).replace('.', '');
}

module.exports = { getFileExtension };