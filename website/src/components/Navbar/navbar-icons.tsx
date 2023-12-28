import { SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";
import { Tooltip } from "flowbite-react";
import Link from "@/components/Link";
import DocSearchInput from "./docsearch-input";
import ThemeSwitch from "./theme-switch";
import { SiteMetadata } from "@/data";

export default function NavbarIcons() {
  return (
    <div className="flex items-center gap-1">
      <div className="lg:hidden">
        <DocSearchInput />
      </div>
      <Link
        href={SiteMetadata.twitter_url}
        className="hidden rounded-lg p-2.5 focus:outline-none focus:ring-4 lg:block"
      >
        <Tooltip animation={false} content="Follow on Twitter">
          <SiTwitter aria-hidden className="h-5 w-5" />
        </Tooltip>
      </Link>
      <Link
        href={SiteMetadata.github_url}
        className="hidden rounded-lg p-2.5 focus:outline-none focus:ring-4 lg:block"
      >
        <Tooltip animation={false} content="Follow on Instagram">
          <SiInstagram aria-hidden className="h-5 w-5" />
        </Tooltip>
      </Link>
      <Link
        href={SiteMetadata.youtube_url}
        className="hidden rounded-lg p-2.5 focus:outline-none focus:ring-4 lg:block"
      >
        <Tooltip animation={false} content="Subscribe on YouTube">
          <SiYoutube aria-hidden className="h-5 w-5" />
        </Tooltip>
      </Link>
      <Tooltip animation={false} content="Toggle dark mode">
        <ThemeSwitch />
      </Tooltip>
    </div>
  );
}
