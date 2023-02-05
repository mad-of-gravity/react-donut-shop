import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Donut from "../../DonutComponent/Donut";
import Title from "../../TitleComponent/Title";
import "./PreparationScreen.css";


const PreparationScreen = () => {
  const navigate = useNavigate();
  const [donutURL, setDonutURL] = useState("");


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

    //Getting the selected donut URL from the local storage
    const selectedDonut = localStorage.getItem("selected donut");
    setDonutURL(selectedDonut);

    //Navigate to ReadyScreen after 5 seconds
    const intervalId = setTimeout(() => navigate("/ready"), 5000);
    return () => clearInterval(intervalId);
  }, []);
 
  return (
    <div className="container">
      <div className="selected-donut">
        <Donut
          variant="animate"
          donutSrc={donutURL}
          width="auto"
          height="auto"
        />
        <Donut
          className="sparkles"
          variant="sparkles"
          donutSrc="assets/sparkles.svg"
          width="auto"
          height="auto"
        />
      </div>

      <div className="preparing">
        <Title sx={labelStyle}>Preparing...</Title>
      </div>
    </div>
  );
};

export default PreparationScreen;
