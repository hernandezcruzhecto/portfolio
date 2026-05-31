import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),

    title: "H. Cruz · Portfolio",
    description:
        "Senior Full-Stack Engineer specializing in TypeScript, React, Go, Node.js, and clinical AI systems. 9+ years shipping production software in globally distributed, English-first teams.",

    keywords:
        "Héctor Hernández Cruz, Senior Full-Stack Engineer, TypeScript, React, Go, Node.js, GraphQL, PostgreSQL, Redis, AWS, LangChain, RAG, Clinical AI, Remote Developer, Playa del Carmen, Mexico, Portfolio",

    authors: [
        { name: "Héctor Hernández Cruz", url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL },
    ],

    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "H. Cruz · Portfolio",
        url: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
        title: "Héctor Hernández Cruz · Senior Full-Stack Engineer",
        description:
            "Senior Full-Stack Engineer specializing in TypeScript, React, Go, Node.js, and clinical AI systems. 9+ years shipping production software in globally distributed, English-first teams.",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "Héctor Hernández Cruz · Senior Full-Stack Engineer Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Héctor Hernández Cruz · Senior Full-Stack Engineer",
        description:
            "Senior Full-Stack Engineer specializing in TypeScript, React, Go, Node.js, and clinical AI systems. Based in Playa del Carmen, Mexico.",
        creator: "@hernandezcruzhecto",
        images: ["/og-image.webp"],
    },

    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

    alternates: {
        canonical: process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
    },
};
