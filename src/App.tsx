import './App.css';
import { Grid } from 'semantic-ui-react'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Grid container stackable>
        <Header />
        <Content />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
