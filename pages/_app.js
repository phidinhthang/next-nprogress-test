import '../styles/globals.css';
import NProgressContainer from './lib/component';
import Link from 'next/link';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/section'>Section</Link>
      <Link href='/info'>Info</Link>

      <Component {...pageProps} />
      <NProgressContainer />
    </>
  );
}

export default MyApp;
