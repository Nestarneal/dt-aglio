#!/usr/bin/env node

const aglio = require('aglio')
const path = require('path')

if (process.argv.length !== 3) {
  console.log('dt-aglio <inputFile>')
  return
}

const inputFilePath = process.argv[2]
const outputFilePath = process.argv[2].replace(path.extname(inputFilePath), '.html')

const options = {
  themeVariables: 'cyborg',
  themeTemplate: 'triple',
}

aglio.renderFile(inputFilePath, outputFilePath, options, error => error && console.log(error))
