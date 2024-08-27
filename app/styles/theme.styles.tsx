import { colors, ColorsInterface } from './default/colors.styles';
import { font, FontInterface} from './default/fonts.styles';
import { space, SpaceInterface } from './default/space.styles';

export type Theme = {
    colors: ColorsInterface,
    font: FontInterface,
    space: SpaceInterface
}

export const theme: Theme = {
 colors,
 font,
 space
};