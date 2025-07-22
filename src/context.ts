import { createContext } from "react"

type NavigationContextObject = React.Dispatch<React.SetStateAction<string>>

export const NavigationContext = createContext<NavigationContextObject>(null!)
