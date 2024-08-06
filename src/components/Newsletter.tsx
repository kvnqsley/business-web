import {Email, Glitter} from "./Icons";

const Newsletter = () => {
  return (
    <section
      className={`w-full bg-[#f5f8ff] overflow-hidden h-[22.44rem] flex flex-col relative`}
    >
      <div className="absolute opacity-[0.3] m-auto w-[78rem] top-0 left-[6%] z-0">
        <Glitter />
      </div>

      <div className="inline-flex flex-col items-center gap-[1.69rem] w-[95%]  m-auto z-50">
        <ul className="flex flex-col items-center gap-[0.44rem] ">
          <li>
            <h1 className="text-[2.25rem]  font-[700] leading-[122%] text-[#303030] text-center ">
              Subscribe to our Newsletter
            </h1>
          </li>

          <li>
            <h2 className="text-[1.25rem]  font-[400] leading-[147%] text-[#606060] text-center ">
              Be the first to get information about our new deals and offers
            </h2>
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-[0.75rem] align-self-stretch pt-[0.5rem] pr-[0.5rem] pb-[0.5rem] pl-[2rem] rounded-lg b-[0.5px solid  #E7E8E9] bg-[#ffffff]">
          <Email />

          <input
            className="focus:outline-none text-[1rem]  font-[400] leading-[150%] text-[#9A9EA6] text-center"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />

          <button type="submit" data-btn="primary" className="bg-[#1c68f5]">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
