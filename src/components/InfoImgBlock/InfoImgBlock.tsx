import "./InfoImgBlock.css"
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";

function InfoImgBlock(props: any) {
    return (
        <div className="InfoImgBlock w-full min-h-[90vh] flex justify-between items-center px-[250px] max-[1400px]:px-[100px] max-[1050px]:px-[50px] max-[856px]:flex-col max-[856px]:gap-5">
            <div className="textContainer w-2/4 flex flex-col justify-between gap-6 max-[856px]:w-full max-[856px]:my-5">
                <h4 className="font-medium text-[15px] text-[#0f0101] w-full">{props.aboveHeader}</h4>
                <h2 className="w-full font-bold text-[45px] leading-[121%] text-[#0f0101] opacity-90">{props.header} <span className="text-[#d23166]">{props.span}</span></h2>
                <p className="font-normal text-[16px] text-[#0f0101] leading-[150%] opacity-60">{props.text}</p>
                <BuyNowBtn />
            </div>
            <div className="imgConntainer w-2/4 max-h-[90vh] flex justify-end items-center max-[856px]:w-full max-[856px]:justify-center">
                <img src={props.img} alt={props.alt} className="w-[90%] max-[1400px]:w-[80%]"/>
            </div>
        </div>
    );
}

export default InfoImgBlock;