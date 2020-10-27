module.exports = async ({orango}) => {
    const P156_occupies = orango.model('P156_occupies')
    //console.log(`✅  drop edge: "${P156_occupies.collectionName}" collection`.green)


    // create query
    let query = P156_occupies.remove()
      .where({  _from: 'e24_physical_human_made_things/1',
          _to: 'e53_places/1'})
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}
