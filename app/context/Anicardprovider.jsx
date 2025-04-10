'use client';
import React, { createContext } from 'react'

export const anicardcontext = createContext();

const Anicardprovider = ({ children }) => {
    const imageUrls = [
        {
            name: "brand Story",
            url: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan.avif",
            title: "Brand Story",
            description: "Explore the journey of our brand and its evolution.",
            color: "#AA81B7"
        },
        {
            name: "Brand identity",
            url: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit.avif",
            title: "Web Design",
            description: "Creative and modern web design for your needs.",
            color: "#10100F"
        },
        {
            name: "Webdesign",
            url: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign.avif",
            title: "À La Carte",
            description: "Customized solutions tailored to your preferences.",
            color: "#36A96A"
        },
        {
            name: "Brand care",
            url: "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte.jpg",
            title: "Brand Identity",
            description: "Building unique and strong brand identities.",
            color: "#FA8A58"
        }
    ];

    return (
        <anicardcontext.Provider value={imageUrls}>
            {children}
        </anicardcontext.Provider>
    )
}

export default Anicardprovider
