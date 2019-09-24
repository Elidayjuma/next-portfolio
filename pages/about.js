import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import {Component} from 'react';
import Error from './_error';

class About extends Component {

    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/elidayjuma');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
    
        return{user: data, statusCode};    
    }

    // componentDidMount(){
    //     fetch('https://api.github.com/users/elidayjuma')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             });
    //         });
    // }
    render() {
        const {user, statusCode} = this.props; 

        if (statusCode){
            return <Error statusCode={statusCode}/>;
        }
        return (
            <Layout title="About">
                <p>{user.bio}</p>
                <img 
                    src={user.avatar_url}
                    alt="Eliday Juma" 
                    height="200px"/>
            </Layout>
        );
    }
}
 
export default About;