"use client";

import { useState, Fragment } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const BionicReadingComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [bionicText, setBionicText] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

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
            <span className="opacity-80">{remainingPart}</span>{" "}
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
    setIsLoading(true);
    setTimeout(() => {
      setBionicText(processedText);
    }, 1000);
    if (bionicText) setIsLoading(false);
  };

  return (
    <div className="flex w-full justify-center flex-col min-h-screen items-center gap-y-6 h-max">
      {!bionicText ? (
        <>
          <div className="flex flex-col gap-y-3">
            <p className="md:w-[800px] text-transparent text-center text-xl md:text-3xl font-bold bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
              Boost Your Reading Efficiency
              <br className="block md:hidden" /> with Bionic Reading!
            </p>
            <p className="md:w-[800px] text-center text-xs md:text-xl text-stone-300">
              Paste your text and absorb <br className="block md:hidden" />{" "}
              information faster and better!
            </p>
          </div>
          <div className="flex flex-col items-center jusify-center gap-y-4">
            <textarea
              className="dark:bg-[#1b1b1b] backdrop-blur-lg border-orange-400/80 border p-4 rounded-md w-[280px] md:w-[600px] min-h-[120px] md:min-h-[200px]"
              value={inputText}
              cols={20}
              // @ts-expect-error
              onChange={handleInputChange}
            />
            <button
              onClick={handleConvert}
              disabled={!inputText}
              className={cn(
                "px-4 py-2 bg-gradient-to-tr text-white text-xs md:text-base from-red-500 to-yellow-500 rounded-md w-full",
                !inputText && "cursor-not-allowed opacity-75"
              )}
            >
              {isLoading && !bionicText ? (
                <Loader2 className="animate-spin m-auto" />
              ) : (
                "Convert"
              )}
            </button>
          </div>
        </>
      ) : (
        <div className="w-5/6">
          <button
            onClick={() => {
              setInputText("");
              setIsLoading(false);
              setBionicText(null);
            }}
            className="flex items-center justify-center h-max gap-x-1 pl-2 pr-3 py-2 rounded-md mb-10 hover:text-black hover:bg-white transition"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div
            className={cn(
              "bg-white text-gray-800 p-6 md:p-24 rounded font-[400] md:text-xl"
            )}
          >
            {bionicText}
          </div>
        </div>
      )}
    </div>
  );
};

export default BionicReadingComponent;
