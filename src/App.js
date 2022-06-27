import Nav from "./Component/Nav";
import JudulHalaman from "./Component/JudulHalaman";
import Menu from "./Menu/menu";
import Keranjang from "./Keranjang/keranjang";

function App() {


  return (
    <div id="container" className="d-flex">
      <nav className={(window.innerWidth < 768) ? "d-none" : undefined}>
        <Nav />
      </nav>
      <main>
          <JudulHalaman judul="Bakso Cuyy"/>
          <Keranjang />

      </main>
    </div>
  );
}

export default App;
