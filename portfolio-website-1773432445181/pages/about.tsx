import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About me</h1>
        <p>
          I am a Full-Stack Developer, Security Expert, and DevOps Engineer with
          experience in building scalable and secure applications.
        </p>
        <ul>
          <li>
            <a href="/projects">View my projects</a>
          </li>
          <li>
            <a href="/contact">Get in touch</a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default About;