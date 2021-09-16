import React from "react"
import {graphql,useStaticQuery,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export default function Home({data}) {
const dat1 = useStaticQuery(graphql `
query MyQuery {
   allMarkdownRemark(sort: {fields: frontmatter___postedDate, order: DESC}) {
    nodes {
      frontmatter {
        title
        status
        postedDate
        description
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
}

`)
console.log(dat1)
let posts  = dat1.allMarkdownRemark.nodes;

console.log(posts)

  return (
    <div>
      
      {posts.map((post,ind)=>{
          let d = post.frontmatter;
          return (
            <>
            <GatsbyImage image={d.featuredImage.childImageSharp.gatsbyImageData} alt={ind} style={
             {width : "10rem",
             height : "10rem" }
            }/>
            <h1>{d.title}</h1>
            <h2>{d.description}</h2>
            <h3>{d.status}</h3>
            <h3>{d.postedDate}</h3>
              <Link to={"/career-details/"+d.slug}>View Details</Link>
            {/* <div dangerouslySetInnerHTML={{__html : post.html}}></div> */}
            <hr/>
            </>
          )
          })}
    </div>
      )}
