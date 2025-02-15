import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/Mainpage";
import NotFoundPage from "./components/pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
