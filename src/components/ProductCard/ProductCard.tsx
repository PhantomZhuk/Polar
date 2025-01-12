import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";

function ProductCard(props: any) {
    if (props.type === 'default') {
        return (
            <div className="ProductCard flex justify-between items-center w-full max-[800px]:flex-col">
                <div className="imgContainer w-[49%] h-full max-[800px]:w-[80%]">
                    <img src={props.img} alt={props.header} className="w-full" />
                </div>
                <div className="textContainer w-[49%] h-full flex flex-col justify-between items-start py-[50px] gap-3 max-[800px]:w-[80%]">
                    <h2 className="font-bold text-[calc(18px+0.5vw)] text-[#000]">{props.header}</h2>
                    <p className="font-normal text-[calc(8px+0.5vw)] text-[#000] leading-[150%] opacity-70">{props.text}</p>
                    <div className="price flex justify-between items-center gap-3">
                        <span className="font-medium text-[calc(18px+0.5vw)] text-[#000]">{props.newPrice}</span>
                        <span className="font-medium text-[calc(12px+0.5vw)] text-[#000] opacity-70 line-through">{props.oldPrice}</span>
                    </div>
                    <BuyNowBtn />
                </div>
            </div>
        );
    } else if (props.type === 'reverse') {
        return (
            <div className="ProductCard flex flex-row-reverse justify-between items-center w-full max-[800px]:flex-col">
                <div className="imgContainer w-[49%] h-full max-[800px]:w-[80%]">
                    <img src={props.img} alt={props.header} className="w-full" />
                </div>
                <div className="textContainer w-[49%] h-full flex flex-col justify-between items-end py-[50px] gap-3 max-[800px]:w-[80%]">
                    <h2 className="font-bold text-[calc(18px+0.5vw)] text-[#000]">{props.header}</h2>
                    <p className="font-normal text-[calc(8px+0.5vw)] text-[#000] leading-[150%] opacity-70 text-end">{props.text}</p>
                    <div className="price flex justify-between items-center gap-3">
                        <span className="font-medium text-[calc(18px+0.5vw)] text-[#000]">{props.newPrice}</span>
                        <span className="font-medium text-[calc(12px+0.5vw)] text-[#000] opacity-70 line-through">{props.oldPrice}</span>
                    </div>
                    <BuyNowBtn />
                </div>
            </div>
        );
    }
}

export default ProductCard;