import images from "../assets/images/logo-1.png"
import { AiFillHome } from "react-icons/ai";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter, BiLogoGoogle} from "react-icons/bi"
export const footer = {
    title: "Company name",
    images : images,
    popular: {
        "title": "Popular",
        "children": [
            {
                "name": "Becoming by Michelle Obama"
            },
            {
                "name": "Dear Tomorrow"
            },
            {
                "name": "Merdeka Sejak Hati"
            },
            {
                "name": "A Wrinkle in Time"
            }
        ]
    },
    about: {
        "title": "About",
        "children": "Buku sering disebut sebagai jendela dunia karena dengan membaca buku kita dapat mengetahui apa saja yang ada di dunia ini baik dimasa sekarang bahkan dimasa lampau, kuncinya hanyalah membaca."
    },
    contact: {
        "title": "Contact",
        "children": [
            {
                "name": "Indonesia",
                Icons: AiFillHome,
            },
            {
                "name": "Dear Tomorrow",
                Icons: IoMdMail,
            },
            {
                "name": "Merdeka Sejak Hati",
                Icons: IoMdCall,
            },
        ]
    },
}

export const sosmed = [
    {
        Icons: BiLogoInstagram,
        link: "https://www.instagram.com/"
    },
    {
        Icons: BiLogoFacebook,
        link: "https://www.instagram.com/"
    },
    {
        Icons: BiLogoTwitter,
        link: "https://twitter.com/"
    },
    {
        Icons: BiLogoGoogle,
        link: "https://google.com/"
    },
]
