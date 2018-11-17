import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image' 

const IndexPage = () => (
  <Layout>
    <div>
    <h1>Power to create anything</h1>
    <p>We are global branding agency helping compnaies to communicate through vision and imagination</p> 
    <Link to="/page-2/">Watch the video</Link>
    </div>
    </Layout>    
)

export default IndexPage
