/*Advance random number*/

//Write a loop that logs 5 random numbers between 0 and 1 to the console.
function assignment1() {
  let i = 0;
  while (i < 5) {
    console.log(Math.random());
    i++;
  }
}

//Write a function named getRandomInt() that return a random integer number from 0 (inclusive) to 10 (exclusive). Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
function getRandomInt(num) {
  let result = Math.floor(Math.random() * num);
  //console.log(result);
  return result;
}
// let i = 0;
// while (i < 100) {
//   getRandomInt(10);
//   i++;
// }

//Improve the function so that it return a random integer number between start (inclusive) and end (inclusive).
function improvedGetRandomInt(numStart, numEnd) {
  let result;
  if (numStart > numEnd) {
    console.log("start number is larger than end number");
  } else {
    result = Math.floor(Math.random() * (numEnd - numStart) + numStart);
  }
  return result;
}
//console.log(improvedGetRandomInt(4, 7));

//Use the function getRandomInt() to make another function called getRandomItem() that takes an array as an argument and returns a random element in the array
let fruit = ["apply", "orange", "kiwi", "banana"];
function getRandomItem(arr) {
  let itemNum = getRandomInt(arr.length);
  //console.log(arr[itemNum]);
  return arr[itemNum];
}
getRandomItem(fruit);

/* 6 : Nested for loop*/
/*Write a function that takes a number n as an argument and print out the following:
1
2 2
3 3 3
4 4 4 4
...
n n n n ... n*/
function printPyramid(num) {
  for (let i = 1; i <= num; i++) {
    let step = "";
    for (let j = 0; j < i; j++) {
      step = step + i + " ";
    }
    console.log(step);
  }
}
// printPyramid(6);
function printChessboard() {
  for (let i = 0; i < 8; i++) {
    let step = "";
    if (i == 1 || i == 3 || i == 5 || i == 7) {
      for (let j = 0; j < 8; j++) {
        if (j == 1 || j == 3 || j == 5 || j == 7) {
          step = step + " ";
        } else {
          step = step + "#";
        }
      }
    } else {
      for (let j = 0; j < 8; j++) {
        if (j == 1 || j == 3 || j == 5 || j == 7) {
          step = step + "#";
        } else {
          step = step + " ";
        }
      }
    }
    console.log(step);
  }
}
//printChessboard();
/* 7 Iterate over arrays*/
//Iterate over the array, and print out Peter earned $... today! each day.
let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
function moneyEarnedeachday(array) {
  for (let i = 0; i < array.length; i++) {
    let moneyEarned = 25 * array[i];
    console.log(`Peter earned $ ${moneyEarned} today`);
  }
}
//moneyEarnedeachday(workingHours);

//Calculate how much Peter made in the last two weeks
let result = 0;
function moneyEarnedLast2Weeks(array) {
  for (let i = 0; i < array.length; i++) {
    let moneyEarned = 25 * array[i];
    result = result + moneyEarned;
  }
  return result;
}
//console.log(moneyEarnedLast2Weeks(workingHours));

//Peter realizes that every day his working hour is a random integer number between 6 to 8 inclusively. And he wants to estimate how much he can make in one year
function estimateMoney1Year() {
  let totalWorkingHours = 0;
  for (let i = 0; i < 50 * 5; i++) {
    totalWorkingHours = totalWorkingHours + improvedGetRandomInt(6, 8);
  }
  let estimateMoney = totalWorkingHours * 25;
  return estimateMoney;
}
//console.log(estimateMoney1Year());

/*8: Array Methods*/
//Write a function called getLeapYears(start, end) that returns a list of leap years from the year start to the year end inclusively.
let leapYears = [];
function getLeapYears(yearStart, yearEnd) {
  let step = 0;
  for (let i = yearStart; i <= yearEnd; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      leapYears[step] = i;
      step++;
    }
  }
  return leapYears;
}
//console.log(getLeapYears(1988, 2020));

//Write a function called reverseArray(arr) that returns a copy of the input array in reversed order.
arrayA = [2, 3, 4, 5, 6, 6, 7, 7];
function reverseArray(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[arr.length - 1 - i] = arr[i];
  }
  return temp;
}
//console.log(reverseArray(arrayA));

//Use getRandomInt() from Assignment 1 to generate an array called evenNumbers containing 100 random integer numbers in the range 0 to 100 inclusively. Remove all odd numbers in evenNumbers and store them in an array called oddNumbers. Log both arrays to the console.

function logEvenOddnumber() {
  let random;
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < 100; i++) {
    random = getRandomInt(100);
    // console.log(random);
    if (random % 2 == 0) {
      evenNumbers[i] = random;
    } else {
      oddNumbers[i] = random;
    }
  }
  let cleanedEvenNumbers = evenNumbers.filter(function (el) {
    return el != "";
  });
  let cleanedOddNumbers = oddNumbers.filter(function (el) {
    return el != "";
  });
  console.log(`Even numbers are: ${cleanedEvenNumbers}`);
  console.log(`Odd numbers are: ${cleanedOddNumbers}`);
}
//logEvenOddnumber();

