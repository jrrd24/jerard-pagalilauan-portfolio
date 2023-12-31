import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="footer"
      className=" absolute footer items-center p-4 min-h-20 text-main-dirty-white z-10 md:z-0"
      style={{
        background: "linear-gradient(to right, #FC5185, #364F6B)",
      }}
    >
      <aside className="items-center grid-flow-col">
        <p>
          <b>Jerard Pagalilauan&apos;s</b> Web Portfolio
        </p>
      </aside>

      <nav className="grid-flow-row md:grid-flow-col gap-0 md:gap-4 md:place-self-center md:justify-self-end items-center">
        <header className="footer-title">Contact Me</header>
        <div className="grid grid-flow-col gap-4">
          <a href="tel:+639663672973" target="_blank">
            <FaPhoneAlt className="w-6 h-6" />
          </a>
          <a href="mailto:jerardpagalilauan@gmail.com" target="_blank">
            <MdMail className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/Jrrdprz" target="_blank">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://github.com/jrrd24" target="_blank">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
