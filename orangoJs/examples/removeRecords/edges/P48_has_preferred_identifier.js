module.exports = async ({orango}) => {
    const P48_has_preferred_identifier = orango.model('P48_has_preferred_identifier')
    //console.log(`✅  drop edge: "${P48_has_preferred_identifier.collectionName}" collection`.green)

    // create query
    let query = P48_has_preferred_identifier.remove()
      .where({ _from: 'e24_physical_human_made_things/1',
          _to: 'e42_identifiers/1',})
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}

