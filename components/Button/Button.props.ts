import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

type OmittedProps = "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref";

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    OmittedProps> {
    appearance: "primary" | "ghost";
    arrow?: "right" | "down" | "none";
    children: ReactNode;
}
