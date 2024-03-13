import { Button, Container } from "@mui/material";
import "./App.css";
import Index from "./Components/Input/Index";

function App(event) {
  const handle = () =>{
    if()
  }
  return (
    <>
      <Container>
        <form>
          <Index
            label="First Name"
            type="text"
          ></Index>
          <Index
            label="Last Name"
            type="password"
          ></Index>
          <Index
            label="E-mail"
            type="e-mail"
          ></Index>
          <Button variant="contained" sx={{ mx: 1, my: 3 }} onClick={handle}>Text</Button>
        </form>
      </Container>
    </>
  );
}

export default App;
