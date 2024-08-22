interface FontFamilyInterface {
    fontFamily: string[] | string
}

interface FontSizeInterface {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
    default: string
    button: string
}

interface FontWeightInterface {
    light: number
    neutral: number
    bold: number
}

export interface FontInterface {
    fontFamily: FontFamilyInterface
    fontSize: FontSizeInterface
    fontWeight: FontWeightInterface
}


const fontFamily: FontFamilyInterface = {
    fontFamily: ["Roboto"],
}

const fontSize: FontSizeInterface = {
    h1: 'clamp(6.4rem, 2.6667vw + 5.3333rem, 8rem)',
    h2: 'clamp(3.2rem, 5.3333vw + 1.0667rem, 6.4rem)',
    h3: 'clamp(2.4rem, 1.3333vw + 1.8667rem, 3.2rem)',
    h4: 'clamp(1.6rem, 1.3333vw + 1.0667rem, 2.4rem)',
    h5: 'clamp(1.2rem, .6667vw + .9333rem, 1.6rem)',
    h6: 'clamp(.8rem, .6667vw + .5333rem, 1.2rem)',
    default: 'clamp(.8rem, 1.6667vw + .1333rem, 1.6rem)',
    button: 'clamp(1.2rem, 1.6667vw + .1333rem, 1.6rem)',
}

const fontWeight: FontWeightInterface = {
    light: 300,
    neutral: 400,
    bold: 800
}

export const font: FontInterface = {
    fontFamily,
    fontSize,
    fontWeight
}