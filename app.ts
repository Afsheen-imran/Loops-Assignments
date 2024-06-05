//. QUESTION NO 2  "Creating a Lesson Plan(Using for loop )""

let mywork =  []

for (let i = 1; i <= 10; i++) {
    
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1
    };
    mywork.push(lesson);
}

console.log(mywork);



// QUESTION NO 2 'Guessing Game (Using while loop )'

// Step 1: Set the maximum value
const maxValue: number = 5;

// Step 2: Generate a random number
const randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number:", randomNumber);

// Step 3: Track the guess status
let trackGuess: boolean = false;

// Step 4: Predefined guesses
const guesses: number[] = [3, 4, 5, 2];

// Step 5: Iterate over guesses
let i: number = 0;
while (!trackGuess && i < guesses.length) {
  const currentGuess: number = guesses[i];
  
  // Step 6: Check the user's guess
  if (currentGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number:", currentGuess);
    trackGuess = true;
  } else if (currentGuess < randomNumber) {
    console.log("Too low! Try again with a higher number.");
  } else {
    console.log("Too high! Try again with a lower number.");
  }
  
  i++;
};
//QUESTION NO 3   "Counter Incrementer (Using do while loop )""

let counter:number = 0;

let step = 5;

do {
    console.log(`Counter value ${counter}`);
    counter += step;
    
} while (counter <= 100);

console.log("Counter has been finished! ");
    

// QUESTION NO 4  "EXPLORING OBJECTS WITH FOR...IN LOOP" 

// Step 1: Create the object
let  myObject = {
    item1: "Mango",
    item2: "Pineapple",
    item3: "Banana",
  };
  
  // Step 2: Use a for...in loop to iterate through the properties
  for (let property in myObject) {
    console.log(`Property: ${property}, Value: ${myObject[property as keyof typeof myObject]}`);
  }
  

//QUESTION NO 5 "EXPLORING ARRAYS WITH LOOPS(Using loop )"
  
  // 1. Create an empty array
let myArray: number[] = [];

// 2. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

// 3. Log the array into the console
console.log(myArray);

// 4. Use the for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

// 5. Use the for...of loop to output the value into the console from the array
for (let value of myArray) {
  console.log(value);
}

  
  





