//this is my homework for 30.01.2023



 /* 1. Write a script that loops through an array of strings and logs each one to the console.  */

/* function logger(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let x = ["javascript", "is", "your", "friend", "not", "your","enemy"];
logger(x);  
 */
// აქ ფუნქციით გავაკეთე, მაგრამ მოგვიანებით რომ ვნახე თურმე სხვა უფრო მარტივი მეთოდებითაც შეიძლებოდა




/*  2. Create a program that takes an array of numbers and returns the sum of all 
the numbers in the array. Use a for loop to iterate over the array and add each number to a total variable. */


 /* function sumCalculator(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(sumCalculator([5,6,8,9,1])); 
 */





/* 3. Create a function that takes a number as an argument and returns "positive" if the number is positive, "negative" if the number is negative, and "zero" if the number is zero. */

//ვეცადე ცოტათი გამერთულებინა და მასივიდან ამოეღო ციფრები, და არა ფუნქციაში პირდაპირ თითო-თითოდ გადაცემით.

  
/* function numbInspector (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log("positive");
        }
        else if (arr[i] < 0) {
            console.log("negative");
        }
        else if (arr[i] == 0) {
            console.log("zero");
        }
        else {
            console.log("The input needs to be corrected")
        }
    }
}

let x = [3, 5, 9, -12, 7, -3, 0, -4, 0];
numbInspector(x); */






/* 4. Create a program that takes a string and returns the number of vowels in the string. Use a for loop to iterate over the string, and use an if statement to check if each character is a vowel. */

/*  function vowelSummer(string) {
    let vowel = 0;
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] ==="e" || string[i] === "i" || string[i] ==="o" || string[i] === "u") {
        vowel++; 
        } 
    }
    return vowel;
}
console.log(vowelSummer("HELLO")); 
 */
// აქ ძალიან გავიჭედე და ჩატი დავიხმარე, მაგრამ ახსნა ძალიან კარგად წავიკითხე და რეალურად გავაანალიზე კოდის რა ნაწილი სად რას აკეთებს და რა ლოგიკით მუშაობს.
 





 /* 5. Create a program that takes an array of strings and returns an array of the same strings in reverse order. Use a for loop to iterate over the array in reverse order and add each string to a new array.  */ 

/*  function arrayConverter(arrays) {
    let newArrays = [];
    for (let i = arrays.length - 1; i >= 0; i--) {
        newArrays.push(arrays[i]); 
    }
    return newArrays;
}

let ar1 = ["my", "name", "is", "john"];
let newArrays = arrayConverter(ar1);
console.log(newArrays);  */