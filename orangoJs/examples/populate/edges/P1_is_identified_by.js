module.exports = async ({ orango }) => {
  const P1_is_identified_by = orango.model('P1_is_identified_by')
  console.log(`✅  Populated "${P1_is_identified_by.collectionName}" collection`.green)

  await P1_is_identified_by.import([
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E42_identifier/1',
      message: 'Hello, world!'
    },
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E42_identifier/2'
    }
  ])
}
