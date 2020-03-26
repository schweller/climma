import dotenv from 'dotenv'

dotenv.config()

import axios from 'axios'
import chalk from 'chalk'
import minimist from 'minimist'


async function main() {
  const argv = minimist(process.argv.slice(2))
  console.log(argv)

  if (argv.city === undefined) {
    console.error(chalk.red('City must be provided!'))
    throw new Error('City must be provided')
  }

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${argv.city}&units=metric&appid=${process.env.API_KEY}`)

  console.log(chalk.green(`${argv.city} current temperature is ${response.data.main.temp} celsius`));
}

main().catch(error => console.log(error))
