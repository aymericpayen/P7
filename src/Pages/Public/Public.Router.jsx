import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Apropos, Logement, Error } from "@/Pages/Public/Index";

import Layout from "@/Layouts/Layout";

// fonction de routage des pages publique
const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
// export du sous routage pour le router principal
export default PublicRouter;
