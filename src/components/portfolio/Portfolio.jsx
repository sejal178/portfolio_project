import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 2 : prevIndex - 2
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex >= data.length - 2 ? 0 : prevIndex + 2
      );
    }
  };
  const directToGit=(link)=>{
    window.open(link, "_blank");
  }

  return (
    <div className="portfolio text-[40px] text-white mt-[10px]" id="portfolio">
      <h1>Projects</h1>
      <div className="container flex items-center justify-center mt-[110px] w-[70%]">
        {data.slice(currentIndex, currentIndex + 2).map((d, index) => (
          <div className="item" key={index} onClick={()=>directToGit(d.link)}>
            <img src={d.img}
            className={d.id===6? "w-[100px]":""}
            alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="Left Arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="Right Arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
