import React, { useState, useEffect } from "react";
import { Container, Card, CardColumns, Form } from "react-bootstrap";
import axios from "axios";

const HeadlineCards = () => {
  const [news, setNews] = useState({});
  const [country, setCountry] = useState("us");

  useEffect(() => {
      console.log('rendered');
    async function fetchData() {
      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setNews(response);
    }
    fetchData();
  }, [country]);


  function handleCountryChange(e) {
      setCountry(e.target.value)
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select a country</Form.Label>
          <Form.Control as="select" custom onChange={handleCountryChange}>
            <option value="us">United States</option>
            <option value="ae">united Arab Emirates</option>
            <option value="ar">Argentina</option>
            <option value="at">Austria</option>
            <option value="id">Indonesia</option>
            <option value="kr">South Korea</option>
            <option value="rs">Republic of Serbia</option>
            <option value="sa">Saudi Arabia</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <CardColumns>
        {news?.data?.articles.map((article, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>

              <a href={article.url} target="_blank" rel="noreferrer">
                Read full News
              </a>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
};

export default HeadlineCards;
