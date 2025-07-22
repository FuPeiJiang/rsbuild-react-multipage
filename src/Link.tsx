import { useContext } from "react"
import { NavigationContext } from "./context"
import { remove_base } from "./util/url-path"

export default function Link({className, href, children}: {className: string, href: string, children: React.ReactNode}) {

    const set_pathname = useContext(NavigationContext)

    return (
        <a className={className} onClick={e=>{
            e.preventDefault()
            if (href !== window.location.pathname) {
                window.history.pushState({}, "", href)
                set_pathname(remove_base(href))
            }
        }} href={href}>{children}</a>
    )
}