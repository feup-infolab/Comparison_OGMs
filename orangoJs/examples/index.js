const fs = require('fs')
const inquirer = require('inquirer')
const di = require('./helpers/di')
const setup = require('./setup')
const config = require('./config')
const moment = require('moment')

require('colors')

function humanize(str) {
  var frags = str.split('_')
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1)
  }
  return frags.join(' ')
}

console.log('🍊  Welcome to Orango examples!')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'snippet',
      message: 'Choose a snippet to run:',
      choices() {
        let files = fs.readdirSync(__dirname + '/operations')
        let choices = []
        for (let i = 0; i < files.length; i++) {
          let option = {
            name: humanize(files[i].replace(/.\w+$/gi, '')),
            value: files[i]
          }
          choices[i] = option
        }
        return choices
      }
    }
  ])
  .then(async ({ snippet }) => {
    console.log(snippet)
    const past = moment(new Date())
    const orango = await setup(config)


    if (snippet.match(/remove records/g)) {
      const number = snippet.match(/\d+/g)[0]

      let i=0;

      while (i < number) {

        await di.injectDir(__dirname + '/removeRecords/collections', { orango, config })
        await di.injectDir(__dirname + '/removeRecords/edges', { orango, config })

        i++
        console.log("populated database and removed all records " + i + "times")
      }

    } else {
      await di.injectFile(__dirname + '/operations/' + snippet, { orango, config })
    }
    const now = moment(new Date())
    const duration = moment.duration(now.diff(past))
    console.log(' Duration:' + duration.asSeconds() + "/s")

  })
