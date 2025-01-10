import "./Logo.css"
import LogoImg from "./../../assets/Logo.png";

function Logo() {
    return (
        <img src={LogoImg} alt="Logo" className="h-[80px]"/>
    );
}

export default Logo;