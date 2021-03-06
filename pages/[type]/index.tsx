import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import { ParsedUrlQuery } from "querystring";

import {API} from "../../api/api";
import {withLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {firstLevelMenu} from "../../helpers/helpers";

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}

function Type(props: TypeProps): JSX.Element {
  const {firstCategory} = props;

  return (
      <>Type: {firstCategory}</>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(m => "/" + m.route),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};
