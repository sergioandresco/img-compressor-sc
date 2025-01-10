const fs = require('fs');
const { optimize } = require('svgo');

/**
 * Compress an SVG file.
 * @param {string} inputPath - Path to the input SVG file.
 * @param {string} outputPath - Path to save the compressed SVG file.
 * @returns {Promise<void>}
 */
async function svgCompressor(inputPath, outputPath) {
    const svgContent = fs.readFileSync(inputPath, 'utf-8');
    const optimizedSvg = optimize(svgContent, {
        multipass: true, // Optimize multiple times for better results
    }).data;

    fs.writeFileSync(outputPath, optimizedSvg);
}

module.exports = svgCompressor;