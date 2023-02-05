import { useEffect } from "react";
import Donut from "../../DonutComponent/Donut";
import Title from "../../TitleComponent/Title";
import "./styles.css";

const ReadyScreen = () => {
  const [donutURL, setDonutURL] = useState("");

  const titleStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "44px",
    textAlign: "end",
    color: "#FFFFFF",
  };

  useEffect(() => {
    const url = localStorage.getItem("selected donut");
    setDonutURL(url);
  }, []);

  return (
    <>
      <div className="blue-background"></div>
      <div className="ready-screen-container">
        <div className="selected-donut">
          <Donut
            variant="static"
            donutSrc={donutURL}
            width="auto"
            height="auto"
          />
        </div>

        <div className="title-content">
          <Title sx={titleStyle}>
            You can now come <br /> and pick up <br /> your amazing Donut!
          </Title>
        </div>

        <button className="done-button" onClick={() => console.log("Done has been clicked")}>
          Done
        </button>
      </div>
    </>
  );
};

export default ReadyScreen;
