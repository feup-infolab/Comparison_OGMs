module.exports = async ({ orango }) => {
    const E70_thing = orango.model('E70_thing')
    console.log(`✅  Populated__: "${E70_thing.collectionName}" collection`.green)

    await E70_thing.import([
        {
            _key: '1',
            name: 'Eiffel Tower'
        }
    ])
}
