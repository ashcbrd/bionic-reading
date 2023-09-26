"use client";

import Loading from "@/components/loading";
import { Suspense, useState } from "react";

const MainPage = () => {
  const [content, setContent] = useState<string>("");
  const [bionicContent, setBionicContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex w-screen justify-center flex-col items-center gap-y-6 h-full mt-28">
          {bionicContent.length <= 0 && !isLoading ? (
            <>
              <div className="flex flex-col gap-y-3">
                <p className="w-[800px] text-transparent text-center text-3xl font-bold bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
                  Boost Your Reading Efficiency with Bionic Reading!
                </p>
                <p className="w-[800px] text-center text-xl">
                  Paste your text and absorb information faster and better!
                </p>
              </div>
              <form
                className="flex flex-col items-center jusify-center gap-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (bionicContent.length <= 0) {
                    setIsLoading(true);
                  } else {
                    setIsLoading(false);
                  }

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
            </>
          ) : (
            <p
              className="bg-white text-black w-5/6 p-12 rounded font-semibold text-xl"
              dangerouslySetInnerHTML={{ __html: bionicContent }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MainPage;
