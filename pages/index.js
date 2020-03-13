import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"/>
    </Head>
    <div>
      <h1>Welcome to BitzPrice</h1>
    </div>
  </Layout>

);

export default Index;
