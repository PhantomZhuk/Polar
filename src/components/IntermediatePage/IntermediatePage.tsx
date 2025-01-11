import InfoImgBlock from "../InfoImgBlock/InfoImgBlock";
import IntermediatePageImg from "../../assets/IntermediatePageImg.png";

function IntermediatePage() {
    return (
        <div className="IntermediatePage w-full min-h-[60vh] flex justify-center items-center bg-[#fcf1f4]">
            <InfoImgBlock 
                header="Brown Sugar Oatmea"
                text="Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous."
                img={IntermediatePageImg}
                alt="ice-cream"
            />
        </div>
    );
}

export default IntermediatePage;