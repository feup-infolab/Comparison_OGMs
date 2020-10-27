
module.exports = async ({ orango }) => {
    const P1_is_identified_by = orango.model('P1_is_identified_by')
    //console.log(`✅  drop edge: "${P1_is_identified_by.collectionName}" collection`.green)


  // create query1
  let query1 = P1_is_identified_by.remove()
    .where({_from: 'e24_physical_human_made_things/1',
      _to: 'e42_identifiers/1'})
    .return()

  // FOR DEMO ONLY - show the AQL
  let aql1 = await query1.toAQL(true)
  //console.log(aql1.cyan)

  // exec query1
  let rawData1 = await query1.exec()
  //console.log('rawData1'.green, rawData1)


  // create query2
  let query2 = P1_is_identified_by.remove()
    .where({_from: 'e24_physical_human_made_things/1',
      _to: 'e42_identifiers/2'})
    .return()

  // FOR DEMO ONLY - show the AQL
  let aql2 = await query2.toAQL(true)
  //console.log(aql2.cyan)

  // exec query2
  let rawData2 = await query2.exec()
  //console.log('rawData2'.green, rawData2)

}
