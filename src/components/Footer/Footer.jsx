import logo from '../../assets/logo.png';
import './../NewsLetter/Newsletter.css'
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 py-16">
      <div className='flex mx-auto justify-center my-10 mt-[8%]'>
            <img src={logo} className='w-[9rem] my-auto' alt="" />
        </div>

        <div className="grid grid-cols-2 md:flex w-11/12 md:w-9/12 mx-auto justify-between">   
          <div className="flex flex-col">
            <div className="flex md:flex-row items-center gap-2">
              <img className="w-8" src="./assets/img/logo.webp" alt="" />
              <h1 className="text-center md:text-3xl font-bold text-slate-100">
                About Us
              </h1>
            </div>
            <p className="text-slate-400 mt-8 text-sm md:text-sm leading-[1.7rem]">
              We are a passionate team <br />
              dedicated to providing the best <br />
              service to our customers.
            </p>

          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h1 className="text-center md:text-3xl font-bold text-slate-100">
                Useful Links
              </h1>
            </div>
            <div className="text-slate-300 mt-8 text-sm md:text-lg leading-[1.7rem]">
              <ul className="text-slate-400 pl-5 md:pl-0 text-start text-sm md:text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Animals</li>
                <li>Foundation</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className="flex flex-col  items-center ">
              <h1 className="text-center md:text-2xl font-bold text-slate-100">
                Subscribe
              </h1>

              <p className="text-slate-400 mt-8 text-sm md:text-sm leading-[1.7rem]">
              Subscribe to our newsletter for the <br />
              latest update.
            </p>
            </div>
            <div className="flex w-10/12 mx-auto items-center justify-center my-8">
                <div>
                <input type="text" placeholder="Enter your email" className="border-2 border-gray-400 p-2 rounded-xl" /> 
                </div>
                <div>
                    <button  className="btn py-2 rounded-xl text-Black text-md font-bold bg-grad" 
                    >Subscribe</button>
                </div>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-200 mt-5">
          A Private Commitment by Dip
        </p>
      </footer>
    </>
  );
};

export default Footer;
