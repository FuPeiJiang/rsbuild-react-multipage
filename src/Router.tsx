import { useEffect } from "react";
import Navbar from "./Navbar";
import { add_base, remove_base } from "./util/url-path";
import View1 from "./View1";
import View2 from "./View2";
import { NavigationContext } from "./context";
import View3Navbar from "./View3Navbar";
import View3SubView1 from "./View3SubView1";
import View3SubView2 from "./View3SubView2";
import View3SubView3 from "./View3SubView3";

import logo_rsbuild from './static/rsbuild-logo.svg';
import logo_react from './static/react.svg';
import { useSavedPathnameStore } from "./util/store";

export default function Router() {

    const { saved_pathname, set_saved_pathname, saved_pathname_view3, set_saved_pathname_view3 } = useSavedPathnameStore()

    const pathname = remove_base(window.location.pathname)

    function set_pathname(pathname: string) {
        if (pathname !== saved_pathname) {
            set_saved_pathname(pathname)
            if (pathname.startsWith("/view3")) {
                set_saved_pathname_view3(pathname)
            }
        }
    }

    useEffect(()=>{
        set_pathname(pathname)
    }, []) //only on first visit of page

    function redirect(pathname: string) {
        window.history.replaceState({}, "", add_base(pathname))
    }

    const path_segments = pathname.split("/")

    return (
        <NavigationContext value={set_pathname}>
            <img src={logo_rsbuild} width="40" className="inline" />
            <img src={logo_react} width="40" className="inline" />
            <br/>
            <Navbar links={[
                {href: "/view1", textContent: "View 1"},
                {href: "/view2", textContent: "View 2"},
                {href: "/view3", textContent: "View 3"},
            ]} pathname={pathname}/>
            {
                (()=>{
                    switch (path_segments[1]) {
                        default: redirect(saved_pathname); return null //redirect
                        case "view1": return <View1 />
                        case "view2": return <View2 />
                        case "view3": return (
                            <>
                                <br/>
                                <View3Navbar links={[
                                    {href: "/view3/subview1", textContent: "SubView 1"},
                                    {href: "/view3/subview2", textContent: "SubView 2"},
                                    {href: "/view3/subview3", textContent: "SubView 3"},
                                ]} pathname={pathname}/>
                                {
                                    (()=>{
                                        switch (path_segments[2]) {
                                            default: redirect(saved_pathname_view3); return null //redirect
                                            case "subview1": return <View3SubView1 />
                                            case "subview2": return <View3SubView2 />
                                            case "subview3": return <View3SubView3 />
                                        }
                                    })()
                                }
                            </>
                        )
                }})()
            }
        </NavigationContext>
    )
}