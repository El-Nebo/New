import Image from "next/image";
import Nasdaq from "../../../../public/icons/nasdaq.svg"
import Volkswagen from "../../../../public/icons/volkswagen.svg"
import Box_company from "../../../../public/icons/box_company.svg"
import Netapp from "../../../../public/icons/netapp.svg"
import Eventbrite from "../../../../public/icons/eventbrite.svg"
import { TbWorld } from "react-icons/tb";
import UdemyLogo from "../../../../public/icons/UdemyLogo";

function CoursePageFooter() {
  const footer_mid_buttons = [
    {
      text: "Udemy Business",
    },
    {
      text: "Teach on Udemy",
    },
    {
      text: "Get the app",
    },
    {
      text: "About us",
    },
    {
      text: "Contact us",
    },
    {
      text: "Careers",
    },
    {
      text: "Blog",
    },
    {
      text: "Help and Support",
    },
    {
      text: "Affiliate",
    },
    {
      text: "Investors",
    },
    {
      text: "Terms",
    },
    {
      text: "Privacy policy",
    },
    {
      text: "Cookie settings",
    },
    {
      text: "Sitemap",
    },
    {
      text: "Accessibility statement",
    },
  ];

  return (
    <footer>
      <div className="bg-[#1c1d1f] mt-[20px] h-[465px] w-full">
        <div className="pt-[30px] pb-[12px] px-[45px] flex justify-between border-[2px] border-[#282829]">
          <div>
            <h3 className="text-white my-0 inline-block">Top companies choose</h3>
            <button className="font-semibold text-[1.1rem] text-[#cec0fc] hover:underline">
              &nbsp;Udemy Business&nbsp;
            </button>
            <h3 className="text-white my-0 inline-block">
              to build in-demand career skills.
            </h3>
          </div>
          <div className="flex flex-row gap-7">
            <Image src={Nasdaq} alt="nasdaq_logo"/>
            <Image src={Volkswagen} alt="volkswagen_logo"/>
            <Image src={Box_company} alt="box_company_logo"/>
            <Image src={Netapp} alt="netapp_logo"/>
            <Image src={Eventbrite} alt="eventbrite_logo"/>
          </div>
        </div>

        <div className="pt-[30px] pb-[12px] px-[45px] h-[220px] flex justify-between">
          <div className="flex flex-col flex-wrap justify-between h-full w-[60%] ">
            {footer_mid_buttons?.map((button, index) => (
              <button key={index} className="text-white font-semibold text-[0.9rem] max-w-[200px] h-[30px] flex items-start">
                {button.text}
              </button>
            ))}
          </div>
          <div>
            <button className="bg-transparent border bordre-white text-white h-[40px] w-[120px] flex flex-row items-center gap-2 pl-4">
              <TbWorld   size={17} />
              English
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-[1100px] ml-[45px]">
          <UdemyLogo fill="white"/>
          <p className="text-white">© 2021 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}

export default CoursePageFooter;
