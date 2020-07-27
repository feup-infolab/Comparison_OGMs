module.exports = async ({orango}) => {
    const P1_is_identified_by = orango.model('P1_is_identified_by')
    console.log(`✅  Populated "${P1_is_identified_by.collectionName}" collection`.green)

    await P1_is_identified_by.import([
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e42_identifiers/1',
            message: 'P1_is_identified_by edge'
        },
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e42_identifiers/2',
            message: 'P1_is_identified_by edge'
        }
    ])
}
