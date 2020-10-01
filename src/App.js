import './App.css';
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { Recipes } from './components/Recipes';

const App = () => {  
  return (
    <GlobalProvider>
      <div className="App">
        <Title />
        <SearchForm />
        <Recipes />
      </div>
    </GlobalProvider>
  );
}

export default App;
