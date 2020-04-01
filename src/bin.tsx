#!/usr/bin/env node

import React from 'react'
import { render } from 'ink'

import Climma from './render'

const [city] = process.argv.slice(2)

render(<Climma city={city}/>)
