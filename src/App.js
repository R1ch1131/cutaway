import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Wish } from "./Components/Wish";
import { Connect } from "./Components/Connect";

function App() {
  return (
    <div style={{ background: "#F5F5F5" }}>
      <Header />
      <About />
      <Wish />
      <Connect />
    </div>
  );
}

export default App;
