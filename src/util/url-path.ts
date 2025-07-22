export function remove_base(pathname: string, base = import.meta.env.BASE_URL) {
    // "/", "/" -> "/"
    // "/home", "/" -> "/home"
    // "/REPO", "/REPO" -> "/"
    // "/REPO/home", "/REPO" -> "/home"
    if (base.length === 1) return pathname
    if (base.length === pathname.length) return "/"
    return pathname.slice(base.length)
}

export function add_base(pathname: string, base = import.meta.env.BASE_URL) {
    // "/", "/" -> "/"
    // "/home", "/" -> "/home"
    // "/", "/REPO" -> "/REPO"
    // "/home", "/REPO" -> "/REPO/home"
    if (base.length === 1) return pathname
    if (pathname.length === 1) return base // if "/" then base
    return `${base}${pathname}`
}