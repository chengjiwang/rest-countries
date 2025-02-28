import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./pages/main";
import theme from "./theme";

const router = createBrowserRouter([{ path: "/", element: <Main /> }]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
