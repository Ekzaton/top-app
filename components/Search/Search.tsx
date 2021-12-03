import cn from "classnames";
import {useRouter} from "next/router";
import {KeyboardEvent, useState} from "react";

import {Button, Input} from "../../components";

import GlassIcon from "./glass.svg";
import styles from "./Search.module.css";
import {SearchProps} from "./Search.props";

export function Search(props: SearchProps): JSX.Element {
  const {className, ...otherProps} = props;

  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      goToSearch();
    }
  };

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    });
  };

  return (
    <div className={cn(className, styles.search)} {...otherProps}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) =>setSearch(e.target.value) }
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.button}
        appearance="primary"
        onClick={goToSearch}
      >
        <GlassIcon/>
      </Button>
    </div>
  );
}
