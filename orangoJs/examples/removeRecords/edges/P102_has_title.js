module.exports = async ({orango}) => {
    const P102_has_title = orango.model('P102_has_title')
    //console.log(`✅  drop edge: "${P102_has_title.collectionName}" collection`.green)

    // create query
    let query = P102_has_title.remove()
      .where({ _from: 'e24_physical_human_made_things/1',
      _to: 'e35_titles/1'})
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}
