
import { database } from '../fireBase/fireBase'
// ****** !CRITICAL! run only with: nodemon  --max-old-space-size=12288  index.js ***** //

const fs2 = require('fs');
const textByLine2 = fs2.readFileSync('C:/Users/mudale/Desktop/rate.tsv').toString().split("\n");
let ratingArr = {}
for (let i = 0; i < textByLine2.length; i++) {
    let words2 = textByLine2[i].split("\t")
    ratingArr[words2[0]] = {
        rating: words2[1],
        noOfRaters: words2[2].replace('\r', '')
    }
}

const fs = require('fs');
const textByLine = fs.readFileSync('C:/Users/mudale/Desktop/titleBasics.tsv').toString().split("\n");
// let mmdbDataArr = {}
// for (let i = 0; i < textByLine.length; i++) {
//     let words = textByLine[i].split("\t")
//     mmdbDataArr[words[0]] = {
//         type: words[1],
//         name: words[2],
//         originalName: words[3],
//         rating: ratingArr[words[0]] ? ratingArr[words[0]].rating : null,
//         genere: words[8].replace('\r', ''),
//         startYear: words[5],
//         endYear: words[6],
//         noOfRaters: ratingArr[words[0]] ? ratingArr[words[0]].noOfRaters : null
//     }
// }
let mmdbDataArr = []
for (let i = 0; i < 100; i++) {
    let words = textByLine[i].split("\t")
    mmdbDataArr.push = {
        id: words[0],
        type: words[1],
        name: words[2],
        originalName: words[3],
        rating: ratingArr[words[0]] ? ratingArr[words[0]].rating : null,
        genere: words[8].replace('\r', ''),
        startYear: words[5],
        endYear: words[6],
        noOfRaters: ratingArr[words[0]] ? ratingArr[words[0]].noOfRaters : null
    }
}


for (let i = 0; i < mmdbDataArr.length; i++)
    database.ref('MMDB').push(mmdbDataArr[i]);

// const JSONStream = require("JSONStream");
// const transformStream = JSONStream.stringify();
// const outputStream = fs.createWriteStream('C:/Users/mudale/Desktop/' + "data.json");
// transformStream.pipe(outputStream);
// for (const [key, value] of Object.entries(mmdbDataArr)) 
//     transformStream.write(value)

// transformStream.end();

// outputStream.on(
//     "finish",
//     function handleFinish() {
//         console.log("Done");
//     }
// );