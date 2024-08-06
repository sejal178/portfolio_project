import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import FileSaver from "file-saver";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineer", "Frontend-Developer"],
    });
  }, []);
  const handleDownload=()=>{
    const fileUrl = `${process.env.REACT_APP_CLIENT_URL}/assets/Sejal_Vijay_Resume_.pdf`;
    console.log("Downloading file from: ", fileUrl);
    FileSaver.saveAs(fileUrl, "Sejal_Vijay_Resume_.pdf");
  };

  return (
    <div className="main">
    <div className="intro" id="intro">
     
        <div className="wrapper">
          <h2>Hi There, I'm Sejal Vijay</h2>
          
          <h3>
             <span ref={textRef}></span>
          </h3>
          
        </div>

        <div className="imgContainer">
          <img src="assets/sejal.jpg" alt="" />
        </div>
      
      
        {/* <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}
      
    </div>
    <div>
      <button onClick={handleDownload} className="border-2 p-[10px] rounded-[30px] text-[#dc143c] text-[20px] border-2 mt-8 border-[#dc143c]">
          Download CV
      </button>
    </div>
    </div>
    
  );
}