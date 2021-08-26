import React, { Fragment } from "react";
import Head from "next/head";

import Container from "../components/container";

const Index = () => {
  return (
    <Fragment>
      <Container>
        <Head>
          <title>Next JS project - Home</title>
        </Head>
        <h1> Index</h1>
      </Container>
    </Fragment>
  );
};

export default Index;
