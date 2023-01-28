import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/sendline", {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      })
      .then(function (response) {
       setName('')
       setPhoneNumber('')
       setEmail('')
       setSubject('')
       setMessage('')
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    
  };

  return (
    <div className="w-full">
      <div className="col-span-3 m-auto w-[50%] h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
        <div className="p-4">
          <form id="messageForm" onSubmit={submitHandler} className="">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  value={phoneNumber}
                  className="border-2 rounded-lg p-3 flex  border-gray-300"
                  type="text"
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="border-2 rounded-lg p-3 flex  border-gray-300"
                type="email"
                required
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
              value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="border-2 rounded-lg p-3 flex  border-gray-300"
                type="text"
                required
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
              value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="border-2 rounded-lg p-3  border-gray-300"
                rows="10"
                required
              ></textarea>
            </div>
            <button
              className="w-full border py-2 mt-3 rounded-md shadow-md shadow-gray-400
                  hover:bg-[#eee]
                  hover:text-black
                  duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
