/* eslint-disable @typescript-eslint/no-explicit-any */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSlider = Slider as any;

const data = [
  {
    subtitle: "Customer focused",
    title: "Purpose-built financial services",
    paragraph:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system. Experience the advantages of integrated retail financial.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
  {
    subtitle: "Seamless Integration",
    title: "Advanced Financial Solutions",
    paragraph:
      "Leverage cutting-edge APIs and cloud-native architectures to enable seamless integration with existing financial ecosystems. Our platform ensures real-time data synchronization and enhanced security for all transactions.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
  {
    subtitle: "Scalable & Secure",
    title: "Next-Gen Banking Infrastructure",
    paragraph:
      "Empower your financial institution with a highly scalable and secure infrastructure. Designed for growth, our technology enables banks and fintech companies to innovate faster while maintaining compliance and security standards.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
];

const Technology = () => {
  const slideSettings = () => {
    return {
      customPaging: function (index: number) {
        const item = data?.[index];
        return (
          <div className="!w-46 !h-10 overflow-hidden rounded-full bg-blue-50 flex items-center justify-center">
            {item?.subtitle}
          </div>
        );
      },
      dots: true,
      dotsClass:
        "slick-dots slick-thumb !-top-10 !space-x-14 !hidden md:!flex justify-center",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  };

  return (
    <section>
      <div className="container py-20">
        <div>
          <h6 className="text-center text-lg font-semibold text-blue-600 -tracking-tighter">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="text-center text-blue-950 text-3xl sm:text-5xl md:text-6xl font-semibold">
            The future of finance
          </h2>
        </div>
      </div>

      <div>
        <div className="container">
          <SlickSlider {...slideSettings()}>
            {data?.map((item) => (
              <div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 min-h-[400px] w-full bg-white p-5">
                  <div className="space-y-5">
                    <h6 className="text-lg font-semibold text-blue-600 -tracking-tighter">
                      {item?.subtitle}
                    </h6>
                    <h2 className="text-blue-950 text-xl sm:text-2xl md:text-4xl font-semibold">
                      {item?.title}
                    </h2>
                    <p className="text-lg font-semibold text-gray-950">
                      {item?.paragraph}
                    </p>
                    <p className="text-lg text-gray-600">{item?.paragraph}</p>
                  </div>
                  <div className="size-full overflow-hidden rounded-xl">
                    <img
                      className="size-full object-cover"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default Technology;
