import React from "react"
import {graphql,useStaticQuery,Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
export default function Home({data}) {
const dat1 = useStaticQuery(graphql `
query MyQuery {
  allMarkdownRemark (  sort: {fields: frontmatter___postedDate, order: ASC}){
    nodes {
      frontmatter {
        title
        status
        postedDate
        featuredImage
        description
        slug
      }
      html
    }
  }
  allImageSharp {
    nodes {
      gatsbyImageData
    }
  }
}

`)
console.log(dat1)
let posts  = dat1.allMarkdownRemark.nodes;
let images  = dat1.allImageSharp.nodes;
console.log(posts)

  return (
    <div>
      
        {posts.map((post,ind)=>
         (
           <>
           <GatsbyImage image={images[ind].gatsbyImageData} alt={ind} style={
             {width : "10rem",
             height : "10rem" }
           }/>
         <h1>{post.frontmatter.title}</h1>
         <h2>{post.frontmatter.description}</h2>
         <h3>{post.frontmatter.status}</h3>
         <h3>{post.frontmatter.postedDate}</h3>
          <Link to={"/career-details/"+post.frontmatter.slug}>View Details</Link>
         {/* <div dangerouslySetInnerHTML={{__html : post.html}}></div> */}
         <hr/>
         </>
         )
        )}
  
    </div>
  )}
