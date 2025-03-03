function sortArray<T>(arr: T[]): T[] {
    return arr.sort();
}

// Test with numbers
const numbers: number[] = [1, 4, 2, 9, 3];
console.log("Output - 1:");
console.log(sortArray(numbers));
// Test with strings
const strings: string[] = ["A", "K", "B", "L"];
console.log("Output - 2:");
console.log(sortArray(strings));