/*9 Object*/

let userA = {
  id: 123456,
  name: "Peter Parker",
  email: "peter.parker@gmail.com",
  role: "student",
  courseId: 112233,
  tasks: [
    { name: "Task 1", status: "Done" },
    { name: "Task 2", status: "Not Started" },
    { name: "Task 3", status: "In Progress" },
    { name: "Task 4", status: "Not Started" },
    { name: "Task 5", status: "Done" },
    { name: "Task 6", status: "In Progress" },
    { name: "Task 7", status: "Not Started" },
    { name: "Task 8", status: "Done" },
    { name: "Task 9", status: "Done" },
    { name: "Task 10", status: "In Progress" },
  ],
};
//How many key/value pairs does the object have?
//console.log(Object.keys(userA).length);

//What is the type of the value of the key id and courseId?
// console.log(typeof userA.id);
// console.log(typeof(userA.courseId));

//How can we change the value of the key email to pparker@gmail.com?
// userA.email = "pparker@gmail.com"
// console.log(userA.email)

//Write a function that takes in a user object like this and returns a greeting with the user's info
function greeting(user) {
  console.log(`Hi, my name is ${user.name}, my email is ${userA.email}.`);
}
//greeting(userA);

//Write a function called listOfTask() that takes in a user object like this and print out 3 lists of tasks that are "Not Started", "In Progress", and "Done", respectively
let done = [],
  notStarted = [],
  inProgress = [];
function listOfTask(user) {
  for (let i = 0; i < user.tasks.length; i++) {
    if (user.tasks[i].status == "Done") {
      done[i] = user.tasks[i].name;
    }
    if (user.tasks[i].status == "Not Started") {
      notStarted[i] = user.tasks[i].name;
    } else {
      inProgress[i] = user.tasks[i].name;
    }
  }
  let cleanedDone = done.filter(function (el) {
    return el != "";
  });
  let cleanednotStarted = notStarted.filter(function (el) {
    return el != "";
  });
  let cleanedInProgress = inProgress.filter(function (el) {
    return el != "";
  });
  console.log(`Not Started: ${cleanednotStarted}`);
  console.log(`Done: ${cleanedDone}`);
  console.log(`In Progress: ${cleanedInProgress}`);
}

//listOfTask(userA);

//Create a function called generateFakeTasks() that returns an array of n number of tasks (n is the argument)
let arrayStatus = ["Done", "Not Started", "In Progress"];
function generateFakeTasks(user, num) {
  let previousTaskNum = user.tasks.length + 1;
  for (let i = 0; i < num; i++) {
    let task = {
      name: `task ${previousTaskNum}`,
      status: getRandomItem(arrayStatus),
    };
    //console.log(task);
    userA.tasks.push(task);
    previousTaskNum++;
  }
}
//generateFakeTasks(userA, 3);
//console.log(userA);

/*10 Working with String*/

//Write a function that takes an Array of Booleans and Strings. This function should return a String - the first string that appears in the array that was passed in.
let variousThings = [
  true,
  true,
  true,
  false,
  true,
  true,
  1,
  true,
  true,
  false,
  true,
  false,
  true,
  "hello",
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  "world",
  true,
];

function findFirstString(arrayA) {
  let result = [];
  arrayA.forEach((element) => {
    if (typeof element == "string") {
      result.push(element);
    }
  });
  return result[0]; //first string only
}
//console.log(findFirstString(variousThings));

//Write a function called normalizeEmails(emails) that takes an array of emails (string). This function should return an array. All emails in the returned array should be all lowercase, and all whitespaces at both ends of each email should be removed.
let emails = ["  PETER@gmail.com", "Mia1024@gmail.COM  ", " Dorian@gmail.com "];
function normaliseEmail(email) {
  let cleanedString;
  let cleanedEmails = [];
  email.forEach((element) => {
    cleanedString = element.trim().toLowerCase();
    cleanedEmails.push(cleanedString);
  });
  return cleanedEmails;
}
//console.log(normaliseEmail(emails));

//Write a function called splitNames(fullName) that takes an full name and return an object that contains firstName and lastName as the key.
function splitNames(name) {
  let splitedName = [];
  let fullName = { firstName: "", lastName: "" };
  splitedName = name.split(" ");
  //console.log(splitedName);
  fullName.firstName = splitedName[0];
  fullName.lastName = splitedName[1];
  return fullName;
}
//console.log(splitNames("Peter Parker"));

//Generate random password: write a function getRandomString(length) that takes a number as the length and generates an arbitrary string by picking characters randomly from A-Z, a-z, and 0-9.
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomString(length) {
  let arrayCharacters = characters.split("");
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomItem(arrayCharacters));
  }
  return result.join("");
}
console.log(getRandomString(12));
