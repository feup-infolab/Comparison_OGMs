module.exports = async ({ orango }) => {
  // get a reference to User model
  const P156_occupies = orango.model('P156_occupies')

  // create query
  let query = P156_occupies.link(
    { E24_physical_human_made_thing: '1', E53_place: '1' },
    { message: 'P156_occupies edge' }
  )
  .return(orango.return.one())

  // FOR DEMO ONLY - show the AQL
  let aql = await query.toAQL(true)
  console.log(aql.cyan)

  // exec query
  let rawData = await query.exec()
  console.log('rawData'.green, rawData)



  module.exports = async ({ orango }) => {
    // get a reference to User model
    const P156_occupies = orango.model('P156_occupies')

    // create query
    let query = P156_occupies.link(
        { E24_physical_human_made_thing: '1', E53_place: '1' },
        { message: 'P156_occupies edge' }
    )
        .return(orango.return.one())

    // FOR DEMO ONLY - show the AQL
    let aql = await query.toAQL(true)
    console.log(aql.cyan)

    // exec query
    let rawData = await query.exec()
    console.log('rawData'.green, rawData)



    // create query
    let query2 = P156_occupies.link(
        { E24_physical_human_made_thing: '1', E53_place: '2' },
        { message: 'P156_occupies edge' }
    )
        .return(orango.return.one())

    // FOR DEMO ONLY - show the AQL
    let aql2 = await query2.toAQL(true)
    console.log(aql2.cyan)

    // exec query
    let rawData2 = await query2.exec()
    console.log('rawData'.green, rawData2)




  }

}
