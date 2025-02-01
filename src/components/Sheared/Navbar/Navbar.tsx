import { ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

// Helper components
const Dropdown = ({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: string[];
  isOpen: boolean;
  onToggle: (key:boolean) => void;
}) => (
  <li
    onMouseLeave={() => onToggle(false)}
    onMouseEnter={() => onToggle(true)}
    className="cursor-pointer px-6 py-3 text-white transition-all relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[1px] hover:after:bg-white"
  >
    <a href="#" className="flex gap-1 items-center justify-between">
      {label}
      <ChevronDown className="size-4" />
    </a>
    <div
      className={`absolute z-50 left-0 top-full min-w-56 bg-white transition-all rounded ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onToggle(false)}
          className="py-2 px-4 cursor-pointer text-[#0B305B] hover:text-radiance-500 text-left border-b border-b-gray-200 whitespace-nowrap block w-full"
        >
          {item}
        </button>
      ))}
    </div>
  </li>
);

const LanguageSelector = ({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="relative flex items-center cursor-pointer border border-white rounded-full p-2 px-3 text-white gap-2"
  >
    <Globe className="size-5" />
    EN
    <ChevronDown
      className={`size-4 transition-all ${isOpen ? "rotate-180" : ""}`}
    />
    <div
      className={`absolute left-0 top-full min-w-40 bg-white p-3 transition-all rounded ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {[
        "EN (English)",
        "TH (Thai)",
        "ID (Bahasa Indonesia)",
        "TW (Traditional Chinese)",
      ].map((lang, idx) => (
        <button
          key={idx}
          className="py-1 cursor-pointer transition-all duration-200 text-[#0B305B] hover:text-radiance-500 text-left border-b-2 border-b-gray-200 whitespace-nowrap block w-full"
        >
          {lang}
        </button>
      ))}
    </div>
  </button>
);

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [smallNav, setSmallNav] = useState(false);

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/about-us", label: "About Us" },
  ];

  const logos = {
    dark: "https://i.ibb.co.com/rGDhQqxP/logo-2.png",
    light: "https://i.ibb.co.com/4ZJWt6Rp/logo-1.png",
  };

  return (
    <div className="bg-radiance-500 relative">
      <div className="container pb-6 pt-4 flex item-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logos.light} alt="Logo" />
        </div>

        {/* Navbar links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <ul className="flex items-center">
            <Dropdown
              label="Solutions"
              items={["AnySass", "AnyCass", "AnyPass"]}
              isOpen={dropOpen}
              onToggle={() => setDropOpen(!dropOpen)}
            />
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="cursor-pointer px-6 py-3 text-white transition-all relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[1px] hover:after:bg-white"
              >
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>

          <LanguageSelector
            isOpen={languageOpen}
            onToggle={() => setLanguageOpen(!languageOpen)}
          />
        </div>

        {/* Nav Buttons */}
        <button className="group hidden lg:flex cursor-pointer items-center gap-2 text-white text-lg font-semibold rounded bg-[#FE8B53] hover:bg-[#fe7553] pl-6 pr-10 py-[13px] relative transition-all drop-shadow-[2px_5px_3px_rgba(16,_62,_117,_.37)] hover:drop-shadow-[2.5px_5.5px_3px_rgba(16,_62,_117,_.6)]">
          Contact Us
          <div className="absolute right-4 top-0 bottom-0 flex items-center group-hover:right-3 transition-all">
            <ChevronRight className="size-5" />
          </div>
        </button>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setSmallNav(!smallNav)}
          className="block lg:hidden cursor-pointer text-white"
        >
          {smallNav ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`block space-y-5 lg:hidden absolute top-full bg-blue-500 p-5 text-lg text-white transition-all duration-200 ${
          !smallNav
            ? "-left-full right-full invisible opacity-0"
            : "left-0 right-0 visible opacity-100"
        }`}
      >
        <ul>
          <Dropdown
            label="Solutions"
            items={["AnySass", "AnyCass", "AnyPass"]}
            isOpen={dropOpen}
            onToggle={(key) => setDropOpen(key)}
          />
          {navLinks.map((link) => (
            <li
              key={link.path}
              className="cursor-pointer px-6 py-3 text-white transition-all relative hover:after:absolute hover:after:content-[''] hover:after:left-0 hover:after:right-0 hover:after:bottom-0 hover:after:h-[1px] hover:after:bg-white"
            >
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
        <LanguageSelector
          isOpen={languageOpen}
          onToggle={() => setLanguageOpen(!languageOpen)}
        />
        </div>
        <button className="w-full border border-white py-2 rounded ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
