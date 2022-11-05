import '../styles/globals.css'
import {Open_Sans, Roboto} from '@next/font/google';

const usingFont = Open_Sans();
/*const usingFont = Roboto({
  weight: '400'
});*/
function MyApp({ Component, pageProps }) {
  return (
    <main className={usingFont.className}>
      <Component {...pageProps} />
  </main>
  );  
}

export default MyApp
