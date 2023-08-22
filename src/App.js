import Foto from "./components/foto";
import Logo from "./components/img/farmlogo.jpg"
import Menu from "./components/menu";
import Body from "./components/body";
import Linha from "./components/linha";

function App(props) {
  return (
    <>
    <Linha></Linha>
    <Foto foto={Logo} tamanho="13%" altura="42px"></Foto>
    <Menu></Menu>
    <Body></Body>
    <Linha></Linha>
    </>
  );
}
export default App;
