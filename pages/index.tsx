import React, {useState} from "react";

import {Button, Heading, Paragraph, Rating, Tag} from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
        <Tag size="s">Ghost</Tag>
        <Tag size="m" color="red">Red</Tag>
        <Tag size="s" color="green">Green</Tag>
        <Tag color="primary">Primary</Tag>
        <Rating rating={rating} setRating={setRating} isEditable />
      </>
  );
}
