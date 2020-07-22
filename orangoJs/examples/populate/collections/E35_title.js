module.exports = async ({ orango }) => {
    const E35_title = orango.model('E35_title')
    console.log(`✅  Populated__: "${E35_title.collectionName}" collection`.green)

    await E35_title.import([
        {
            _key: '1',
            name: 'Tokyo Tower'
        }
    ])
}
