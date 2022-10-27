import { Button, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [ fact, setFact ] = useState("Click on a button below to generate a fact!")
  const [ loading, setLoading ] = useState(false)

  const fetchFact = () => {
    
    setLoading(true)

    fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
      headers: {
        'X-Api-Key': 'oM84kvQyt09uJGtEn3M+zw==gODiahYy24DNaXSV'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setFact(data[0].fact)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="bg-light" 
      style={{ 
        width: "100vw",
        height: "100vh"
    }}>
      <Card className="position-absolute top-50 start-50 translate-middle text-center" 
        style={{
          width: "75vw",
          height: "auto"
        }}>
        <Card.Body>
          <Card.Title className="mb-5">Fun Fact</Card.Title>
          <Card.Body className="mb-5">
            { loading ? <Spinner animation="border"></Spinner> : fact}
          </Card.Body>
          <Button onClick={fetchFact} variant="primary">Generate a fact</Button>
        </Card.Body>
      </Card>
      <p className="position-absolute bottom-0 start-50 translate-middle text-center">Made by Karlo Šimunec</p>
    </div>
  );
}

export default App;
