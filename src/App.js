import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade, Container } from 'reactstrap';
const product = [
  { id: 1, name: 'abc', image: '' }
]

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuData: [] // [{ name: "iPhone", _id: "5cae0d4801e06de0c6399764" }]
    }
  }

  componentDidMount() {
    this.getMenuData()
  }

  async getMenuData() {
    let response = await fetch(
      'http://64.120.114.208:8006/api/product/featured',
    );
    let responseJson = await response.json();
    this.setState({ data: responseJson })
  }

  render() {
    const { responseJson } = this.state
    return (
      <Container>
        <Row className='product-list' style={{ width: 730 }}>
          {
            Array(10).fill('').map((e, i) => {
              return (
                <Col xs="12" sm="6" md="4" className='product-item '>
                  <Card>
                    <CardHeader>
                      Card title
                    </CardHeader>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    )
  }
}

export default App;
