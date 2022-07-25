
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import MainPage from './components/post/MainPage';
import Profile from './components/profile/Profile';
import './style.scss';

function App() {
  return (
    <div className="relative">
      <div className='fixed bg-blue-400'>
        <Header />
      </div>
      <div>
        <div>
          <Profile />
        </div>
        <div>
          <MainPage />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
