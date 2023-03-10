import { useEffect } from "react";
import Donut from "../../DonutComponent/Donut";
import Title from "../../TitleComponent/Title";
import { useNavigate } from "react-router-dom";
import "./ReadyScreen.css";

const ReadyScreen = () => {
  const navigate = useNavigate();

  const titleStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "44px",
    textAlign: "end",
    color: "#FFFFFF",
  };

  useEffect(() => {
    //Change the background after the component is mounted
    document.body.style.backgroundColor = "#21e8e5";
  }, []);

  //Redirect to start screen
  const handleDoneClick = () => {
    navigate("/");
  }

  return (
    <>
      <div className="blue-background"></div>
      <div className="ready-screen-container">
        <div className="selected-donut">
          <Donut
            animate={false}
            variant={localStorage.getItem("selected donut")}
            width="auto"
            height="auto"
          />
        </div>

        <div className="title-content">
          <Title sx={titleStyle}>
            You can now come <br /> and pick up <br /> your amazing Donut!
          </Title>
        </div>

        <button className="done-button" onClick={handleDoneClick}>
          Done
        </button>
      </div>
    </>
  );
};

export default ReadyScreen;
