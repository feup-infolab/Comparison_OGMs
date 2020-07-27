module.exports = async ({orango}) => {
    // get a reference to User model
    const E1_crm_entity = orango.model('E1_crm_entity')

    // create query
    let query = E1_crm_entity.insert({}).return(orango.return.one())

    // FOR DEMO ONLY - show the raw query data
    try {
        let aql = await query.toAQL(true)
        console.log(aql.cyan)
    } catch (e) {
        console.log('Error Caught!'.red, e.message)
    }
}
