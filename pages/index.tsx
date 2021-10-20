import React from "react";

import {Button, Heading, Paragraph} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
        <Heading size="h3">Маленький заголовок</Heading>
        <Heading size="h2">Средний заголовок</Heading>
        <Heading size="h1">Большой заголовок</Heading>
        <Button appearance="primary" arrow="right">Кнопка</Button>
        <Button appearance="ghost" arrow="right">Кнопка</Button>
        <Paragraph size="s">Маленький</Paragraph>
        <Paragraph>Средний</Paragraph>
        <Paragraph size="l">Большой</Paragraph>
      </>
  );
}
