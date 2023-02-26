import type { RootState } from './store';
import { useSelector } from 'react-redux';
import PageBasic from '../templates/page.Basic/app';
import PagesLogin from '../templates/page.Login/app';
import PageRegister from '../templates/page.Register/app';

const Page = () => {

  const pageLoading = useSelector((state: RootState) => state.page.pageLoading);

  return (
    <>
      {
        (pageLoading === 'pageBasic') ? <PageBasic /> : 
        (pageLoading === 'pageLogin') ? <PagesLogin /> :
        <PageRegister />
      }
    </>
  )
}

export default Page;
