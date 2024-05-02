import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Patches from "./pages/patches";
import UsefSettings from "./pages/user-settings";
import PatcheUsers from "./pages/patche-users";
import UserPatient from "./pages/user-patient";
import UserCustomPatient from "./pages/user-custom-patient";
import Login from "./pages/admin/login";
import Root from "./pages/admin/root";

function RoutesProvider() {
  const navigate = useNavigate();
  const CheckURL = () => {
    if (
      window.location.href &&
      window.location.href?.split("/")?.length &&
      window.location.href?.split("/")?.filter((item) => item) &&
      window.location.href?.split("/")?.filter((item) => item) &&
      window.location.href?.split("/")?.filter((item) => item)[2] === "admin" &&
      !window.location.href?.split("/")?.filter((item) => item)[3]
    ) {
      navigate(`/admin/1`);
    }
  };

  useEffect(() => {
    CheckURL();
  });

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Patches />} />
        <Route path="/patches" element={<Patches />} />
        <Route path="/patient/:userId" element={<UserPatient />} />
        <Route path="/patient/:userId/custom" element={<UserCustomPatient />} />
        <Route path="/:patcheId/users" element={<PatcheUsers />} />
        <Route path="/user/settings" element={<UsefSettings />} />
        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/:activePage" element={<Root />} />
        <Route path="/admin/:activePage/:activeRoute" element={<Root />} />

        {/* not found page */}
        <Route path="*" element={<h2> Not Found Page </h2>} />
      </Routes>
    </div>
  );
}

export default RoutesProvider;
