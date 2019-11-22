import React from 'react';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';

import Header from './components/frame/Header'
import AllResult from './components/pages/AllResult'

class App extends React.Component {

  COLUMN_SIZE_LEFT: Number = 3;
  COLUMN_SIZE_CENTER: Number = 3;
  COLUMN_SIZE_RIGHT: Number = 3;


  render() {
    return(
    <BrowserRouter>
      <Header/>
      <Container>
        <Row>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    </BrowserRouter >
    );
  }
};

export default App;

