module.exports = async ({orango}) => {
    const P130_shows_feature_of = orango.model('P130_shows_feature_of')
    //console.log(`✅  drop edge: "${P130_shows_feature_of.collectionName}" collection`.green)


    // create query
    let query = P130_shows_feature_of.remove()
      .where({  _from: 'e24_physical_human_made_things/1',
          _to: 'e70_things/1'})
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}
