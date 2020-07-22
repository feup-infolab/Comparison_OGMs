module.exports = async ({orango}) => {
    const P130_shows_feature_of = orango.model('P130_shows_feature_of')
    console.log(`✅  Populated "${P130_shows_feature_of.collectionName}" collection`.green)

    await P130_shows_feature_of.import([
        {
            _from: 'e24_physical_human_made_things/1',
            _to: 'e70_things/1',
            message: 'P130_shows_feature_of edge'

        }
    ])
}
