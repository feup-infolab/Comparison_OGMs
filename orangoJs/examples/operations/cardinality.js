module.exports = async ({orango}) => {
    // get a reference to User model
    const P48_has_preferred_identifier = orango.model('P48_has_preferred_identifier')

    // create query
    let query = P48_has_preferred_identifier.link(
        {E24_physical_human_made_thing: '1', E42_identifier: '1'},
        {message: 'P156_occupies edge'}
    )
        .return(orango.return.one())

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    console.log('rawData'.green, rawData)


    // create query
    let query2 = P48_has_preferred_identifier.link(
        {E24_physical_human_made_thing: '1', E42_identifier: '2'},
        {message: 'P156_occupies edge'}
    )
        .return(orango.return.one())

    // FOR DEMO ONLY - show the AQL
    let aql2 = await query2.toAQL(true)
    console.log(aql2.cyan)

    // exec query
    let rawData2 = await query2.exec()
    console.log('rawData'.green, rawData2)

    console.log("OrangoJs doesn't verify the cardinality of relations".red)


}
