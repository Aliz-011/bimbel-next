import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team Page</title>
        <meta name="description" content="teamp page of the website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Team dataPerPage={'All'} />
    </>
  );
};

export default TeamPage;

TeamPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
