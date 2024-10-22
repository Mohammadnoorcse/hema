import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import img1 from "../../assets/10001.svg";
import img2 from "../../assets/10002.svg";
import img3 from "../../assets/10003.svg";
import img4 from "../../assets/10004.svg";
import img5 from "../../assets/10005.svg";
import img6 from "../../assets/10006.svg";
import img7 from "../../assets/10007.svg";
import img8 from "../../assets/10008.svg";
import img9 from "../../assets/10009.svg";
import img10 from "../../assets/10010.svg";
import img11 from "../../assets/10011.svg";
import img12 from "../../assets/10012.svg";
import img13 from "../../assets/10013.svg";
import img14 from "../../assets/10014.svg";

const Footer = () => {
  
  return (
    <>
      {/* section-1 */}
      <div className="mt-[3rem] w-full min-h-[230px] flex justify-center items-center bg-[#9C1AFF]">
        <div className="custom flex justify-between  md:flex-row flex-col md:gap-0 md:mt-0  md:mb-0 gap-[2rem] mt-[4rem]  mb-[3rem]">
          <div className="flex flex-col md:order-1 order-2">
            <h4 className="text-white text-[26px] leading-[32px] font-bold mb-[10px]">
              hulp nodig?
            </h4>
            <ul className=" text-white">
              <li>
                <Link
                  to="/"
                  className="underline text-base leading-[20px] font-normal duration-300 ease-in-out hover:text-[#323232]"
                  style={{ textUnderlineOffset: "3px" }}
                >
                  mijn bestelling
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="underline text-base leading-[20px] font-normal duration-300 ease-in-out hover:text-[#323232]"
                  style={{ textUnderlineOffset: "3px" }}
                >
                  mijn bestelling
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="underline text-base leading-[20px] font-normal duration-300 ease-in-out hover:text-[#323232]"
                  style={{ textUnderlineOffset: "3px" }}
                >
                  mijn bestelling
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:order-2 order-3">
            <h4 className="text-white text-[26px] leading-[32px] font-bold mb-[10px]">
              hulp nodig?
            </h4>
            <span className="text-[#fff] text-base leading-[20px] font-normal flex gap-1">
              ga naar
              <Link
                to="/"
                className="underline duration-300 ease-in-out hover:text-[#323232]"
                style={{ textUnderlineOffset: "3px" }}
              >
                onze klantenservice
              </Link>
            </span>
          </div>
          <div className="flex flex-col md:order-3 order-1">
            <h4 className="text-white text-[26px] leading-[32px] font-bold mb-[10px] flex gap-1 items-center">
              <IoLocationSharp />
              vind een winkel
            </h4>
            <span className="text-base leading-[20px] font-normal text-white mb-[16px]">
              zoek een winkel bij jou in de buurt
            </span>
            <div className="md:w-[20rem] w-full h-[56px] bg-[white] flex gap-1 items-center p-[16px] rounded-md">
              <input
                type="text"
                className="w-full h-full border-none outline-none "
              />
              <IoSearch className="text-2xl font-bold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className="w-full flex justify-center items-center">
        <div className="custom flex flex-col gap-4">
          {/* item-1 */}
          <div className="mt-[4rem] flex justify-between lg:flex-row flex-col gap-[2rem] lg:gap-0 border-b  pb-[2rem] ">
            {/* child-1 */}
            <div className="lg:order-1 order-2 lg:border-none border-b pb-[2rem] lg:pb-0">
              <h4 className="mb-[24px] text-[26px] leading-[32px] font-bold text-[#323232]">
                volg HEMA
              </h4>
              <ul className="flex items-center gap-[8px] flex-wrap">
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img1} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img2} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img3} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img4} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img5} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img6} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img7} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img8} alt="" className="w-full h-full" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* child-2 */}
            <div className="lg:order-2 order-3">
              <h4 className="mb-[24px] text-[26px] leading-[32px] font-bold text-[#323232]">
                makkelijk betalen*
              </h4>
              <ul className="flex items-center gap-[8px] flex-wrap mb-[8px]">
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img9} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img10} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img11} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img12} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img13} alt="" className="w-full h-full" />
                  </Link>
                </li>
                <li className="w-[32px] h-[32px] p-[2px]">
                  <Link to="/" className="w-[32px] h-[32px]">
                    <img src={img14} alt="" className="w-full h-full" />
                  </Link>
                </li>
              </ul>
              <span className="text-[#9b9b9b] text-[12px] leading-[16px]">
                *afhankelijk van de gekozen bezorgopties
              </span>
            </div>
            {/* child-3 */}
            <div className="lg:w-[23rem] w-full lg:order-3 order-1 lg:border-none border-b pb-[2rem] lg:pb-0 ">
              <h4 className="mb-[24px] text-[26px] leading-[32px] font-bold text-[#323232]">
                altijd op de hoogte van onze acties
              </h4>
              <p className="mb-[16px] text-base leading-[20px] text-[#323232] ">
                Schrijf je in voor de HEMA nieuwsbrief. Meermaals per week de
                laatste (online) aanbiedingen. Krijg direct 10% korting na
                aanmelding. Afmelden kan altijd.
              </p>
              <div className="flex gap-2 ">
                <input
                  type="text"
                  className="lg:w-[225px] w-full h-[56px] border-2 rounded-md p-[16px] outline-none"
                  placeholder="e-mailadres*"
                />
                <button className="lg:w-full w-[200px] bg-[#00838c] text-[#fff] rounded-md h-[56px] text-base font-bold p-2">
                  aanmelden
                </button>
              </div>
            </div>
          </div>
          {/* item-2 */}
          <div className="mt-[3rem] flex justify-between flex-row flex-wrap gap-[1rem] border-b  pb-[2rem]">
            {/* child-1 */}
            <div>
              <h4 className="mb-[8px] text-[20px] leading-[24px] font-bold text-[#323232]">
                populaire categorieën
              </h4>
              <ul>
                {[
                  "dameskleding",
                  "kinderkleding",
                  "babykleding",
                  "beddengoed",
                  "woonaccessoires",
                  "handdoeken",
                  "raamdecoratie",
                  "speelgoed",
                  "gebak",
                  "koffie",
                ].map((value, index) => (
                  <li className="mb-[8px]" key={index}>
                    <Link
                      to="/"
                      className="hover:underline text-[14px] leading-[16px] duration-300 ease-in-out text-[#323232]"
                      style={{ textUnderlineOffset: "4px" }}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* child-2 */}
            <div>
              <h4 className="mb-[8px] text-[20px] leading-[24px] font-bold text-[#323232]">
                meer voor HEMA fans
              </h4>
              <ul>
                {[
                  "HEMA app",
                  "HEMA pas",
                  "lees onze folders",
                  "folder via Whatsapp ontvangen",
                  "HEMA op social media",
                  "HEMA herontwerpwedstrijd",
                  "HEMA fotoservice",
                  "HEMA cadeaukaarten",
                  "HEMA tickets",
                  "HEMA verzekeringen",
                  "inspiratie",
                  "nieuws",
                ].map((value, index) => (
                  <li className="mb-[8px]" key={index}>
                    <Link
                      to="/"
                      className="hover:underline text-[14px] leading-[16px] duration-300 ease-in-out text-[#323232]"
                      style={{ textUnderlineOffset: "4px" }}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* child-3 */}
            <div>
              <h4 className="mb-[8px] text-[20px] leading-[24px] font-bold text-[#323232]">
                over HEMA
              </h4>
              <ul>
                {[
                  "over ons bedrijf",
                  "werken bij HEMA",
                  "goed idee van HEMA",
                  "nieuws en pers",
                  "HEMA geschiedenis",
                  "HEMA zakelijk",
                  "klantenservice",
                  "actievoorwaarden",
                  "saldo cadeaukaart opvragen",
                  "partnerships",
                ].map((value, index) => (
                  <li className="mb-[8px]" key={index}>
                    <Link
                      to="/"
                      className="hover:underline text-[14px] leading-[16px] duration-300 ease-in-out text-[#323232]"
                      style={{ textUnderlineOffset: "4px" }}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* child-4 */}
            <div>
              <h4 className="mb-[8px] text-[20px] leading-[24px] font-bold text-[#323232]">
                internationaal
              </h4>
              <ul>
                {[
                  "internationaal",
                  "HEMA België",
                  "HEMA Duitsland",
                  "HEMA Frankrijk",
                  "HEMA Oostenrijk",
                  "HEMA Verenigde Arabische Emiraten",
                ].map((value, index) => (
                  <li className="mb-[8px]" key={index}>
                    <Link
                      to="/"
                      className="hover:underline text-[14px] leading-[16px] duration-300 ease-in-out text-[#323232]"
                      style={{ textUnderlineOffset: "4px" }}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* item-3 */}
          <div className="mt-[3rem] flex justify-between lg:items-center lg:flex-row flex-col flex-wrap gap-[1rem] border-b  pb-[2rem]">
            {/* chlid-1 */}
            <div className="lg:order-1 order-2">
              <Link>
                <img
                  src="https://www.hema.nl/on/demandware.static/Sites-HemaNL-Site/-/default/dwd36431e0/images/logo.svg"
                  alt=""
                  className="max-w-[80px] w-full rounded-md "
                />
              </Link>
            </div>
            {/* chlid-2 */}
            <div className="lg:order-2 order-1 border-b  pb-[2rem] lg:border-none lg:pb-0 ">
              <ul className="flex flex-wrap items-center lg:justify-end justify-start gap-[16px]">
                {[
                  "privacy statement",
                  "disclaimer",
                  "security",
                  "copyright",
                  "algemene voorwaarden",
                  "cookies",
                  "nix 18",
                  "thuiswinkel waarborg",
                ].map((value, index, array) => (
                  <li className="" key={index}>
                    <Link
                      to="/"
                      className={`hover:underline text-[14px] leading-[16px] font-bold pr-2 duration-300 ease-in-out text-[#323232] ${
                        index !== array.length - 1 ? "border-r-2" : ""
                      }`}
                      style={{ textUnderlineOffset: "4px" }}
                    >
                      {value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* item-4 */}
          <div className="my-[3rem]  flex justify-center items-center flex-col gap-[16px] ">
            <ul className="text-center text-[#323232]">
              <li className="text-[12px] leading-[16px] font-normal ">
                HEMA B.V., NDSM-straat 10,1033 SB Amsterdam
              </li>
              <li className="text-[12px] leading-[16px] font-normal">
                KvK-nummer: 34215639
              </li>
              <li className="text-[12px] leading-[16px] font-normal">
                IBAN: HEMA NL67INGB0651607663
              </li>
              <li className="text-[12px] leading-[16px] font-normal">
                Btw-identificatienummer: NL814217412B01
              </li>
              <li className="text-[12px] leading-[16px] font-normal">
                E-mailadres klantenservice: hemaklantenservice@hema.nl
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer