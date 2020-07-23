module.exports = async ({orango}) => {
    // get a reference to User model
    const P156_occupies = orango.model('P156_occupies')

    // create query
    let query = P156_occupies.link(
        {E24_physical_human_made_thing: '1', E1_crm_entity: '1'},
        {message: 'P156_occupies edge'}
    )
        .return(orango.return.one())

    // FOR DEMO ONLY - show the AQL
    try {
        let aql = await query.toAQL(true)
        console.log(aql.cyan)
    } catch (e) {
        console.log('Error Caught!'.red, e.message)
    }
}

