"use client";

import { useState, Fragment } from "react";

const BionicReadingComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [bionicText, setBionicText] = useState<JSX.Element | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const processForBionicReading = (text: string): JSX.Element | null => {
    if (!text) return null;

    const lines = text.split("\n");
    const bionicLines = lines.map((line, lineIndex) => {
      const words = line.split(" ");
      const bionicWords = words.map((word, wordIndex) => {
        const numBoldLetters = Math.ceil(word.length / 2);
        const boldPart = word.substring(0, numBoldLetters);
        const remainingPart = word.substring(numBoldLetters);

        return (
          <Fragment key={wordIndex}>
            <b>{boldPart}</b>
            {remainingPart}{" "}
          </Fragment>
        );
      });

      return (
        <div key={lineIndex}>
          {bionicWords}
          <br />
        </div>
      );
    });

    return <div>{bionicLines}</div>;
  };

  const handleConvert = () => {
    const processedText = processForBionicReading(inputText);
    setBionicText(processedText);
  };

  return (
    <div className="flex w-full justify-center flex-col min-h-screen items-center gap-y-6 h-max py-10">
      <div className="flex flex-col gap-y-3">
        <p className="w-[800px] text-transparent text-center text-3xl font-bold bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
          Boost Your Reading Efficiency with Bionic Reading!
        </p>
        <p className="w-[800px] text-center text-xl">
          Paste your text and absorb information faster and better!
        </p>
      </div>
      <div className="flex flex-col items-center jusify-center gap-y-4">
        <textarea
          className="bg-[#1b1b1b] p-4 rounded-md w-[600px] h-[200px]"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          onClick={handleConvert}
          className="px-4 py-2 bg-gradient-to-tr from-red-500 to-yellow-500 rounded-md w-full"
        >
          Convert
        </button>
        <div className="bg-white text-gray-800 w-5/6 p-12 rounded font-semibold text-2xl">
          {bionicText}
        </div>
      </div>
    </div>
  );
};

export default BionicReadingComponent;
