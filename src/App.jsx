import { Routes, Route } from "react-router-dom";
import JobListPage from "./pages/JobListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobListPage />} />
    </Routes>
  );
}

export default App;