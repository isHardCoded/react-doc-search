import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Container  sx={{marginTop: 5}} maxWidth='md'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}

export default App
