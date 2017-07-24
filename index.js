const moment = require('moment')
const chalk = require('chalk')

console.log(`It is ` + chalk.blue.bold(moment().format('dddd, MMMM Do YYYY, h:mm:ss a')))
console.log(`It is the ` + chalk.magenta.bold(moment().format('DDDo')) + ` day of the year.`)

console.log(
  `It is ` + chalk.cyan.bold(moment().hours() * 3600 + moment().minutes() * 60 + moment().seconds()) + ` into the day.`
)

if (moment().isDST()) {
  console.log(`It ` + chalk.green.bold('is') + ` during Daylight Savings Time.`)
} else {
  console.log(`It ` + chalk.red.bold('is not') + ` during Daylight Savings Time.`)
}
if (moment().isLeapYear()) {
  console.log(`It ` + chalk.green.bold('is') + ` a Leap Year.`)
} else {
  console.log(`It ` + chalk.red.bold('is not') + ` a Leap Year.`)
}
