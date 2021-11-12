import './App.css';
import Form from './components/Form';
import List from './components/List';
import Product from './components/Product';
import Edit from './components/Edit';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products/:id">
          <Product/>
        </Route>
        
        <Route exact path="/products/edit/:id">
          <Edit/>
        </Route>

        <Route exact path="/products">
          <Form />
          <List />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
