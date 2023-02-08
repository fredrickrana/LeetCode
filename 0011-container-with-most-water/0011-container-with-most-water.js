/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   var maxArea = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let x = i + 1; x < height.length; x++) {
//       var minHeight = Math.min(height[i], height[x]);
//       if ((minHeight * (x - i)) > maxArea) {
//         maxArea = (minHeight * (x - i));
//       }
//     }
//   }
//   return maxArea;
// };

// x - i === minArea
// area calculate x * y
// calculate the min height which is the value of the lower index
// multiply by the distance in index 


// while loop
// start with end (.length - 1) and the first [0]
// take the min height of the two points
// subtract the indexes
// store the value within a variable

var maxArea = function(height) {
    var area = 0;
    var i = 0;
    var x = height.length - 1;
    while (i < x) {
        var minHeight = Math.min(height[i], height[x]);
        if ((minHeight * (x - i)) > area) {
            area = (minHeight * (x - i));
        }
        if (height[i] > height[x]) {
            x--;
        } else {
            i++;
        }
    }
    return area;
}  