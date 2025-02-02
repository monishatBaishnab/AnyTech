import Button from "../../Sheared/Buttons/Button";

const Header = () => {
  return (
    <div id="header">
      <div className="bg-radial-[at_50%_75%] pt-20 from-blue-400 to-blue-600 min-h-[600px] overflow-hidden relative">
        <div className="md:absolute z-50 left-0 right-0 top-0 container py-32 text-white space-y-6">
          <h1 className="text-4xl md:text-7xl w-full lg:w-1/2 font-semibold">
            Embrace the future of finance
          </h1>
          <p className="text-lg font-semibold w-full lg:w-1/2">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>
          <Button>Reach Out to Us</Button>
        </div>
        <div className="hidden md:block absolute z-0 right-0 top-0 bottom-0 h-full w-[70%] overflow-hidden" id="header-img">
          <div className="size-full overflow-hidden" >
            <img
              className="size-full object-cover"
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=320&auto=format"
              alt=""
            />
          </div>
        </div>
        <div className="md:hidden" id="header-img-sm">
          <div className="size-full overflow-hidden" >
            <img
              className="size-full object-cover"
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=320&auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
