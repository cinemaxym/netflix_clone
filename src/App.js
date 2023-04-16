import "./App.css"; //imports App.css 
import Header from "./components/Header"; //imports Header component 
import Billboard from "./components/Billboard"; //imports Billboard component 
import RowContainer from "./components/RowContainer"; //imports RowContainer component 
import Footer from "./components/Footer"; //imports Footer component 
import "bootstrap/dist/css/bootstrap.min.css"; //imports bootstrap.min.css


// App component 
function App(props) {
  return (
    <div className="App">
      <Header/>
      <Billboard /> 
      <RowContainer rowTitle='Trending Now'/>
      <RowContainer rowTitle='My List'/>
      <RowContainer rowTitle='Popular on Netflix'/>
      <RowContainer rowTitle='New Releases'/>
      <Footer />
    </div>
  );
}

export default App;
