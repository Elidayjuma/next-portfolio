import Link from 'next/link';
const About = () =>(
    <div>
        <h1>About</h1>
        <Link href="/">
            <a>Home</a>
        </Link>
        <p>This is the about page</p>
        <img src="/static/js.png" alt="js logo" height="200px"></img>
    </div>
);
export default About;