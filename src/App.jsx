import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div className="bg-dark bg-gradient text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
