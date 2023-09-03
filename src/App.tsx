import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header title='My first page title' />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
