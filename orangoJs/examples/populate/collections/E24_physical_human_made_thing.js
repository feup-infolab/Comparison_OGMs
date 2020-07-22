module.exports = async ({ orango }) => {
    const E24_physical_human_made_thing = orango.model('E24_physical_human_made_thing')
    console.log(`✅  Populated__: "${E24_physical_human_made_thing.collectionName}" collection`.green)

    await E24_physical_human_made_thing.import([
        {
            _key: '1',
            name: 'Tokyo Tower'
        }
    ])
}
