import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import VacancyPage from "./pages/vacancyPage/VacancyPage";
import PageError from "./pages/pageError/PageError";
import Layout from "./pages/layout/Layout";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, errorElement: <PageError /> },
      { path: "about", element: <AboutPage />, errorElement: <PageError /> },
      {
        path: "vacancies/:id",
        element: <VacancyPage />,
        errorElement: <PageError />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
