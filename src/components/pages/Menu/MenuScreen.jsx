import "./MenuScreen.css";
import Title from "../../TitleComponent/Title";
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
        <div className="menu-element">
          <h2 className="donut-description">SKY SHAPED</h2>
          <Donut
            animate
            variant="sky_shaped"
            width="90px"
            height="90px"
            onClick={() => handleMenuElementClick("sky_shaped")}
          />
        </div>
        <div className="menu-element">
          <h2 className="donut-description">MARBLE MAGIC</h2>
          <Donut
            animate
            variant="marble_magic"
            width="90px"
            height="90px"
            onClick={() => handleMenuElementClick("marble_magic")}
          />
        </div>

        <div className="menu-element">
          <h2 className="donut-description">TRUE BLOOD</h2>
          <Donut
            animate
            variant="true_blood"
            width="90px"
            height="90px"
            onClick={() => handleMenuElementClick("true_blood")}
          />
        </div>

        <div className="menu-element">
          <h2 className="donut-description">UNICORN DUST</h2>
          <Donut
            className="donut-image"
            animate
            variant="unicorn_dust"
            width="90px"
            height="90px"
            onClick={() => handleMenuElementClick("unicorn_dust")}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
