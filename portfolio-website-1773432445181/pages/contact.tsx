import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main>
        <h1>Get in touch</h1>
        <p>
          You can reach me at <a href="mailto:example@example.com">example@example.com</a>
        </p>
      </main>
    </>
  );
};

export default Contact;