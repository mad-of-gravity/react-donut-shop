import { useEffect } from "react";
import Title from "../../TitleComponent/Title";
import Donut from "../../DonutComponent/Donut";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

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

  const handleStartClick = () => {
    navigate("/menu");
  }

  return (
    <>
      <div className="yellow-background-layer"></div>
      <div className="start-screen-content">
        <div className="donut-elements">
          <div className="unicorn-donut">
            <Donut
              variant="static"
              donutSrc="assets/unicorn_dust.svg"
              width="auto"
              height="auto"
            />
          </div>

          <div className="sugar-particles">
            <Donut
              variant="static"
              donutSrc="assets/sparkles.svg"
              width="auto"
              height="auto"
            />
          </div>

          <div className="true-blood-donut">
            <Donut
              variant="static"
              donutSrc="assets/true_blood.svg"
              width="auto"
              height="auto"
            />
          </div>
        </div>

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
