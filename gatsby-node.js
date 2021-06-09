exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResult = await graphql(`
  query {
    allJsonJson {
      nodes {
        Races {
          Race
        }
      }
    }
  }
  `)
  console.log('Query Results:', queryResult)
  const races = queryResult.data.allJsonJson.nodes[0].Races
  console.log('Races Array:', races)
  var path
  races.forEach((race) => {
    path = `/race/${race.Race.toLowerCase()}`
    actions.createPage({
        path: path,
        component: require.resolve('./src/pages/race.js'),
        context: {slug: path, data: queryResult},
        input: races,
    })
  })
}