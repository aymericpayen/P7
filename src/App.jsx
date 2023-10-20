import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRouter from "@/Pages/Public/Public.Router.jsx";

// création du routage principal.
const App = () => {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// export de la fonction app pour appel dans l'index.
export default App;
