/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */


// APPROACH DEPTH-FIRST SEARCH - RECURSION

// The floodFill function takes in an image matrix, a starting row sr, a starting column sc, and a color to be applied. It first checks if the startingColor at the given starting position is already equal to the color. If they are the same, it returns the original image as no changes are required.

// Otherwise, it calls the dfs (depth-first search) function to perform the flood fill. The dfs function performs the recursive flood fill algorithm. It first checks if the current row and column are within the boundaries of the image matrix and if the current cell's color is the same as the startingColor. If any of these conditions are not met, it stops the recursion.

// If the conditions are satisfied, it updates the current cell with the color and recursively calls the dfs function on its neighboring cells (top, bottom, left, and right) to continue the flood fill process.

// Finally, the floodFill function returns the modified image matrix after the flood fill operation.

var floodFill = function(image, sr, sc, color) {
    const startingColor = image[sr][sc];
    if (startingColor === color) {
        return image; // No need to perform flood fill if the new color is the same as the starting color
    }
    dfs(image, sr, sc, color, startingColor);
    return image;
};

const dfs = function(image, row, col, color, startingColor) {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== startingColor) {
        return; // Stop the recursion if we reach the boundaries or encounter a different color
    }
    image[row][col] = color; // Update the current cell with the new color
    dfs(image, row - 1, col, color, startingColor); // Recurse on the top neighbor
    dfs(image, row + 1, col, color, startingColor); // Recurse on the bottom neighbor
    dfs(image, row, col - 1, color, startingColor); // Recurse on the left neighbor
    dfs(image, row, col + 1, color, startingColor); // Recurse on the right neighbor
};