import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}> 
    <div >
      <Head/>
      <RouterProvider router={appRouter} />
      {/*
      *header
      *body
      *sideBar
        -menuList
      *mainContainer
         -buttonList
         -videoContainer
         -videoCard
         

      */}
     
    </div>
    </Provider>

  );
}

export default App;
