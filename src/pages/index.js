import React from "react"
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Servies';
import { Link } from 'gatsby';
export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="continue exploring" info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nesciunt.">
          <Link className="btn-white" to='/tours'>explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
