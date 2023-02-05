import { useEffect } from "react";
import Title from "../../TitleComponent/Title";
import "./StartScreen.css";

const StartScreen = () => {
  useEffect(() => {
    //Change the background after the component is mounted
    document.body.style.backgroundColor = "#FF86B3";
  }, []);

  const titleStyle = {
    small: {
      fontFamily: "'Outfit', sans-serif",
      margin: "0 12px -18px 0",
      fontWeight: "900",
      fontSize: "48px",
      lineHeight: "72px",
      alignSelf: "flex-end",
      color: "#FFFFFF",
    },

    large: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "900",
      fontSize: "96px",
      lineHeight: "72px",
      color: "#FFFFFF",
      padding: "0",
    },
  };

  return (
    <>
      <div className="yellow-background-layer"></div>
      <div className="start-screen-content">
        <div className="donut-elements"></div>

        <div className="footer-elements">
          <div className="title-elements">
            <Title sx={titleStyle.small}>THE</Title>
            <Title sx={titleStyle.large}>DONUT SHOP</Title>
          </div>
          <button className="start-button">Start</button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
