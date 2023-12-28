import Link from "@/components/Link";
import { NavbarLinksData } from "@/data";

export default function NavbarLinks() {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      {NavbarLinksData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="rounded-lg p-2.5 text-sm font-medium"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
