import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAffichage from "./formuler/listanimal";
import Formulaire from "./formuler/page1";
import Updatepage from "./formuler/updatepage";
 function App(){
  return(
    <>
    <BrowserRouter>
          <Routes>
              <Route path="/Listanimal" element={<PageAffichage />} />
              <Route path="/" element={<Formulaire />} />
              <Route path="/Update/:id" element={<Updatepage />} />

          </Routes>
      </BrowserRouter> 
         </>
  )
}
export default App
