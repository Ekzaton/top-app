import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import close from "./icons/close.svg";
import menu from "./icons/menu.svg";
import up from "./icons/up.svg";

export const icons = {
  close,
  menu,
  up,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "white";
  icon: IconName;
}
