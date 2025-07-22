import { useContext } from "react"
import { NavigationContext } from "./context"
import { remove_base } from "./util/url-path"

export default function Link({className, href, children}: {className: string, href: string, children: React.ReactNode}) {

    const set_pathname_pushState = useContext(NavigationContext)

    return (
        <a className={className} onClick={e=>{
            e.preventDefault()
            if (href !== window.location.pathname) {
                set_pathname_pushState(remove_base(href))
            }
        }} href={href}>{children}</a>
    )
}