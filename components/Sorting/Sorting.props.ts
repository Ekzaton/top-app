import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SortingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sorting: SortingEnum;
  setSorting: (sorting: SortingEnum) => void;
}

export enum SortingEnum {
  Rating,
  Price,
}
