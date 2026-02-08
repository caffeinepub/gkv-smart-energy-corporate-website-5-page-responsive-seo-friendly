import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import CalculatorPage from './pages/CalculatorPage';
import SubsidiesPage from './pages/SubsidiesPage';
import HowItWorksPage from './pages/HowItWorksPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$serviceSlug',
  component: ServiceDetailPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/calculator',
  component: CalculatorPage,
});

const subsidiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/subsidies',
  component: SubsidiesPage,
});

const howItWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/how-it-works',
  component: HowItWorksPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  serviceDetailRoute,
  projectsRoute,
  contactRoute,
  calculatorRoute,
  subsidiesRoute,
  howItWorksRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
