'use client';

import React, { createContext } from 'react'

export const movingcontext = createContext();

const Movingprovider = ({ children }) => {
    const imageObjects = [
        {
            name: "T-Shirt Mockup",
            url: "https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/67a0c8ac474db23ccc3774b7_NDF_Free%20Backside%20T-Shirt%20Mockup-p-800.jpg"
        },
        {
            name: "Book Cover",
            url: "https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/67a0c7445f13f47ad70e5ef2_SALUD_Book_NaN-min-p-800.jpg"
        },
        {
            name: "Business Card",
            url: "https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/67a0c798a648081c42ad8125_MAX_business-card-NaN-min-p-800.jpg"
        },
        {
            name: "Workbook Cover",
            url: "https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-800.webp"
        },
        {
            name: "Perfume Bottle",
            url: "https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/67a0c71a1b233de538cd7fa5_CS_Glass%20Bottle%20Perfume%20Mockup-p-800.jpg"
        }
    ];


    return (
        <movingcontext.Provider value={imageObjects}>
            {children}
        </movingcontext.Provider>
    )
}

export default Movingprovider
