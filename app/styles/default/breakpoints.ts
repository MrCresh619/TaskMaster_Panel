export interface BreakepointInterface {
mobile: string
tablet: string
desktop: string
}

export const brakpoint: BreakepointInterface = {
    mobile: '@media (max-width: 640px)',
    tablet: '@media (max-width: 980px)',
    desktop: '@media (max-width: 1260px)',
}