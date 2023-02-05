import "./PaymentScreen.css";
import Title from "../../TitleComponent/Title";
import Donut from "../../DonutComponent/Donut";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
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

    middle: {
      margin: "-12px 0",
      padding: "4px 0",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "900",
      fontSize: "64px",
      lineHeight: "72px",
      alignSelf: "flex-end",
      color: "#FFFFFF",
    },

    large: {
      margin: "-3px 0",
      padding: "0",
      fontFamily: "'Outfit', sans-serif",
      fontWeight: "900",
      fontSize: "96px",
      lineHeight: "72px",
      textAlign: "end",
      color: "#FFFFFF",
    },
  };

  //Change the background color when the component is mounted
  useEffect(() => {
    document.body.style.backgroundColor = "#FF86B3";
  }, []);

  
  const handlePaymentButtonClick = (selectedButton) => {
    navigate("/preparation");
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <Title sx={titleStyle.middle}>You can</Title>
          <Title sx={titleStyle.small}>PAY US</Title>
          <Title sx={titleStyle.large}>NOW</Title>
        </div>

        <button
          className="pay-button"
          onClick={() => handlePaymentButtonClick("Apple")}
        >
          <img src="assets/apple-pay.png" />
        </button>

        <button
          className="pay-button"
          onClick={() => handlePaymentButtonClick("Google")}
        >
          <img src="assets/google-pay.png" />
        </button>
      </div>

      <div className="footer">
        <div className="sky-shaped">
          <Donut
            animate={false}
            variant="sky_shaped"
            width="auto"
            height="auto"
          />
        </div>
        <div className="unicorn-dust">
          <Donut
            animate={false}
            variant="unicorn_dust"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
