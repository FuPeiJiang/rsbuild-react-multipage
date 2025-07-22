import Link from "./Link";
import type { link_a } from "./Navbar";
import { add_base } from "./util/url-path";

export default function View3Navbar({links, path_segment}: {links: link_a[], path_segment: string}) {
    return (
        links.map(({href, textContent}, i) => <Link key={i} className={`${href.endsWith(path_segment) ? "bg-blue-200" : ""}`} href={add_base(href)}>{textContent}</Link>)
    )
}