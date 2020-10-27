module.exports = async ({ orango }) => {
    const E1_crm_entity = orango.model('E1_crm_entity')
    //console.log(`✅  drop records: "${E1_crm_entity.collectionName}" collection`.green)


    // create query
    let query = E1_crm_entity.remove()
      .where({ _key: '1' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    //console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    //console.log('rawData'.green, rawData)

}

