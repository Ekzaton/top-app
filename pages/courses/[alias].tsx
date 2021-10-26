import axios from "axios";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";

import {withLayout} from "../../layout/Layout";
import {MenuItem} from "../../interfaces/menu.interface";
import {PageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
  page: PageModel,
  products: ProductModel[]
}

const firstCategory = 0;

function Course(props: CourseProps): JSX.Element {
  const {products} = props;

  return (
      <>
        {products && products.length}
      </>
  );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  const { data: page } = await axios.get<PageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};
