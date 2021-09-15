 path = require("path")
exports.createPages = async ({graphql,actions}) =>{
    const {data} = await graphql(`
query Generate {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}

  `)
  data.allMarkdownRemark.nodes.forEach(element => {
      actions.createPage({
          path: "/career-details/"+element.frontmatter.slug,
          component: path.resolve("./src/templates/career-details.js"),
          context:  {slug : element.frontmatter.slug}
      })
  });
}