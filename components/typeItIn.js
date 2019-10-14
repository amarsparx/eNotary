import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const typeItIn = props => {
  const fontFamily = [
    'Dancing Script',
    'Pacifico',
    'Cookie',
    'Cedarville Cursive',
    'Homemade Apple',
    'Damion'
  ];

  return (
    <>
      <Row>
        <Col sm="12">
          <h2 className="text-center" style={{ marginBottom: '30px' }}>
            Create your Signature
          </h2>
        </Col>
      </Row>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit();
        }}
      >
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <FormGroup>
              <Label for="confirm-name" style={{ marginBottom: '15px' }}>
                Confirm your name
              </Label>
              <Input
                type="text"
                name="name"
                id="confirm-name"
                placeholder="Confirm your name"
                onChange={event => props.nameChangeHandler(event)}
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label for="confirm-initials" style={{ marginBottom: '15px' }}>
                Confirm your initials
              </Label>
              <Input
                type="text"
                name="initials"
                id="confirm-initials"
                placeholder="Confirm your initials"
                onChange={event => props.initialsNameChangeHandler(event)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label for="confirm-name" style={{ marginBottom: '15px' }}>
              Preview
            </Label>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col>
            <FormGroup>
              <span
                style={{
                  border: '12px solid #CCCCCC',
                  background: '#ffffff',
                  padding: '8px 15px',
                  display: 'block',
                  fontWeight: 'bolder',
                  fontSize: '50px',
                  minHeight: '132px',
                  textAlign: 'center',
                  fontFamily: `${props.nameFont}`
                }}
                className="name-preview"
              >
                {props.name}
              </span>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <span
                style={{
                  border: '12px solid #CCCCCC',
                  background: '#ffffff',
                  padding: '8px 15px',
                  display: 'inline-block',
                  fontWeight: 'bolder',
                  fontSize: '50px',
                  minHeight: '132px',
                  minWidth: '200px',
                  textAlign: 'center',
                  fontFamily: `${props.nameFont}`
                }}
                className="initials-preview"
              >
                {props.initialsName}
              </span>
            </FormGroup>
          </Col>
        </Row>

        <Row style={{ marginBottom: '30px' }}>
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
            <FormGroup style={{ display: 'flex' }}>
              <Label
                for="change-font"
                style={{ flex: 3, marginBottom: '15px' }}
              >
                Change Font:
              </Label>
              <select
                className="form-control"
                style={{ flex: 9 }}
                id="change-font"
                onChange={event => props.changeFontHandler(event)}
              >
                {fontFamily.map(fontName => {
                  return (
                    <option key={fontName} value={fontName + ',cursive'}>
                      {fontName}
                    </option>
                  );
                })}
              </select>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Button
                type="submit"
                className="btn btn-lg btn-primary col-lg-12"
                style={{ float: 'right', padding: '0px 10px' }}
              >
                Accept and Sign
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default typeItIn;
