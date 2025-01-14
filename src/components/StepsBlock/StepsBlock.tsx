function StepsBlock(props: any) {
    return (
        <div className="StepsBlock flex justify-start items-center gap-3" id={props.key}>
            <div className="iconContainer w-[30px] h-[30px] rounded-[3px] bg-white flex justify-center items-center">{props.icon}</div>
            <h2 className="stepName font-normal text[calc(12px+0.5vw)] text-[#000]">{props.name}</h2>
        </div>
    );
}

export default StepsBlock;