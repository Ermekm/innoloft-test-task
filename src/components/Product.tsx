import productImg from "../assets/images/image_1.png";
import patent from "../assets/icons/patent.svg";
import profileImg from "../assets/images/profile_1.png";
import location from "../assets/icons/location.svg";
import technology from "../assets/icons/technology.svg";
import businessModel from "../assets/icons/business_model.svg";
import trl from "../assets/icons/time.svg";
import costs from "../assets/icons/costs.svg";
import { Map } from "./Map";

export const Product = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col md:flex-row">
        <div>
          {/* image start */}
          <div className="relative rounded-tl-md overflow-hidden">
            <div className="">
              <img className="w-[100%]" src={productImg} alt="product_img " />
            </div>
            <div className="flex absolute top-0 left-0  rounded-br-md overflow-hidden">
              <div className="bg-primary w-[40px] flex justify-center items-center">
                <img src={patent} alt="" />
              </div>
              <div className="bg-white text-[16px] text-accent-t font-semibold px-[10px] py-[8px]">
                Patent
              </div>
            </div>
          </div>
          {/* image end */}

          {/* text-start  */}
          <div className="px-[10px] py-[20px] md:px-[20px]">
            <h4 className="text-accent-t font-semibold pb-[10px]">
              Intelligent Finite Elements in Structural mechanics
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          {/* text-end */}
        </div>

        {/* owner start */}
        <div className="w-[100%] md:w-[380px] flex-none flex gap-[10px] flex-col px-[10px] py-[20px] md:px-[20px]">
          <div className="font-semibold">Offered By</div>
          <div className="w-[100%] md:w-[200px] pt-[10px]">
            <img src="https://img.innoloft.com/logo.svg" alt="" />
          </div>
          <div className="flex items-center mb-[10px]">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
              <img src={profileImg} alt="profile_img" />
            </div>
            <div>
              <div className="font-semibold text-[18px]">Sven Pietsch</div>
              <div className="">Innoloft GmbH</div>
            </div>
          </div>
          <div className="flex gap-[5px]">
            <div>
              <img src={location} alt="" />
            </div>
            <div className="w-[160px]">
              Jülicher Straße 72a, 52070 Aachen, Germany
            </div>
          </div>
          <div>
            <Map />
          </div>
        </div>
        {/* owner end */}
      </div>

      {/* video start */}
      <div className="px-[10px] py-[20px] md:px-[20px]">
        <h4 className="font-semibold text-[16px] mb-[20px]">Video</h4>
        <div className="relative mx-auto md:w-[70%] w-[100%]">
          <div className="pt-[56.25%]"></div>
          <iframe
            className="absolute top-0 left-0 w-[100%] h-[100%]"
            src="https://www.youtube.com/embed/-CTlz5PJRZs"
            title="4K Nature Treasures of Hawaii Botanical Garden - Jungle Forest Cinematic Virtual Walk (Slow Motion)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* video end */}

      {/* offer start */}
      <div className="md:px-[20px] md:py-[30px] px-[10px] py-[20px]">
        <h4 className="text-[16px] font-semibold text-accent-t mb-[20px]">
          Offer details
        </h4>
        <div className="grid lg:grid-cols-2 gap-[40px]">
          <div className="flex gap-2">
            <div>
              <img src={technology} alt="" />
            </div>
            <div>
              <div>Technology</div>
              <ul className="flex gap-[6px]">
                <li className="px-[14px] py-[5px]">Label1</li>
                <li className="px-[14px] py-[5px]">Label2</li>
                <li className="px-[14px] py-[5px]">Label3</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={businessModel} alt="" />
            </div>
            <div>
              <div>Business Model</div>
              <ul className="flex gap-[6px]">
                <li className="px-[14px] py-[5px]">Label1</li>
                <li className="px-[14px] py-[5px]">Label2</li>
                <li className="px-[14px] py-[5px]">Label3</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={trl} alt="" />
            </div>
            <div>
              <div>TRL</div>
              <div className="px-[14px] py-[5px]">
                TRL 9 – Actual system proven in operational environment
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img src={costs} alt="" />
            </div>
            <div>
              <div>Costs</div>
              <div className="px-[14px] py-[5px]">1000$</div>
            </div>
          </div>
        </div>
      </div>
      {/* offer end */}
    </div>
  );
};
