import axios, { AxiosResponse } from 'axios'
import minimist from 'minimist'

type Foo = {
  bar: string;
}

async function main() {
  const argv = minimist(process.argv.slice(2))
  console.log(argv)

  if (argv.city === undefined) {
    throw new Error("City must be provided")
  }

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${argv.city}&appid=${process.env.API_KEY}`)

  console.log(response.data)
  
  console.log("Hello World")
}

main().catch(error => console.log(error))