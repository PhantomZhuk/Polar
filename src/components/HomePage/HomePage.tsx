import Logo from "../Logo/Logo";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import InfoImgBlock from "../InfoImgBlock/InfoImgBlock";
import MainImg from "./../../assets/MainImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./HomePage.css"

function HomePage() {
    return (
        <div className="HomePage w-full min-h-screen flex flex-col justify-between items-center bg-[#fcf1f4]">
            <header className="w-full h-[10vh] flex justify-between items-center px-[250px] max-[1400px]:px-[100px] max-[1050px]:px-[50px] max-[775px]:">
                <FontAwesomeIcon icon={faBars} className="hidden cursor-pointer hover:text-[#d23166] text-[20px] max-[775px]:flex" />
                <Logo />
                <nav className="max-[775px]:hidden">
                    <ul className="flex justify-between gap-5">
                        <li><a href="#" className="font-bold text-[15px] text-[#d23166] relative hover:before:bg-[#d23166] hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">Home</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] relative hover:before:bg-[#d23166] opacity-60  hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">Product</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] relative hover:before:bg-[#d23166] opacity-60 hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">Pricing</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] relative hover:before:bg-[#d23166] opacity-60 hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">Testimonials</a></li>
                        <li><a href="#" className="font-normal text-[14px] text-[#150101] relative hover:before:bg-[#d23166] opacity-60 hover:before:content-[''] hover:before:w-[100%] hover:before:h-[5px] hover:before:absolute hover:before:bottom-[-5px] hover:before:left-0 hover:before:rounded-[5px] hover:before:animate-[line-nav_0.3s_1]">Contact Us</a></li>
                    </ul>
                </nav>
                <BuyNowBtn key="BuyNowBtn" />
            </header>
            <main className="w-full min-h-[90vh] flex justify-center items-center">
                <InfoImgBlock aboveHeader="Sweet fun, full of milk."
                    header="Feel inside cold with our delicious"
                    span="ice-cream."
                    text="Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words."
                    img={MainImg}
                    alt="ice-cream"
                    type="default" />
            </main>
        </div>
    );
}

export default HomePage;