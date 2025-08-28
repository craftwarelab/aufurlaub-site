import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
 return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://aufurlaubsrilanka.com/sitemap.xml",
        host: "https://aufurlaubsrilanka.com/",
    }
}