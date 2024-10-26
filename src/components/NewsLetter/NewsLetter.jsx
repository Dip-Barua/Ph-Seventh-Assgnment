import "./Newsletter.css"

const NewsLetter = () => {
    return (

        <div className="bg-border p-5 border-2 w-8/12  text-center  mx-auto rounded-3xl backdrop-blur-md -mb-[8%]">
            <div className="bg-nletter text-center  mx-auto p-10 rounded-3xl backdrop-blur-md">
            <h2 className="text-4xl font-bold my-8">Subscribe to our Newsletter</h2>
            <h3 className="text-2xl text-gray-700 my-8">Get the latest updates and news right in your inbox!</h3>
            <div className="flex w-full items-center justify-center my-8">
                <div>
                <input type="text" placeholder="Enter your email" className="border-2 border-gray-400 p-3 rounded-2xl" /> 
                </div>
                <div>
                    <button  className="btn py-3 rounded-xl text-Black text-md font-bold bg-grad" 
                    >Subscribe</button>
                </div>
            </div>

        </div>
        </div>
        
    );
};

export default NewsLetter;