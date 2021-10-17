import React from "react";
import {Button, HTag} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
        <HTag tag="h1">Текст</HTag>
        <Button appearance="ghost">Кнопка</Button>
      </>
  );
}
