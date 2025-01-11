function AdvantagesCard(props: any) {
    return (
        <div id={props.key} className="AdvantagesCard w-[250px] h-[200px] rounded-[7px] border-[1px] border-[rgba(0, 0, 0, 0.03)] bg-white hover:shadow-custom-hover hover:border-none flex flex-col justify-around items-center p-[30px]">
            {props.svg}
            <h2 className="font-[600] text-[20px] text-[#000]">{props.header}</h2>
            <p className="font-[400] text-[14px] text-[#000] text-center opacity-60">{props.text}</p>
        </div>
    )
}

export default AdvantagesCard;