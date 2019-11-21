import React from 'react';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';

import Header from './components/frame/Header'
import AllResult from './pages/AllResult'
import CatCarousel from './components/CatCarousel';
import CatCanvas from './components/CatCanvas';

interface IProps {

}

interface IState {
  p: string,
}

class App extends React.Component<IProps, IState> {

  private static readonly COLUMN_SIZE_LEFT: Number = 3;
  private static readonly COLUMN_SIZE_CENTER: Number = 6;
  private static readonly COLUMN_SIZE_RIGHT: Number = 3;

  private static style: React.CSSProperties = {
    margin: '0.5em',
    padding: 0,
  } as React.CSSProperties;

  constructor(_props: IProps) {
    super(_props);
    this.ConsoleParam = this.ConsoleParam.bind(this);

    this.state = {
      p: 'Helloworld',
    }
  }

  public ConsoleParam(): void {
    console.log(this.state.p);
  }

  render() {
    return(
    <BrowserRouter>
      <Header/>
      <Container>
        <Row>
          <Col xs={3}>
              <div style={App.style}></div>
          </Col>
            <Col xs={6}>
              <Row>
                <CatCarousel/>
              </Row>
              <Row>
                <CatCanvas/>
              </Row>
          </Col>
            <Col xs={3}/>
        </Row>
      </Container>
    </BrowserRouter >
    );
  }
};


export default App;

