module.exports = async ({ orango }) => {
  const P48_has_preferred_identifier = orango.model('P48_has_preferred_identifier')
  console.log(`✅  Populated "${P48_has_preferred_identifier.collectionName}" collection`.green)

  await P48_has_preferred_identifier.import([
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E42_identifier/1',
      message: 'Hello, world!'
    }
  ])
}
