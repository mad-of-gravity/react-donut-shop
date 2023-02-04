import "./styles.css";
import Title from "../../Title/Title";

const PaymentScreen = () => {

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
            margin: "-15px 0",
            padding: "0",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "900",
            fontSize: "64px",
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
        }
     }

     const handlePaymentButtonClick = (selectedButton) => {
        console.log(selectedButton + " button has been clicked!");
     }

    return (
        <div className="container">
            <div className="title">
                <Title sx={titleStyle.middle}>You can</Title>
                <Title sx={titleStyle.small}>PAY US</Title>
                <Title sx={titleStyle.large}>NOW</Title>
            </div>

            <button className="pay-button" onClick={() => handlePaymentButtonClick("Apple")}>
                <img src="assets/apple-pay.png" />
            </button>

            <button className="pay-button" onClick={() => handlePaymentButtonClick("Google")}>
                <img src="assets/google-pay.png" />
            </button>
        </div>
    );
}

export default PaymentScreen;