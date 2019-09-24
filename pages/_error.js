import Layout from '../components/Layout';

export default ({statusCode}) => (
   <Layout title="Error!!"> 
        {statusCode ? `Could not load data from Github: Status code ${statusCode}` : `Couldn't get that page. Sorry!`}
   </Layout>
)