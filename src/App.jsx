import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout';
import Home from "./Components/Home";
import Insert from "./Components/Insert";
import Search from "./Components/Search";
import Container from "react-bootstrap/esm/Container";
import Display from "./Components/Display";
import Update from "./Components/Update";
import EditData from "./Components/EditData.jsx";
const App = () =>{
  return(
    <>
      <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="insert" element={<Insert/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="myedit/:id" element={<EditData/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      </Container>
    </>
  )
}
export default App;