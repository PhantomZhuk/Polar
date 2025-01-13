function QuestionPage() {
    return (
        <div className="QuestionPage w-full min-h-[60vh] px-[250px] py-[50px] flex flex-col justify-center items-center max-[1400px]:px-[100px] max-[1050px]:px-[50px] gap-5">
            <h2 className="font-medium text-center text-[#000] flex flex-col">
                <span className="text-[calc(32px+0.5vw)]">Have Question in Mind?</span>
                <span className="text-[calc(32px+0.5vw)]">Let us help you</span>
            </h2>
            <div className="inputContainer">
                <input type="text" placeholder="Enter your question" className="w-[500px] h-[75px] rounded-[5px] bg-[#fafafa] font-normal text-[calc(7px+0.5vw)] text-[#0f0000] pl-[20px] outline-none max-[800px]:w-[300px] max-[800px]:h-[60px] max-[550px]:w-[250px] max-[550px]:h-[50px]"/>
                <button className="w-[135px] h-[75px] bg-[#d64374] rounded-[5px] font-medium text-[calc(10px+0.5vw)] text-[#fff] max-[800px]:w-[100px] max-[800px]:h-[60px] max-[550px]:h-[50px]">Send</button>
            </div>
        </div>
    );
}

export default QuestionPage;