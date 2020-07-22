module.exports = async ({orango}) => {
    const E53_place = orango.model('E53_place')
    console.log(`✅  Populated__: "${E53_place.collectionName}" collection`.green)

    await E53_place.import([
        {
            _key: '1',
            name: 'Tokyo'
        },
        {
            _key: '2',
            name: 'Tokyo2'
        }
    ])
}
