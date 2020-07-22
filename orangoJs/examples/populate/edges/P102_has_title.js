module.exports = async ({orango}) => {
    const P102_has_title = orango.model('P102_has_title')
    console.log(`✅  Populated "${P102_has_title.collectionName}" collection`.green)

    await P102_has_title.import([
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e35_titles/1',
            message: 'P102_has_title edge'

        }
    ])
}
