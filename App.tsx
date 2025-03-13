import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";


const App : React.FC =()=>{
return<>
<Routes>
  <Route path="/form" element={<Form/>}></Route>
  
  <Route path="/display" element={<Display/>}></Route>

</Routes>


</>
}

export default App