import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';


function App() {
  return (

    <>
    <NavBar />
    <ItemListContainer texto= 'hola tutor este es el saludo del desafio,te pido que no mires los colores del nav (tiene el carrito) y footer, son solo orientavtivos jajajaja'/>
    <Footer />
    </>
    

  );
}

export default App;
