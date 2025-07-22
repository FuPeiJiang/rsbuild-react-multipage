import { createContext } from "react"

type NavigationContextObject = (pathname: string) => void

export const NavigationContext = createContext<NavigationContextObject>(null!)
