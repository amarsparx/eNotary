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
import PropTypes from 'prop-types';

import TypeItIn from './typeItIn';
import DrawIt from './drawIt';

class Signature extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool
  };

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
      nameFont: 'Dancing Script, cursive'
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
        font: this.state.nameFont
      },
      initials: {
        text: this.state.initialsName,
        font: this.state.nameFont
      }
    };
    return payloadData;
    // console.log('[TYPE IN DATA PAYLOAD]', payloadData);
  };

  submitDrawSignature = () => {
    try {
      const sigCanvas = this.sigCanvas.current.toDataURL();
      const initialsSigCanvas = this.initialsSigCanvas.current.toDataURL();
      const payloadData = {
        signature: sigCanvas,
        initials: initialsSigCanvas
      };
      this.sigCanvas.current.clear();
      this.initialsSigCanvas.current.clear();
      return payloadData;
    } catch (err) {
      console.error('error caught', err);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3" style={{ marginTop: '77px' }}>
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
                  onSubmit={() => this.props.onSubmit(this.submitTypeInData())}
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
                  onSubmit={() =>
                    this.props.onSubmit(this.submitDrawSignature())
                  }
                  // onSubmit={this.submitDrawSignature}
                />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signature;
