
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SavedPathnameStore = {
  saved_pathname: string
  saved_pathname_view3: string
  set_saved_pathname: (new_saved_pathname: string) => void
}

export const useSavedPathnameStore = create<SavedPathnameStore>() (
    persist(
        (set, get) => ({
            saved_pathname: "/view2",
            saved_pathname_view3: "/view3/subview1",
            set_saved_pathname: (new_saved_pathname: string) => {
                const { saved_pathname } = get()
                if (new_saved_pathname === saved_pathname) return
                set(() => {
                    return {
                        saved_pathname: new_saved_pathname,
                        ...(new_saved_pathname.startsWith("/view3") && {saved_pathname_view3: new_saved_pathname})
                    }
                })
            },
        }),
        {
            name: "saved_pathname"
        }
    )
)