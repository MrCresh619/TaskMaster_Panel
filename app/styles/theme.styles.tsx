import { colors, ColorsInterface } from './default/colors.styles';
import { font, FontInterface} from './default/fonts.styles';
import { space, SpaceInterface } from './default/space.styles';

interface ThemeInterface {
    colors: ColorsInterface
    font: FontInterface,
    space: SpaceInterface
}

export const theme: ThemeInterface = {
 colors,
 font,
 space
};