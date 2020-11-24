import React from "react";

import { Container, Grid, Panel, Row, Col, Icon, Button } from "rsuite";

const SignInPage = ({ onFacebookSignIn, onGoogleSignIn }) => {
  return (
    <section className="app">
      <Container>
        <Grid className="mt-page">
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel className="panel__signin">
                <div className="text-center">
                  <h2>MaKuzya</h2>
                  <p>A new way of studying math</p>
                </div>

                <div className="mt-3">
                  <Button block color="blue" onClick={onFacebookSignIn}>
                    <Icon icon="facebook" /> Continue with Facebook
                  </Button>

                  <Button block color="green" onClick={onGoogleSignIn}>
                    <Icon icon="google" /> Continue with Google
                  </Button>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </section>
  );
};

export default SignInPage;
