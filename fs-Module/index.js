/*
 * when you clone this code, then create a index.txt file in current dir folder  
 */

const fs = require("fs");
///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// READ FILE /////////////////////////////////////

/*********** Asynchronous way to write code *************/

console.log("First"); // for only understand asynchronous code

fs.readFile("index.txt", (error, data) => {
// this code is asynchronous code
  if (error) {
console.error("Error ", error);
return error;
  }
  console.log("Data ", data.toString());
  return data;
});

console.log("last"); // for only understand asynchronous code

/************ In Synchronous Way to write this code *********/

// console.log("start synchronous code");

// when you print error then use this type of code
const file = fs.readFileSync("index.txt", (error, data) => {
  if (error) {
console.error("Error ", error);
return error;
  }
  console.log("Data ", data);
  return data;
});
console.log(file.toString());

// when you only print or try to write synchronous type code
const synchronous = fs.readFileSync("index.txt");
console.log(synchronous.toString());

console.log("code end");

/* => Second method to Read file:
 * => this method is used at low level api.
 * => this method is follow this step to read file => Open + read
 */

const buf = new Buffer(1024);

fs.open("index.txt", "r+", (error, fd) => {
  if (error) {
    console.error("Error ", error);
  }
  console.log("Open file Successfully ");
  fs.read(fd, buf, 0, buf.length, 0, (err, data) => {
    // its give data in Bytes
    if (err) {
      console.error("Err,", err);
    }
    console.log("Data ", data); // this data in bytes
    console.log("DataInString ", buf.slice(0, data).toString()); // for string data value

    fs.close(fd, (errr) => { // for closing the open file
      if (errr) {
        console.error("Error in closing file");
      } else {
        console.log("Success in closing file");
      }
    });
  });
});

// But, this method is not used at large level or in simle words prefer to not use it

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// WRITE FILE /////////////////////////////////////////////

/******************************* writing to file**************** */

fs.writeFile("index.txt", "Hello there", (err) => {
  if (err) {
    console.error("Error found in writing file!");
  } else {
    console.log("success in writing file");
  }
});


/******************************** Append File **********************/
// => there are two method to delete file

// (1) Asynchronous code
fs.appendFile("index.txt", ", -- I am Ravi", "utf8", (err) => {
  if (err) {
    console.error("Error found in append file!");
  } else {
    console.log("success in append file");
  }
});

// (2) synchronous code
// => this code is collapse with upper code so not try when you write code in asynchronous code
const sync = fs.appendFileSync('index.txt', ', -- I am Ravi', 'utf-8', (err) => {
    if (err) {
        console.error("Error found in sync file!");
      } else {
        console.log("success in sync file");
      }
});
console.log(sync);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// DELETING FILE //////////////////////////////////////

// => there are two method to delete file

// (1) Asynchronous type

fs.unlink("index.txt", (error) => {
  if (error) {
    console.error("Error found in deleting file");
  } else {
    console.log("Success in deleting file");
  }
});

// (2) synchronous type 

const del = fs.unlinkSync("index.txt", (error) => {
  if (error) {
    console.error("Error found in del file");
  } else {
    console.log("Success in del file");
  }
});
console.log(del);