
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import MainPage from './components/post/MainPage';
import Profile from './components/profile/Profile';
import './style.scss';

function App() {
  return (
    <div className="relative">
      <div className='fixed z-10 w-full'>
        <Header />
      </div>
      <div className='pt-[56px] flex 4xl:w-[1460px] 4xl:mx-auto'>
        <div className='relative shrink h-screen hidden xl:block basis-80 max-w-xs min-w-64 pl-2           pr-[16px]'>
          <div className="sticky top-[10%]">
              <Profile />
          </div>
          
        </div>
       
        <div className='grow basis-[722px]  flex justify-center'>
          <div className='md:w-[590px] 4xl:w-[680px] max-w-full w-full px-[16px]'>
             <MainPage />
          </div>
         
        </div>
        <div className='relative shrink hidden lg:block h-screen basis-80 max-w-xs min-w-64 px-[16px]'>
          <div className="sticky top-[10%]">
          <Contacts />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
