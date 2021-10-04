import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import BookDetails from './component/BookDetails';
import Footer from './component/Footer';
import Information from './component/Information';
import ThankYou from './component/ThankYou';


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/book-details/:bookId'>
          <BookDetails />
        </Route>
        <Route path='/information'>
          <Information />
        </Route>
        <Route path='/thank-you'>
          <ThankYou />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
