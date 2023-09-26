"use client";

import { useState } from "react";

const MainPage = () => {
  const [content, setContent] = useState<string>("");
  const [bionicContent, setBionicContent] = useState<string>("");

  const url = "https://bionic-reading1.p.rapidapi.com/convert";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "5e717fcff2msh8fc4a3779dbbac6p17c914jsn2b19419b1257",
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      content: content,
      response_type: "html",
      request_type: "html",
      fixation: "1",
      saccade: "10",
    }),
  };

  async function read() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setBionicContent(result);
    } catch (err) {
      console.log("error:", err); // Error! Handle appropriately.
    }
  }

  return (
    <div className="flex w-screen justify-center flex-col items-center h-full">
      <form
        className="flex flex-col"
        onSubmit={async (e) => {
          e.preventDefault();
          read();
        }}
      >
        <textarea
          className="bg-[#1b1b1b] p-4 rounded-md w-[600px] h-[200px]"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MainPage;
