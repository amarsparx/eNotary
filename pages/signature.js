import React from 'react';
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import classnames from 'classnames';
import Head from 'next/head';

import TypeItIn from '../components/typeItIn';
import DrawIt from '../components/drawIt';

class Signature extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = Object.freeze({
      TYPE_IN_IT: Symbol('type-it-in'),
      DRAW_IT: Symbol('draw-it')
    });
    this.sigCanvas = React.createRef();
    this.initialsSigCanvas = React.createRef();
    this.state = {
      activeTab: this.tabs.TYPE_IN_IT,
      name: '',
      initialsName: '',
      nameFont: 'Permanent Marker, cursive'
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  nameChangeHandler = event => {
    this.setState({ name: event.target.value });
  };

  initialsNameChangeHandler = event => {
    this.setState({ initialsName: event.target.value });
  };

  changeFontHandler = event => {
    this.setState({ nameFont: event.target.value });
  };

  submitTypeInData = () => {
    const payloadData = {
      signature: {
        text: this.state.name,
        fontName: this.state.nameFont
      },
      initialsSignature: {
        text: this.state.initialsName,
        fontName: this.state.nameFont
      }
    };
    console.log('[TYPE IN DATA PAYLOAD]', payloadData);
  };

  submitDrawSignature = () => {
    const sigCanvas = this.sigCanvas.current.toDataURL();
    const initialsSigCanvas = this.initialsSigCanvas.current.toDataURL();
    const payloadData = {
      signature: sigCanvas,
      initials: initialsSigCanvas
    };
    console.log('[DRAW SIGNATURE PAYLOAD]', payloadData);
  };

  render() {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Cookie|Courgette|Dancing+Script|Gloria+Hallelujah|Great+Vibes|Kaushan+Script|Liu+Jian+Mao+Cao|Long+Cang|Mansalva|Pacifico|Permanent+Marker|Sacramento|Satisfy|Shadows+Into+Light|Zhi+Mang+Xing%26display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        </Head>

        <Container>
          <Row>
            <Col xs="3">
              <ListGroup>
                <ListGroupItem
                  className={classnames({
                    active: this.state.activeTab === this.tabs.TYPE_IN_IT
                  })}
                  onClick={() => {
                    this.toggle(this.tabs.TYPE_IN_IT);
                  }}
                  tag="button"
                >
                  Type it in
                </ListGroupItem>
                <ListGroupItem
                  tag="button"
                  className={classnames({
                    active: this.state.activeTab === this.tabs.DRAW_IT
                  })}
                  onClick={() => {
                    this.toggle(this.tabs.DRAW_IT);
                  }}
                >
                  Draw It
                </ListGroupItem>
              </ListGroup>
            </Col>

            {/* Tab Content column */}
            <Col>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId={this.tabs.TYPE_IN_IT}>
                  <TypeItIn
                    nameChangeHandler={this.nameChangeHandler}
                    initialsNameChangeHandler={this.initialsNameChangeHandler}
                    changeFontHandler={this.changeFontHandler}
                    nameFont={this.state.nameFont}
                    name={this.state.name}
                    initialsName={this.state.initialsName}
                    submitTypeInData={this.submitTypeInData}
                  />
                </TabPane>
                <TabPane tabId={this.tabs.DRAW_IT}>
                  <Row style={{ marginBottom: '30px' }}>
                    <Col sm="12">
                      <h2 className="text-center">Create your Signature</h2>
                    </Col>
                  </Row>
                  <DrawIt
                    sigCanvasRef={this.sigCanvas}
                    initialsSigCanvasRef={this.initialsSigCanvas}
                    submitDrawSignature={this.submitDrawSignature}
                  />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Signature;
