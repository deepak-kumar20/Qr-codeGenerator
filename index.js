
import inquirer from "inquirer"
import fs from "fs"
import qr from "qr-image"
import { log } from "console";

inquirer
  .prompt([
      /* Pass your questions in here */
      {
          message: "type your url",
          name:"URL"
      }
  ])
  .then((answers) => {
    
      const url = answers.URL;
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream("qr_img.png", { type: 'png' }));
      fs.writeFile("URL.txt", url, (err) => {
          if (err) throw err;
          console.log("the file has been saved.");
          
      })
   
  })


