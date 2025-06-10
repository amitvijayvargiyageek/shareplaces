import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import RootComponent from './RootComponent';
import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
    const { token, login, logout, userId } = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      Component: RootComponent,
      errorElement: <p>404 Page Not Found</p>,
      children: [
        { path: '/', Component: Users },
        { path: '/:userId/places', Component: UserPlaces },
        ...(
          token 
            ? [
                { path: '/places/new', Component: NewPlace },
                { path: '/places/:placeId', Component: UpdatePlace }
              ]
            : [
                { path: '/auth', Component: Auth }
              ]
        )
      ]
    }
  ]);

  return (
    <AuthContext.Provider value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;