import { copyFileSync, existsSync, mkdirSync } from "fs";
import { basename, dirname, resolve } from "path";

const pathnames = [
    "/view1",
    "/view2",
    "/view3",
    "/view3/subview1",
    "/view3/subview2",
    "/view3/subview3",
]

const dist_folder = resolve(`${import.meta.dirname}/../dist`)

if (!existsSync(dist_folder)) process.exit()
if (!existsSync(`${dist_folder}/index.html`)) process.exit()

for (const pathname of pathnames) {
    mkdirSync(`${dist_folder}/${dirname(pathname)}`, {recursive: true})
    copyFileSync(`${dist_folder}/index.html`, `${dist_folder}/${dirname(pathname)}/${basename(pathname)}.html`)
}
