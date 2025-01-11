const fs = require('fs');
const { optimize } = require('svgo');

/**
 * Compress an SVG file.
 * @param {string} inputPath - Path to the input SVG file.
 * @returns {Promise<Buffer>} - Optimized SVG content as a Buffer.
 */

//This is a function for compress images with svg extension
//SVG is a vector format, so, this need svgo for manipulate the vectors
async function svgCompressor(inputPath) {
    try {
        // Read the input SVG file
        const svgContent = fs.readFileSync(inputPath, 'utf-8');

        // Optimize the SVG content
        const optimizedSvg = optimize(svgContent, {
            multipass: true, // Optimize multiple times for better results
        });

        if (optimizedSvg.error) {
            throw new Error(optimizedSvg.error);
        }

        // Convert optimized SVG string to a Buffer
        return Buffer.from(optimizedSvg.data, 'utf-8');
    } catch (error) {
        throw new Error(`Error compressing SVG: ${error.message}`);
    }
}

module.exports = svgCompressor;