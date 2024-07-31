import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { ProfileProvider } from "./contexts/ProfileContext";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import AddProfile from "./components/Profile/AddProfile";
import EditProfile from "./components/Profile/EditProfile";
import DeleteProfile from "./components/Profile/DeleteProfile";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/addProfile" element={<AddProfile />} />
        {/* <Route path="/admin/editProfile" element={} /> */}
        <Route path="/admin/editProfile/:id" element={<EditProfile />} />
        <Route path="/admin/deleteProfile/:id" element={<DeleteProfile />} />
        <Route path="/ProfileDetails/:id" element={<ProfileDetails />} />
      </Routes>
    </>
  );
}

export default App;
