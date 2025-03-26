import { SVGIcon } from '@progress/kendo-svg-icons';

export interface DrawerItem {
  text?: string;
  svgIcon?: SVGIcon;
  path?: string;
  selected?: boolean;
  separator?: boolean;
}
