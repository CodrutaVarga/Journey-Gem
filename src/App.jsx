import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Package from "./components/Package/Package";
import Add from "./components/Add/Add";
import EditDelete from "./components/EditDelete/EditDelete";
import EditDeleteCompleteForm from "./components/EditDeleteCompleteForm/EditDeleteCompleteForm";
import Reserved from "./components/Reserved/Reserved";
import ReservedPage from "./components/ReservedPage/ReservedPage";
import CustomAddUser from "./components/CustomAddUser/CustomAddUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/all-packages" element={<Packages />} />
        <Route path="/package/:id" element={<Package />} />
        <Route path="/add-new-package" element={<Add />} />
        <Route path="/edit-or-delete" element={<EditDelete />} />
        <Route path="reserved-packages" element={<Reserved />} />
        <Route path="/package-reserved/:id" element={<ReservedPage />} />
        <Route path="/add-custom-package" element={<CustomAddUser />} />
        <Route
          path="/edit-or-delete/package/:id"
          element={<EditDeleteCompleteForm />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
