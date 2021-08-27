import React, { Fragment } from "react";
import Head from "next/head";
import fetch from 'isomorphic-fetch';

import Container from "../components/container";
import Users from '../components/users';

const Index = (props) => {
  
  return (
    <Fragment>
      <Container>
        <Head>
          <title>Next JS project - Home</title>
        </Head>
        <h1> Next</h1>
        <Users users = {props.users}/>
      </Container>
    </Fragment>
  );
};
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
        return {users: resJSON.data}

}

export default Index;
