module.exports = async ({ orango }) => {
  const P156_occupies = orango.model('P156_occupies')
  console.log(`✅  Populated "${P156_occupies.collectionName}" collection`.green)

  await P156_occupies.import([
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E53_place/1',
      message: 'Hello, world!'
    }
  ])
}
