import { useEffect, useState } from "react";
import "./Donut.css";

const Donut = ({ animate, variant = "unicorn_dust", ...props }) => {
  const [donutClassName, setDonutClassName] = useState("");
  const [donutURL, setDonutURL] = useState("");

  //Donut variants and their url's
  const donuts = {
    marble_magic: "assets/marble_magic.svg",
    sky_shaped: "assets/sky_shaped.svg",
    sparkles: "assets/sparkles.svg",
    true_blood: "assets/true_blood.svg",
    unicorn_dust: "assets/unicorn_dust.svg",
  };

  useEffect(() => {
    //Later this will be useful for us in the css for animating the donut..
    const donutClass = animate ? "animate donut" : "static donut";
    setDonutClassName(donutClass);

    //Getting the donut url
    const variantURL = donuts[variant];
    setDonutURL(variantURL);
  }, []);

  return (
    <img
      className={donutClassName}
      src={donutURL}
      alt={donuts[variant]}
      width={props.width}
      height={props.height}
      onClick={props.onClick}
    />
  );
};

export default Donut;
