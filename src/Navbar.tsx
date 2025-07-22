import Link from "./Link";
import { add_base } from "./util/url-path";

export type link_a = {
  href: string;
  textContent: string;
};

export default function Navbar({links, pathname}: {links: link_a[], pathname: string}) {
    return (
        links.map(({href, textContent}, i) => <Link key={i} className={`${pathname.startsWith(href) ? "bg-green-200" : ""}`} href={add_base(href)}>{textContent}</Link>)
    )
}