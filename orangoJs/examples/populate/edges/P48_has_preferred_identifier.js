module.exports = async ({orango}) => {
    const P48_has_preferred_identifier = orango.model('P48_has_preferred_identifier')
    console.log(`✅  Populated "${P48_has_preferred_identifier.collectionName}" collection`.green)

    await P48_has_preferred_identifier.import([
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e42_identifiers/1',
            message: 'P48_has_preferred_identifier edge'
        }
    ])
}
