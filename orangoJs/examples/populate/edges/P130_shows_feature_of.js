module.exports = async ({ orango }) => {
  const P130_shows_feature_of = orango.model('P130_shows_feature_of')
  console.log(`✅  Populated "${P130_shows_feature_of.collectionName}" collection`.green)

  await P130_shows_feature_of.import([
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E70_thing/1',
      message: 'Hello, world!'
    }
  ])
}
