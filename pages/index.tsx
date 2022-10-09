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
      
      

        
    </Layout>
  )
}
