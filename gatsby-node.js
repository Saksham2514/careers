 path = require("path")
exports.createPages = async ({graphql,actions}) =>{
    const {data} = await graphql(`
query Generate {
  allMarkdownRemark {
    nodes {
      frontmatter{
        slug
      }

    }
  }
  allImageSharp {
    nodes {
      id
    }
  }
}

  `)
  
  data.allMarkdownRemark.nodes.forEach((element,ind) => {
      actions.createPage({
          path: "/career-details/"+element.frontmatter.slug,
          component: path.resolve("./src/templates/career-details.js"),
          context:  {slug : element.frontmatter.slug , id : data.allImageSharp.nodes[ind].id}
        })
        
  });
}