import { type RouteObject, useRoutes, Outlet, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Private from '../components/Private'
import { GuardKey } from '../guards/base';
import useGuard from '../hooks/useGuard';

type GuardedRouteProps = {
  redirectTo?: string;
  guards?: GuardKey[];
};

const GuardedRoute = (props: GuardedRouteProps) => {
  const { redirectTo = '/', guards = [] } = props;
  const canAccess = useGuard(guards);
  return canAccess ? <Outlet /> : <Navigate to={redirectTo} />
};

const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/private',
    element: <GuardedRoute guards={['authGuard', 'something']} redirectTo='/about' />,
    children: [
      {
        index: true,
        element: <Private />
      }
    ],
  },
]

const Router = () => {
  return useRoutes(routes);
}

export default Router