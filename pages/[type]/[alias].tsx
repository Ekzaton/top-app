import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";

import {firstLevelMenu} from "../../helpers/helpers";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, PageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {withLayout} from "../../layout/Layout";
import {TopPageComponent} from "../../page-components";

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: TopLevelCategory,
  page: PageModel,
  products: ProductModel[]
}

function TopPage(props: TopPageProps): JSX.Element {
  const {firstCategory, page, products} = props;

  return (
    <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });

    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext) => {
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

  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    if (!menu.length) {
      return {
        notFound: true
      };
    }

    const { data: page } = await axios.get<PageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};