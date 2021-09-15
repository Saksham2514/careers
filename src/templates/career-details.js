import React from "react"
import {graphql,useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


export default function careerDetails({data}) {
    
    console.log(data)
     let posts  =data.markdownRemark;
    // let images  = data.allImageSharp.nodes;
    // console.log(posts)
    return (
        <div>
            <GatsbyImage image={data.imageSharp.gatsbyImageData} alt={posts.frontmatter.slug}/>
            <div dangerouslySetInnerHTML={{__html : posts.html}}></div>
        </div>
    )
}
export const query = graphql `
query DetailsQuery($eq: String) {
  imageSharp {
    gatsbyImageData
  }
  markdownRemark(frontmatter: {slug: {eq: $eq}}) {
    html
    frontmatter {
      title
      slug
    }
  }
}
`