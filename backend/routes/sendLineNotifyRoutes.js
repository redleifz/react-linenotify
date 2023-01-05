import express from "express";
import request from "request";
import dotenv from "dotenv";

dotenv.config();

const sendlinenotifyRouter = express.Router();

sendlinenotifyRouter.post("/sendline", (req, res) => {
  let json = req.body;

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
        message: `Message from : ${json.name} , Phone Number : ${json.message} , Email : ${json.email} , Subject : ${json.subject} , Message : ${json.message} `,
      },
    },
    (err, httpResponse, body) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(body);
        res.send(body);
      }
    }
  );
});

export default sendlinenotifyRouter;
