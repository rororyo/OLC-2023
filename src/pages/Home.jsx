import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const url = "https://cashier.rulim34.dev";
  const key = "WhZjF9JrRe+8PmSkHLk5K+Kjuo+/pw5avi7JhFreRD4=";
  const headers = {
    "Content-Type": "application/json",
    'Authorization': key,
  };

  const [name, setName] = useState("");

  async function handleEnter(event) {
    if (event.key === "Enter") {
      try {
        const requestData = {
          title: name
        };

        await axios.post(url+'/directories', requestData, {
          headers: headers,
        });
        console.log(name);
        window.location.href = "/notes";
        setName('')
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    console.log(name);
  }

  return (
    <>
      <Navbar />
      <div
        className="text-black flex flex-col items-center justify-center h-screen"
        style={{ height: "80vh" }}
      >
        <p className="text-5xl font-light mb-4">
          Welcome to <span className="font-bold">Notes</span>
        </p>
        <div className="flex items-center border border-grey rounded-lg">
          <button className="ml-2" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#ccc"
              aria-hidden="true"
              className="hm kj nz sb pr-2 al"
              width="25"
              height="25"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
            </svg>
          </button>
          <textarea
            name=""
            id=""
            cols="80"
            rows="1"
            className="focus:outline-none focus:border-none"
            placeholder="Create your first folder here"
            onKeyDown={handleEnter}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Home;
