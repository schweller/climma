import os from 'os'
import { promises as fs } from 'fs';

type Config = {
  homedir: string;
  config?: {[key: string]: string };
}

/**
 * Attempt to get a config file under user's OS homedir
 * If not found, config will create one with defaults
 */
const getConfig = async (): Promise<Config> => {
  const homedir = os.homedir()

  const file = await fs.readFile(`${homedir}/.climmarc`, 'utf-8').catch(error => error)
  
  if (file.code === 'ENOENT') {
    console.log(`Writing to ${homedir}/.climmarc`)
    await fs.writeFile(`${homedir}/.climmarc`, `API_KEY=\nprovider=`)
    return { 
      homedir
    }
  }

  return { homedir, config: parse(file) }
}

const parseLine = (line: string) => {
  // I'm not an expert on RegExp but it works.
  // That being said: I'll look into a better solution later
  const foo = line.split(/=(.*)[\r\n]*/gm)
  return {
    key: foo[0],
    value: foo[1]
  }
}

const parse = (data: string) => {
  const splittedObjects = data.split(/\r?\n/g).map(parseLine)
  return splittedObjects.reduce((x, i) => {
    return {...x, [i.key]: i.value}
  }, {})
}

export default getConfig
