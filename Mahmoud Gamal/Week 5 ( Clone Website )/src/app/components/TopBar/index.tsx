import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
const socialMedia = [
  {
    href: "https://facebook.com/",
    icon: faFacebookF,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/",
    icon: faTwitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com/",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://pinterest.com/",
    icon: faPinterest,
    label: "Pinterest",
  },
];
const TopBar = () => {
  return (
    <div className="top-area bg-title  ">
      <div className="menu-top text-white mx-auto px-4 sm:px-6 lg:px-10">
        <div className="py-3 mx-auto">
          <div className="flex items-center sm:justify-between justify-center">
            <div className="th-social flex gap-3 items-center justify-between">
              {socialMedia.map(({ href, icon, label }) => (
                <a
                  key={label}
                  target="_blank"
                  className="flex"
                  href={href}
                  aria-label={label}
                >
                  <FontAwesomeIcon
                    fontWeight={700}
                    className="rounded-full border border-midnight p-2.5  aspect-square text-white"
                    icon={icon}
                  />
                </a>
              ))}
            </div>
            <div className="sm:flex items-center  hidden  gap-5 contact">
              <a className="flex items-center gap-2 lg:pl-4 lg:border-l border-lemon /20 lg:ml-4" href="tel:+88001152256">
                {/* <i className="icon-btn fas fa-phone"></i>(88) 0011-52256 */}
                <FontAwesomeIcon
                  className="rounded-full border border-midnight p-2.5  aspect-square text-title bg-lemon "
                  icon={faPhone}
                />
                <span> (88) 0011-52256</span>
              </a>
              <a
                className="hidden lg:flex items-center gap-2 pl-4 border-l border-lemon /20 ml-4"
                href="mailto:infomail123@domain.com"
              >
                {/* <i className="icon-btn fas fa-envelope"></i> */}
                <FontAwesomeIcon
                  className="rounded-full border border-midnight p-2.5  aspect-square text-title bg-lemon "
                  icon={faEnvelope}
                />
                infomail123@domain.com
              </a>
              <a
                //  className="header-link d-none d-xl-inline-block"
                className="hidden lg:flex items-center gap-2"
                href="https://www.google.com/maps"
              >
                {/* <i className="icon-btn fas fa-location-dot"></i> */}
                <FontAwesomeIcon
                  className="rounded-full border border-midnight p-2.5  aspect-square text-title bg-lemon "
                  icon={faLocationDot}
                />
                25 Street, City Road, USA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
