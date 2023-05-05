import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import Error from './error/error';
import Newsgroup from './newsgroup/newsgroup';
import News from './news/news';
import Contacts from './contacts/contacts';
import RoomsSearch from './main/_search/__rooms.Search/rooms.Search';
import ErrorSearch from './main/_search/__error.Search/error.Search';
import Rooms from './rooms/rooms';
import Redirect from './redirect/redirect';
import './app.scss';

const App = () => {
  return(
  <BrowserRouter>
    <Header /> 
      <main>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<RoomsSearch />} />
            <Route path='/error' element={<ErrorSearch />} />
          </Route>
          <Route path='/newsgroup' element={<Newsgroup />} />
          <Route path='/news/:ID' element={<News />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/nolink' element={<Error />} />
          <Route path='/rooms/:CITY?/:ROOM?/:PRICEFROM?/:PRICEBEFORE?/:BED?/:DISTRICT?/:METRO?' element={<Rooms />} />
          <Route path='/redirect/:CITY?' element={<Redirect />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
    <Footer />
  </BrowserRouter>
  )
}

export default App;