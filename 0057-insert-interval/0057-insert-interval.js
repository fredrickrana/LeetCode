/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// var insert = function(intervals, newInterval) {
//   let [start, end] = newInterval;
//   let left = [];
//   let right = [];
  
//   for (const interval of intervals) {
//     const [first, last] = interval;
	
// 	// current interval is smaller than newInterval
//     if (last < start) left.push(interval);
	
// 	// current interval is larger than newInterval
//     else if (first > end) right.push(interval);
	
// 	// there is a overlap
//     else {
//       start = Math.min(start, first);
//       end = Math.max(end, last);
//     }
//   }
  
//   return [...left, [start, end], ...right]; 
    
// };

// PSUEDO CODE
// Initialize an empty 'merged' array to store the merged intervals

// Iterate through the 'intervals' array
// add intervals that end before the new interval: check if the end time of the current interval is less than the start time of the new interval. if so, we add the current interval to 'merged' array and move to the next interval
// merge intervals that overlap with thenew interval: check if the start time of the current interval is less than or equal to the end time of the new interval. if there is an overlap, update the start and end times of the new intervcal to emcompass the current interval

// add the merged interval: add the merged interval (updated new interval) to the 'merged' array

// add the remaining intervals: add the remaining intervals from the 'intervals' array to the 'merged' array

// return the 'merged' array, which contains the intervals with the new interval inserted

var insert = function(intervals, newInterval) {
    let merged = [];
    let i = 0;
    
    // Add intervals that end before the new interval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }
    
    // Merge intervals that overlap with the new interval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    // Add the merged interval 
    merged.push(newInterval);
    
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i++;
    }
    
    return merged;
    
};

// while i is less than intervals.length and the second element in the arrays of intervals is less than the newInterval first element, push into the empty array
// merged = [[1, 2]]
// i = 1

// while the first element in the arrays of intervals is less than or equal to the second element of the newInterval
// 3 <= 8
// [3, 8]
// i = 2

// 6 <= 8
// [3, 8]
// i = 3

// 8 <= 8
// [3, 10]

// merged = [[1, 2], [3, 10], [12, 16]]



