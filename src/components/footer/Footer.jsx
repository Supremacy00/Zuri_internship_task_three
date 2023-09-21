import { footerLinks, socialMediaIcons } from "../data";

const Footer = () => {
  
  return (
    <footer className="mt-44 pb-12 font-roboto md:mt-44 md:pb-36">
      <div>
        <div className="flex justify-center items-center gap-8 md:gap-10">
          {socialMediaIcons.map((item) => (
            <div key={item.id} className="text-[20px] md:text-[25px]">{item.icon}</div>
          ))}
        </div>
        <div className="flex justify-center items-center text-[15px] mt-6 gap-3  sm:gap-6  sm:mt-10 sm:text-[17px]">
          {footerLinks.map((item) => (
            <div key={item.id}>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-center text-gray-500 text-[14px] mt-6 sm:mt10  sm:text-[15px]">
            &copy; 2023 Gallery by Musa Abdulmuqaddas
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
