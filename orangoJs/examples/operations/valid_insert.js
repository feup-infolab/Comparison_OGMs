module.exports = async ({ orango }) => {
    // get a reference to User model
    const E1_crm_entity = orango.model('E1_crm_entity')

    // create query
    let query = E1_crm_entity.insert({
        name:"entity's name",
    }).return(orango.return.one())

    // FOR DEMO ONLY - show the raw query data
    let queryData = JSON.stringify(query)
    console.log(queryData.green)

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    console.log('rawData'.green, rawData)

    // convert data to model
    let user = E1_crm_entity.fromJSON(rawData)
    console.log('modelData'.green, user)
}
