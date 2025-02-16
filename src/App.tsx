import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./pages/main/Main";

const router = createBrowserRouter([{ path: "/", element: <Main /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
