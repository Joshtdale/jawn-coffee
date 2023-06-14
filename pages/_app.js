import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/Footer.css'
import '@/styles/Home.css'
import '@/styles/Section.css'
import '@/styles/About.css'
import '@/styles/Booking.css'
import '@/styles/Spinner.css'
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
