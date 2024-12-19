import Script from 'next/script';
import "../styles/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        defer
        data-domain="profile-enieber.vercel.app"
        src="https://analytics.pop.coop/js/script.js"
      />
      <Component {...pageProps} />
    </>
  );
}
