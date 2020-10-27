module.exports = async ({ orango }) => {
    const E35_title = orango.model('E35_title')
    //console.log(`✅  drop records: "${E35_title.collectionName}" collection`.green)


    // create query
    let query = E35_title.remove()
      .where({ _key: '1' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}
