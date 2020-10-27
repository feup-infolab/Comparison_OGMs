module.exports = async ({ orango }) => {
    const E53_place = orango.model('E53_place')
    //console.log(`✅  drop records: "${E53_place.collectionName}" collection`.green)


    // create query1
    let query1 = E53_place.remove()
      .where({ _key: '1' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql1 = await query1.toAQL(true)
    //console.log(aql1.cyan)

    // exec query1
    let rawData1 = await query1.exec()
    //console.log('rawData1'.green, rawData1)



    // create query2
    let query2 = E53_place.remove()
      .where({ _key: '2' })
      .return()

    // FOR DEMO ONLY - show the AQL
    let aql2 = await query2.toAQL(true)
    //console.log(aql2.cyan)

    // exec query2
    let rawData2 = await query2.exec()
    //console.log('rawData2'.green, rawData2)

}
