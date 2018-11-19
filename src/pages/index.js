import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image' 

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Power to <br/>create anything</h1>
          <p>We are global branding agency helping companies to communicate through vision and imagination</p> 
          <Link to="/page-2/">Watch the video</Link>
        </div>
      </div>
    
    </div>
      </Layout>
)

export default IndexPage
