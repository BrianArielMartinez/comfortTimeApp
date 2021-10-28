import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "components/NavBar/NavBar";
import  ItemListContainer  from "components/ItemListContainer/ItemListContainer";



function App(){
  return(
    <div>
      <NavBar/>
      <ItemListContainer productos="Hola, acá irian los productos">
      </ItemListContainer>
    </div>
  );
}

export default App;
