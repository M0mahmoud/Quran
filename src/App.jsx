import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
