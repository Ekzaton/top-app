import cn from "classnames";

import styles from "./Paragraph.module.css";
import {ProductProps} from "./Product.props";

export function Product(props: ProductProps): JSX.Element {
  const { className, product, ...otherProps} = props;

  return (
    <div>
      {product.title}
    </div>
  );
}
