import "./App.css";
import {useState} from 'react'



function App() {

const [name,setName] = useState('')
const [phoneNumber,setPhoneNumber] = useState('')

const onSubmitHandler = () =>{
  
}

  return (
    <div className="w-full">
      <div className="col-span-3 m-auto w-[50%] h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
        <div className="p-4">
          <form className="">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                type="email"
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 text-black border-gray-300"
                rows="10"
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
