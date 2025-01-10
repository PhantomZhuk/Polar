import "./BuyNowBtn.css"

function BuyNowBtn(props: any) {
    return (
        <div className="BuyNowBtn w-[165px] h-[49px] rounded bg-[#d23166] flex justify-center items-center font-bold text-[15px] text-[#fafafa] cursor-pointer max-[775px]:w-[120px]" id={props.key}>Buy Now</div>
    );
}

export default BuyNowBtn;