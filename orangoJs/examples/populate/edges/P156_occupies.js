module.exports = async ({orango}) => {
    const P156_occupies = orango.model('P156_occupies')
    console.log(`✅  Populated "${P156_occupies.collectionName}" collection`.green)

    await P156_occupies.import([
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e53_places/1',
            message: 'P156_occupies edge'

        }
    ])
}
