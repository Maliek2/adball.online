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
        <title>The Mobile App</title>
      </Head>

      <h1>The Mobile App</h1>
      <Byline author="Maliek Galant" />
      <p className="caption">Slime</p>
      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://amp.dev/static/inline-examples/images/mountains.webp"
      >
        <amp-img
          alt="Mountains"
          fallback=""
          width="550"
          height="368"
          layout="responsive"
          src="   "
        ></amp-img>
      </amp-img>
      <p>
        Cat ipsum dolor <a href={isAmp ? '/app?amp=1' : '/app'}>Login App</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner. Chirp at birds chew foot chase the pig around the house and
        meoooow!. Chase ball of string climb a tree, wait for a fireman jump to
        fireman then scratch his face claw drapes, for meow to be let in yet
        attack dog, run away and pretend to be victim meow loudly just to annoy
        owners. Touch water with paw then recoil in horror hide when guests come
        over, and tuxedo cats always looking dapper so has closed eyes but still
        sees you or a nice warm laptop for me to sit on pee in human's bed until
        he cleans the litter box. Steal the warm chair right after you get up
        cat not kitten around yet claws in your leg eat all the power cords.
        
      </p>
      
      
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
