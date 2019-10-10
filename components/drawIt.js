import React from 'react';
import { Button, Form, Row, Col } from 'reactstrap';
import SignatureCanvas from 'react-signature-canvas';

const drawIt = props => {
  return (
    <>
      <Form>
        <Row style={{ marginBottom: '15px' }}>
          <Col>Draw Signature</Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <SignatureCanvas
              ref={props.sigCanvasRef}
              penColor="black"
              backgroundColor="#CCCCCC"
              canvasProps={{
                width: 700,
                height: 150,
                className: 'sigCanvas'
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col>Draw Initials</Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <SignatureCanvas
              ref={props.initialsSigCanvasRef}
              penColor="black"
              backgroundColor="#CCCCCC"
              canvasProps={{
                width: 250,
                height: 150,
                className: 'sigCanvas'
              }}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: '15px' }}>
          <Col>
            <p>
              By clicking Accept and Sign, I agree that the signature wil be the
              electric representation of my signature for all purposewhen I for
              my agend use themon documents. Including legallybinding documnets,
              just the same as pen and paper signature.{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={props.submitDrawSignature}
              color="primary float-right"
            >
              Accept and Sign
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default drawIt;
