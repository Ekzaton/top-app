import React from "react";

import {Button, HTag, PTag} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
        <HTag tag="h1">Текст</HTag>
        <Button appearance="primary" arrow="right">Кнопка</Button>
        <Button appearance="ghost" arrow="right">Кнопка</Button>
        <PTag size="s">Маленький</PTag>
        <PTag>Средний</PTag>
        <PTag size="l">Большой</PTag>
      </>
  );
}
