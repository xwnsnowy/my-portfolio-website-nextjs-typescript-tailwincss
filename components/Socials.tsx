import Link from "next/link";
import React from "react";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface SocialLinkItem {
  icon: IconType;
  path: string;
}

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socialsLink: SocialLinkItem[] = [
  { icon: FaGithub, path: "" },
  { icon: FaFacebook, path: "" },
  { icon: FaYoutube, path: "" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLink.map((link, index) => (
        <Link key={link.path} href={link.path} className={iconStyles}>
          <link.icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
