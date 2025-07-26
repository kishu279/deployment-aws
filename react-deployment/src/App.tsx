import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import RootPage from "./routes/root/RootPage";
import LayoutPage from "./routes/root/LayoutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path :- / */}
        <Route element={<LayoutPage />}>
          <Route index element={<RootPage />} />
        </Route>

        {/* path :-  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
