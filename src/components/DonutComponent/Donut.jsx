import "./Donut.css";

const Donut = ({variant, donutSrc, width, height}) => {
    return <img className={variant} src={donutSrc} alt="Donut" width={width} height={height}/>;
}

export default Donut;