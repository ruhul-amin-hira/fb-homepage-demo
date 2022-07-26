
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import MainPage from './components/post/MainPage';
import Profile from './components/profile/Profile';
import './style.scss';

function App() {
  return (
    <div className="relative">
      <div className='fixed bg-blue-400 w-full'>
        <Header />
      </div>
      <div className='pt-10 flex'>
        <div className='relative shrink bg-blue-600 h-screen hidden lg:block basis-80 max-w-xs min-w-64'>
          <div className="fixed">
              <Profile />
          </div>
          
        </div>
       
        <div className='grow basis-[722px] bg-green-300'>
          <MainPage />
        </div>
        <div className='relative shrink bg-slate-500 h-screen basis-80 max-w-xs min-w-64'>
          <div className="fixed">
          <Contacts />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
