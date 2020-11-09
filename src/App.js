
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadlineCards from './components/HeadlineCards';
import HeadlineDetails from './components/HeadlineDetails';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadlineCards >
        <HeadlineDetails />
      </HeadlineCards>
    </div>
  );
}

export default App;
