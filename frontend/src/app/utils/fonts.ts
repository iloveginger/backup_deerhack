import localFont from "next/font/local";


const cabinetLight = localFont({
    src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Light.woff2",
    variable: "--font-cabinet-light",
})

const cabinetBold = localFont({
    src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Bold.woff2"
})

const satoshiRegular = localFont({
    src: "../assets/fonts/satoshi/Satoshi-Regular.woff2"
})


export {cabinetLight, cabinetBold, satoshiRegular}