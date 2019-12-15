import React, { Component } from 'react'
import { Row, Col, Slider, Card, Alert } from 'antd';

export class App extends Component {
  render() {
    return (
      <div className='flex justify-center flex-col items-center'>
        <Row className='container'>
          <Alert message="Success Text" type="success" />
        </Row>
        <Row gutter={[16, 16]} className='container'>
          {Array(10).fill('').map(e => {
            return (
              <Col xl={8} md={8} xs={24} >
                <Card title="Default size card" extra={<a href="#">More</a>}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default App
