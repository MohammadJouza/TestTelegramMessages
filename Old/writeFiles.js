const fs = require("fs");

// const test1kMessages = require("./test1kMessages");
const messagesFile = require("../messagesFile");

/* 
file_1: from 0      to 40000  
file_2: from 40000  to 80000
file_3: from 80000  to 120000
file_4: from 120000 to 163000
*/
const start= 120000
const end=   163000
const newContent=messagesFile.slice(start,end)



  fs.writeFile("./files/file_4.js",  "const file_4 =" + JSON.stringify(newContent), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`SUCCESS Created: file_4 => from ${start} to ${end}`)
  });

  
// fs.readFile("./logic.js", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   console.log(data.length);

// });