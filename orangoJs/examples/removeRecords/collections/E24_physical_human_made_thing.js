module.exports = async ({ orango }) => {
    const E24_physical_human_made_thing = orango.model('E24_physical_human_made_thing')
    //console.log(`✅  drop records: "${E24_physical_human_made_thing.collectionName}" collection`.green)


    // create query
    let query = E24_physical_human_made_thing.remove()
      .where({ _key: '1' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}

