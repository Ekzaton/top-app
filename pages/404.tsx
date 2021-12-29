import { Heading } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): JSX.Element {
  return (
      <>
        <Heading size='h1'>Ошибка 404</Heading>
      </>
  );
}

export default withLayout(Error404);
