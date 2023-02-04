import "./styles.css";
import Title from "../../Title/Title";
import Donut from "../../DonutComponent/Donut";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuScreen = () => {
  const navigate = useNavigate();

  const titleStyle = {
    small: {
      margin: "-15px 0",
      padding: "0",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "900",
      fontSize: "48px",
      lineHeight: "72px",
      alignSelf: "flex-end",
      color: "#FFFFFF",
    },

    large: {
      margin: "0",
      padding: "0",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "900",
      fontSize: "96px",
      lineHeight: "72px",
      textAlign: "end",
      color: "#FFFFFF",
    },
  };

  useEffect(() => {
    //Change background color after mounting
    document.body.style.backgroundColor = "#21E8E5";
  }, []);

  //Handles payment button clicks
  const handleMenuElementClick = (imgUrl) => {
    localStorage.setItem("selected donut", imgUrl);
    navigate("/payment");
  };

  return (
    <div className="container">
      <div className="title">
        <Title sx={titleStyle.small}>THE</Title>
        <Title sx={titleStyle.large}>MENU</Title>
      </div>

      <div className="menu-elements">
        <div
          className="menu-element"
          onClick={() => handleMenuElementClick("assets/sky_shaped.svg")}
        >
          <h2 className="donut-description">SKY SHAPED</h2>
          <Donut
            variant="animate"
            donutSrc="assets/sky_shaped.svg"
            width="90px"
            height="90px"
          />
        </div>
        <div
          className="menu-element"
          onClick={() => handleMenuElementClick("assets/marble_magic.svg")}
        >
          <h2 className="donut-description">MARBLE MAGIC</h2>
          <Donut
            variant="animate"
            donutSrc="assets/marble_magic.svg"
            width="90px"
            height="90px"
          />
        </div>

        <div
          className="menu-element"
          onClick={() => handleMenuElementClick("assets/true_blood.svg")}
        >
          <h2 className="donut-description">TRUE BLOOD</h2>
          <Donut
            variant="animate"
            donutSrc="assets/true_blood.svg"
            width="90px"
            height="90px"
          />
        </div>

        <div
          className="menu-element"
          onClick={() => handleMenuElementClick("assets/unicorn_dust.svg")}
        >
          <h2 className="donut-description">UNICORN DUST</h2>
          <Donut
            className="donut-image"
            variant="animate"
            donutSrc="assets/unicorn_dust.svg"
            width="90px"
            height="90px"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
