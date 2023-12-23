import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <Card
      children={
        <>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://netology.ru/" className="btn btn-primary">Go somewhere</a>
        </>
      }
      src="https://placehold.co/286x200"
    />
  );
}

export default App;
