module.exports = async ({orango}) => {
    const E42_identifier = orango.model('E42_identifier')
    console.log(`✅  Populated__: "${E42_identifier.collectionName}" collection`.green)

    await E42_identifier.import([
        {
            _key: '1',
            name: 'Identity 1'
        },
        {
            _key: '2',
            name: 'Identity 2'
        }
    ])
}
