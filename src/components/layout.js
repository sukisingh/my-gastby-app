import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: {fields: [createdAt], order: ASC }){
          edges{
            node{
               title
               url
               createdAt
                }
              }
         }
      }
      
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 
            data.site.siteMetadata.description },
            { name: 'keywords', content: 
            data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <Header />
          {children}
         
          <Footer data={data}>
              <a href="mailto:abc@xyz.com">Email us</a> to ask anything.
              Copyright © 2018 TS. All rights reserved. 
          </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
