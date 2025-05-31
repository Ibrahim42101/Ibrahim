// 10. How do you check if a variable `num` is exactly equal to 100 and is a number type?
let num = 100; 
if (num === 100 && typeof num === "number") {
    console.log("Correct");
}

// 11. What will be the output of the following code?
let message = "Hello World"; 
console.log(message.indexOf("World")); 

// 12. Which method splits a string into an array using a specific separator?
let str = "apple,banana,grape"; 
let result = str.split(","); 
console.log(result); 

// 13. What does the splice() method do in arrays?
let colors = ["red", "blue", "green"];
colors.splice(1, 1); 
console.log(colors); 

// 14. What will be the result of this code?
let colors2 = ["red", "blue", "green"]; 
colors2.splice(1, 1); 
console.log(colors2);

// 15. How can you join an array into a single string separated by commas?
let arr = ["a", "b", "c"]; 
console.log(arr.join(","));

// 16. What will this return?
let str2 = "apple,banana,grape"; 
let result2 = str2.split(","); 
console.log(result2[1]);

// 17. Which method checks if an array contains a certain value?
let arr2 = [1, 2, 3]; 
console.log(arr2.includes(2)); 

// 18. What does indexOf() return if the element is not found?
let arr3 = [1, 2, 3]; 
console.log(arr3.indexOf(4)); 

// 19. What does this code do?
let numbers2 = [1, 2, 3, 4]; 
numbers2.splice(2, 0, 99); // Adds 99 at index 2
console.log(numbers2); 

// 20. What will be the output of this code?
let greeting = "Hello"; 
console.log(greeting.charAt(1)); 
