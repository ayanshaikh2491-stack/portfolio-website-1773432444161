import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Professional Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to my portfolio website!</h1>
        <p>
          This website showcases my skills and experience as a Full-Stack Developer,
          Security Expert, and DevOps Engineer.
        </p>
        <ul>
          <li>
            <a href="/projects">View my projects</a>
          </li>
          <li>
            <a href="/about">Learn more about me</a>
          </li>
          <li>
            <a href="/contact">Get in touch</a>
          </li>
        </ul>
      </main>
    </>
  );
}