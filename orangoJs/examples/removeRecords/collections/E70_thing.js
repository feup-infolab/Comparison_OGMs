module.exports = async ({ orango }) => {
    const E70_thing = orango.model('E70_thing')
    //console.log(`✅  drop records: "${E70_thing.collectionName}" collection`.green)


    // create query
    let query = E70_thing.remove()
      .where({ _key: '1' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)
}

