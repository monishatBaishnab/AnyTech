import bridge from "../../../assets/icons/easy-banking/Bridge.svg";
import lineOne from "../../../assets/icons/easy-banking/Line1.svg";

const Philosophy = () => {
  return (
    <section>
      <div className="container space-y-8">
        <div>
          <h6 className="text-center text-lg font-semibold text-blue-600 -tracking-tighter">
            OUR PHILOSOPHY
          </h6>
          <h2 className="text-center text-blue-950 text-3xl sm:text-5xl md:text-6xl font-semibold">
            Human-centred innovation
          </h2>
        </div>
        <div className="grid relative gap-16 grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 flex items-center justify-center min-h-[370px] bg-gray-50 rounded-3xl ">
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-lg space-y-2 text-center shadow-xl w-[150px] ">
                <h6 className="text-yellow-600 text-xs uppercase">Mechanism</h6>
                <h3 className="text-lg text-blue-950 font-bold">Blockchain</h3>
              </div>
              <p className="text-gray-600 font-semibold text-xs w-[150px]">
                Enhance Security by eliminating intermediaries
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 min-h-[370px] bg-gray-50 rounded-3xl ">
            <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2 px-16 py-14">
              <div className="flex items-center justify-center relative">
                <div className="space-y-5">
                  <div className="bg-white p-5 rounded-lg space-y-2 text-center shadow-xl w-[150px]">
                    <h6 className="text-yellow-600 text-xs uppercase">
                      Mechanism
                    </h6>
                    <h3 className="text-lg text-blue-950 font-bold">
                      Blockchain
                    </h3>
                  </div>
                  <p className="text-gray-600 font-semibold text-xs w-[150px]">
                    Enhance Security by eliminating intermediaries
                  </p>
                </div>
              </div>
              <div className="flex gap-10 sm:gap-20 md:block justify-center md:gap-0">
                <div className="space-y-5 md:flex md:items-center md:space-y-0 md:gap-5">
                  <div className="bg-white p-5 rounded-lg space-y-2 text-center shadow-xl w-[150px] shrink-0">
                    <h6 className="text-yellow-600 text-xs uppercase">
                      Mechanism
                    </h6>
                    <h3 className="text-lg text-blue-950 font-bold">
                      Blockchain
                    </h3>
                  </div>
                  <p className="text-gray-600 font-semibold text-xs w-[150px]">
                    Enhance Security by eliminating intermediaries
                  </p>
                </div>
                <div className="h-16 w-1/2 rotate-90 md:rotate-0 my-5 overflow-hidden">
                  <img
                    className="size-full object-contain"
                    src={lineOne}
                    alt=""
                  />
                </div>
                <div className="space-y-5 md:flex md:items-center md:space-y-0 md:gap-5">
                  <div className="bg-white p-5 rounded-lg space-y-2 text-center shadow-xl w-[150px] ">
                    <h6 className="text-yellow-600 text-xs uppercase">
                      Mechanism
                    </h6>
                    <h3 className="text-lg text-blue-950 font-bold">
                      Blockchain
                    </h3>
                  </div>
                  <p className="text-gray-600 font-semibold text-xs w-[150px]">
                    Enhance Security by eliminating intermediaries
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full md:max-w-[180px] left-0 md:left-[24%] top-[43%] md:top-0 md:bottom-0 right-0 md:right-0 flex items-center justify-center md:justify-start">
            <div className="relative">
              <img src={bridge} alt="" />
              <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                <div className="md:rotate-90 h-full w-full overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={lineOne}
                    className="size-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50/80 p-5 space-y-5 rounded-lg">
          <div className="siz-10">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format"
              alt=""
            />
          </div>

          <h3 className="text-xl font-bold">Full-suite solutions</h3>
          <p className="text-gray-700">
            Experience the ease of integration across various banking and
            payment functions with our comprehensive suite of solutions.
          </p>
        </div>
        <div className="bg-blue-50/80 p-5 space-y-5 rounded-lg">
          <div className="siz-10">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format"
              alt=""
            />
          </div>

          <h3 className="text-xl font-bold">Simplify the complex</h3>
          <p className="text-gray-700">
            Simplify complex processes and optimise your financial operations by
            leveraging the power of AI, Blockchain, Cloud Computing, and Big
            Data.
          </p>
        </div>
        <div className="bg-blue-50/80 p-5 space-y-5 rounded-lg">
          <div className="siz-10">
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format"
              alt=""
            />
          </div>

          <h3 className="text-xl font-bold">Cutting-edge tech</h3>
          <p className="text-gray-700">
            We seamlessly combine cutting-edge technologies, resulting in an
            unparalleled fintech experience for financial institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
