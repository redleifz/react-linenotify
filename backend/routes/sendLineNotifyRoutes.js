import express from "express";
import request from "request";
import dotenv from "dotenv";

dotenv.config();

const sendlinenotifyRouter = express.Router();


sendlinenotifyRouter.post("/sendline", (req, res) => {
 
    let json = req.body
 
  request(
    {
      method: "POST",
      uri: "https://notify-api.line.me/api/notify",
      header: {
        "Content-Type": "multipart/form-data",
      },
      auth: {
        bearer: process.env.LineToken,
      },
      form: {
        message: `Message from : ${json.name} , detail : ${json.message} `,
      },
    },
    (err, httpResponse, body) => {
      if (err) {
        console.log(err);
      
      } else {
        console.log(body);
        res.send(body);
      }
    }
  );
});

export default sendlinenotifyRouter;
