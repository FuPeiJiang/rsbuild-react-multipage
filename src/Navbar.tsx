import { memo } from "react";
import Link from "./Link";
import { add_base } from "./util/url-path";

export type link_a = {
  href: string;
  textContent: string;
};

export default memo(function Navbar({links, path_segment}: {links: link_a[], path_segment: string}) {
    // console.log("rerendered Navbar");

    return (
        links.map(({href, textContent}, i) => <Link key={i} className={`${href.endsWith(path_segment) ? "bg-green-200" : ""}`} href={add_base(href)}>{textContent}</Link>)
    )
});