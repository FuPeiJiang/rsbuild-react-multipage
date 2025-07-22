
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SavedPathnameStore = {
  saved_pathname: string
  saved_pathname_view3: string
  set_saved_pathname: (pathname: string) => void
  set_saved_pathname_view3: (pathname: string) => void
}

export const useSavedPathnameStore = create<SavedPathnameStore>() (
    persist(
        (set) => ({
            saved_pathname: "/view2",
            saved_pathname_view3: "/view3/subview1",
            set_saved_pathname: (saved_pathname: string) => set(() => ({ saved_pathname })),
            set_saved_pathname_view3: (saved_pathname_view3: string) => set(() => ({ saved_pathname_view3 })),
        }),
        {
            name: "saved_pathname"
        }
    )
)