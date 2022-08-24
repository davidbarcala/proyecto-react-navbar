import './App.css';
import Footer from './components/footer';
import Main from './components/main';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';


function App() {
  return (

    <>
    <NavBar />
    <ItemListContainer texto= 'hola tutor'/>
    <Footer />
    </>
    

  );
}

export default App;
