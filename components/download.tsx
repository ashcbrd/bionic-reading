import { useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

import { Button } from "./ui/button";

const DownloadDivAsImage: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const divElement = divRef.current;

    if (divElement) {
      html2canvas(divElement)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = "bioreader.png";
          link.click();
        })
        .catch((error) =>
          console.error("Error capturing div as image:", error)
        );
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      >
        <Download />
      </div>
      <Button onClick={handleDownload}></Button>
    </div>
  );
};

export default DownloadDivAsImage;
