import Link from "next/link";
import { ContactInfo } from "../_components/ContactInfo";
import { LogoCon } from "../_components/LogoContainer";
import { Socail } from "../_components/SocialPages";

export const Footer = () => {
  return (
    <div className="w-full h-[280px] bg-indigo-700 flex justify-center items-center ">
      <div className="w-[88.8888888888%] h-[71.428571%] flex justify-between">
        <Link href="/">
          <LogoCon />
        </Link>
        <div className="w-[50%] h-full flex justify-end gap-24">
          <ContactInfo />
          <Socail />
        </div>
      </div>
    </div>
  );
};
