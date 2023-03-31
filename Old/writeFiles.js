const fs = require("fs");

// const test1kMessages = require("./test1kMessages");
const messagesFile = require("../messagesFile");


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