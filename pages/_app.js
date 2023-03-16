import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/Home.css'
import '@/styles/coffee.css'
import Layout from '@/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
