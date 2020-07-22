module.exports = async ({ orango }) => {
  const P102_has_title = orango.model('P102_has_title')
  console.log(`✅  Populated "${P102_has_title.collectionName}" collection`.green)

  await P102_has_title.import([
    {
      _from: 'E24_physical_human_made_thing/1',
      _to: 'E35_title/1',
      message: 'Hello, world!'
    }
  ])
}
