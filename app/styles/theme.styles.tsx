import { brakpoint, BreakepointInterface } from './default/breakpoints';
import { colors, ColorsInterface, contrastContainer, opacityColor } from './default/colors.styles';
import { font, FontInterface} from './default/fonts.styles';
import { space, SpaceInterface } from './default/space.styles';

export type Theme = {
    colors: ColorsInterface,
    font: FontInterface,
    space: SpaceInterface,
    brakpoint: BreakepointInterface,
    opacity: (color: string, opacity: number) => string
    contrastContainer: () => unknown
}

export const theme: Theme = {
 colors,
 font,
 space,
 brakpoint,
 opacity: opacityColor,
 contrastContainer: contrastContainer
};