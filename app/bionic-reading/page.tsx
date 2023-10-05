"use client";

import { useState, Fragment } from "react";
import { Loader2, ArrowLeft, Settings2, FileDown } from "lucide-react";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const BionicReadingComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [bionicText, setBionicText] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [settings, setSettings] = useState({
    fontColor: "#000000",
    fontSize: 20,
    backgroundColor: "#ffffff",
    letterSpacing: "",
    lineSpacing: "",
  });

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

  const handleDownload = (type: string) => {
    const divElement = document.getElementById("bionic-text");

    if (divElement) {
      html2canvas(divElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        if (type === "png") {
          const link = document.createElement("a");
          link.href = imgData;
          link.download = "bionic_text.png";
          link.click();
        }
        if (type === "pdf") {
          const pdf = new jsPDF("p", "mm", "a4");
          const width = pdf.internal.pageSize.getWidth();
          const height = (canvas.height * width) / canvas.width;

          pdf.addImage(imgData, "PNG", 0, 0, width, height);
          pdf.save("bionic_text.pdf");
        }
      });
    }
  };

  const { fontColor, fontSize, backgroundColor, lineSpacing, letterSpacing } =
    settings;

  return (
    <div className="flex w-full justify-center flex-col min-h-screen items-center gap-y-6 h-max">
      {!bionicText ? (
        <>
          <div className="flex flex-col gap-y-3">
            <p className="md:w-[800px] text-transparent text-center text-xl md:text-3xl font-bold bg-clip-text bg-gradient-to-tr from-red-500 to-yellow-500">
              Boost Your Reading Efficiency
              <br className="block md:hidden" /> with Bionic Reading!
            </p>
            <p className="md:w-[800px] text-center text-xs md:text-xl dark:text-stone-300">
              Paste your text and absorb <br className="block md:hidden" />{" "}
              information faster and better!
            </p>
          </div>
          <div className="flex flex-col items-center jusify-center gap-y-4">
            <textarea
              className="text-sm md:text-base dark:bg-[#1b1b1b] backdrop-blur-lg border-orange-400/80 border p-4 rounded-md w-[280px] md:w-[600px] min-h-[120px] md:min-h-[200px]"
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
        <div className="w-5/6 py-40">
          <div className="flex justify-between items-center pb-10">
            <Button
              variant="ghost"
              onClick={() => {
                setInputText("");
                setIsLoading(false);
                setBionicText(null);
              }}
            >
              <ArrowLeft size={20} />
              Back
            </Button>
            <div className="flex gap-x-2 bg-white/10 items-center justify-center rounded-md pl-2 pr-6 py-2">
              <Popover>
                <PopoverTrigger>
                  <Button variant="ghost">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-max" align="end">
                  <Settings
                    type="color"
                    label="Background Color"
                    value={backgroundColor}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        backgroundColor: e.target.value,
                      }))
                    }
                  />

                  <Settings
                    type="color"
                    label="Font Color"
                    value={fontColor}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSettings((prev) => ({
                        ...prev,
                        fontColor: e.target.value,
                      }))
                    }
                  />
                  <Settings
                    type="number"
                    label="Font Size"
                    value={fontSize}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      //@ts-expect-error
                      setSettings((prev) => ({
                        ...prev,
                        fontSize: e.target.value,
                      }))
                    }
                  />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <FileDown />
                </PopoverTrigger>
                <PopoverContent
                  className="w-max flex gap-x-3 items-center"
                  align="end"
                >
                  <Button variant="ghost" onClick={() => handleDownload("pdf")}>
                    .pdf
                  </Button>
                  <Button variant="ghost" onClick={() => handleDownload("png")}>
                    .png
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div
            id="bionic-text"
            style={{
              backgroundColor: backgroundColor,
              color: fontColor,
              fontSize: fontSize + "px",
            }}
            className="text-gray-800 p-6 md:p-24 rounded font-[400]"
          >
            {bionicText}
          </div>
        </div>
      )}
    </div>
  );
};

type SettingsType = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  type: string;
  value?: string | number;
};

const Settings = ({ onChange, label, value, type }: SettingsType) => {
  return (
    <div className="flex items-center w-[200px] gap-x-2">
      <label htmlFor="settings">{label}</label>
      <div className="flex-grow" />
      <input
        id="settings"
        className={
          type === "number"
            ? " rounded-md pl-2 py-1 w-14 flex bg-transparent border border-white/50"
            : "color-settings"
        }
        type={type}
        value={value}
        onChange={onChange}
      />
      {type === "number" && "px"}
    </div>
  );
};

export default BionicReadingComponent;
