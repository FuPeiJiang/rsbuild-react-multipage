import Link from "./Link";
import type { link_a } from "./Navbar";
import { add_base } from "./util/url-path";

export default function View3Navbar({links, pathname}: {links: link_a[], pathname: string}) {
    return (
        links.map(({href, textContent}, i) => <Link key={i} className={`${pathname.startsWith(href) ? "bg-blue-200" : ""}`} href={add_base(href)}>{textContent}</Link>)
    )
}