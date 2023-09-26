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
    <div className="flex w-screen justify-center flex-col items-center h-full mt-28">
      <p>
        Boost Your Reading Efficiency with Bionic Reading! Simply paste your
        text below and experience a new way to absorb and retain information
        faster and more effectively.
      </p>
      <form
        className="flex flex-col items-center jusify-center gap-y-4"
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
        <input
          className="px-4 py-2 bg-gradient-to-tr from-red-500 to-yellow-500 rounded-md w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default MainPage;
