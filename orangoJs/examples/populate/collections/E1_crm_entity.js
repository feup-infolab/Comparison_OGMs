module.exports = async ({ orango }) => {
    const E1_crm_entity = orango.model('E1_crm_entity')
    console.log(`✅  Populated__: "${E1_crm_entity.collectionName}" collection`.green)

    await E1_crm_entity.import([
        {
            _key: '1',
            name: 'E1_of_test'
        }
    ])
}
