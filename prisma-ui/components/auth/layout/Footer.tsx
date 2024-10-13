import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import DomainSwitcher from "./DomainSwitcher";

function Footer() {
  return (
    <>
      <div className="border-t py-2 ">
        <div className="w-[90%] mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex  ">
              <a className="link">
                <FaFacebook size={25} />
              </a>
              <span className="mx-2"></span>
              <a className="link">
                <FaYoutube size={25} />
              </a>
              <span className="mx-2"></span>
              <a className="link">
                <FaInstagram size={25} />{" "}
              </a>
            </div>
            <div className="flex md:justify-center">
              <DomainSwitcher />
            </div>
            <div className="flex md:justify-end">
              <a className="link text-sm">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a className="link text-sm">Terms and conditions</a>
              <span className="mx-2">|</span>
              <a className="link text-sm">Cookies</a>
              <span className="mx-2">|</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
