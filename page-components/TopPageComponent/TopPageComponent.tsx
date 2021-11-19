import styles from "./TopPagecComponent.module.css";
import {TopPageComponentsProps} from "./TopPageComponent.props";

export function TopPageComponent(props: TopPageComponentsProps): JSX.Element {
  const {firstCategory, page, products} = props;

  return (
      <>
        {products && products.length}
      </>
  );
}
