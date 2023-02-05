import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Donut from "../../DonutComponent/Donut";
import Title from "../../TitleComponent/Title";
import "./PreparationScreen.css";

const PreparationScreen = () => {
  const navigate = useNavigate();

  const labelStyle = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "72px",
    color: "#FFFFFF",
  };

  useEffect(() => {
    //Change the background after the component is mounted
    document.body.style.backgroundColor = "#FFE84A";

    //Navigate to ReadyScreen after 5 seconds
    const intervalId = setTimeout(() => navigate("/ready"), 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="preparation-content">
      <div className="selected-donut">
        <Donut
          animate
          variant={localStorage.getItem("selected donut")}
          width="auto"
          height="auto"
        />
      </div>

      <div className="sugar-sparkles">
        <Donut animate={false} variant="sparkles" width="auto" height="auto" />
      </div>

      <div className="preparing">
        <Title sx={labelStyle}>Preparing...</Title>
      </div>
    </div>
  );
};

export default PreparationScreen;
