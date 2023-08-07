const numbers = [1, 2, 3, 4, 5];

// Remove elements from index 2 onwards
const removedElements = numbers.splice(2);
// numbers: [1, 2], removedElements: [3, 4, 5]

// Insert elements at index 1 without removing any elements
numbers.splice(1, 0, 6, 7);
// numbers: [1, 6, 7, 2]

// Replace elements starting from index 2
const replacedElements = numbers.splice(2, 2, 8, 9);
// numbers: [1, 6, 8, 9], replacedElements: [7, 2]
