import "./HomePage.css";
import Logo from "../Logo/Logo";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import InfoImgBlock from "../InfoImgBlock/InfoImgBlock";
import MainImg from "./../../assets/MainImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <div className="HomePage w-full min-h-screen flex flex-col justify-between items-center bg-[#fcf1f4]">
            <header className="w-full h-[10vh] flex justify-between items-center px-[250px] max-[1400px]:px-[100px] max-[1050px]:px-[50px] max-[775px]:">
                <FontAwesomeIcon icon={faBars} className="hidden cursor-pointer hover:text-[#d23166] text-[20px] max-[775px]:flex" />
                <Logo />
                <nav className="max-[775px]:hidden">
                    <ul className="flex justify-between gap-5">
                        <li><a href="#" className="font-bold text-[15px] text-[#d23166]">Home</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] opacity-60">Product</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] opacity-60">Pricing</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] opacity-60">Testimonials</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] opacity-60">Contact Us</a></li>
                    </ul>
                </nav>
                <BuyNowBtn key="BuyNowBtn" />
            </header>
            <InfoImgBlock aboveHeader="Sweet fun, full of milk."
                header="Feel inside cold with our delicious"
                span="ice-cream."
                text="Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words."
                img={MainImg}
                alt="ice-cream" />
        </div>
    );
}

export default HomePage;