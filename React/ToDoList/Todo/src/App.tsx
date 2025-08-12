import { BrowserRouter, Route, Routes } from "react-router";
import PageComponenet from "./pages/page-componenet";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";

export default function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route>
          <Route />
          <Route element={<LayoutMain/>}>
          <Route index element={<PageHome/>} />
          <Route path="/components" element={<PageComponenet />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}