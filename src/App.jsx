import React, { Suspense, lazy, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import UserContext from "./utils/contexts/userContext.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import InstaMart from "./pages/Instamart.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./components/ProfileClass.jsx";
import store from "./utils/store/store.js";
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const MainContent = lazy(() => import("./pages/MainContent.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const RestaurantMenu = lazy(() => import("./pages/RestaurantMenu.jsx"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Dummy",
    email: "dummy@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <MainContent />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <AboutPage />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<div>Component1 are loading please wait...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
