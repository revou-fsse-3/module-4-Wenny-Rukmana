import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegisterPages, CategoryContainer, LoginPage } from "./pages";
import ProtectLayout from "./layout/protectLayout";
import PublicLayout from "./layout/publicLayout";
import CreateCategory from "./pages/createList";
import MultiStepForm from "./pages/module4/registration-form";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <RegisterPages />,
        },
        {
          path: "/loginpages",
          element: <LoginPage />,
        },
        {
          path: "/module4",
          element: <MultiStepForm />,
        },
      ],
    },
    {
      element: <ProtectLayout />,
      children: [
        {
          path: "/category",
          element: <CategoryContainer />,
        },
        {
          path: "/create-category",
          element: <CreateCategory />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>ERROR 404</h1>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
