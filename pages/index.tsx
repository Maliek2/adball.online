import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Byline from '../components/Byline'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (
    <Layout>
      <Head>
        <title>The Mobile Apk</title>
      </Head>
      <h1>The Mobile Apk (AMP-first Page)</h1>
      <Byline author="Maliek Galant" />
      <p className="caption">Slimey Slimey</p>
      
        <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://www.adball.tech/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fhero.308317785705ca80cdcabba1990330ca.png&w=1920&q=75"
      >
        <amp-img
          alt="Mountains"
          fallback=""
          width="550"
          height="368"
          layout="responsive"
          src="https://www.adball.tech/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fhero.308317785705ca80cdcabba1990330ca.png&w=1920&q=75"
        ></amp-img>
      </amp-img>

      

        
    </Layout>
  )
}
