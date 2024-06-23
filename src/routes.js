import { Navigate,  useRoutes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingScreen from './Carregamnetopage';
 
import NotFound from './pages/Page404';
// ----------------------------------------------------------------------


const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};


export default function Router() {

  return useRoutes([
    
    {
      path: '/',
      element: <MainLayout to="/" />,
      children: [
        { path: '/', element: <LandingPage to="/" /> },
        
      ],
    },
    {
      path: '/404',
      element: <NotFound to="/404" />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    }

    
  ]);
}
//home 

const LandingPage = Loadable(lazy(() => import('./pages/LandingPage')));

const MainLayout = Loadable(lazy(() => import('./layouts/main/index')));
