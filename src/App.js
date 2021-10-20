import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../src/components/NavBar/NavBar";
import { ItemListContainer } from "../src/components/ItemListContainer/ItemListContainer";


function App(){
  return(
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
