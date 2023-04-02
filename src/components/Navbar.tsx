import React, { ReactNode } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { GithubIcon, LinkdinIcon, MediumIcon, TwitterIcon } from "./Icons";
import { MotionValue, motion } from "framer-motion";

interface CustomNavLinkProps {
  to: string;
  title: string;
}

interface CustomLinkProps {
  to: string;
  Icon: ReactNode | MotionValue<number> | MotionValue<string>;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, title }) => {
  const location = useLocation();

  return (
    <NavLink to={to} className={"mr-4 relative group"}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300  ${
          location.pathname === to ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </NavLink>
  );
};

const CustomLink: React.FC<CustomLinkProps> = ({ to, Icon, className }) => {
  return (
    <motion.a
      href={to}
      target="_blank"
      className={className}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 1 }}
    >
      {Icon}
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomNavLink to="/" title="Home" />
        <CustomNavLink to="/about" title="About" />
        <CustomNavLink to="/projects" title="Projects" />
        <CustomNavLink to="/articles" title="Articles" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <CustomLink
          to={"https://lk.linkedin.com/in/madushan-ranasinghe"}
          Icon={<LinkdinIcon className="" />}
          className="w-4 mr-3"
        ></CustomLink>
        <CustomLink
          to={"https://github.com/Madushan98"}
          Icon={<GithubIcon className="" />}
          className="w-4 mx-3"
        ></CustomLink>
        <CustomLink
          to={"https://ranasinhemadushan.medium.com/"}
          Icon={<MediumIcon className="" />}
          className="w-4 mx-3"
        ></CustomLink>
        <CustomLink
          to={"https://ranasinhemadushan.medium.com/"}
          Icon={<TwitterIcon className="" />}
          className="w-4 ml-3"
        ></CustomLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
