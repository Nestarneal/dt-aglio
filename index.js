#!/usr/bin/env node

const aglio = require('aglio')

if (process.argv.length !== 4) {
  console.log('dt-aglio <inputFile> <outputFile>')
  return
}

const inputFilePath = process.argv[2]
const outputFilePath = process.argv[3]

const options = {
  themeVariables: 'cyborg',
  themeTemplate: 'triple',
}

aglio.renderFile(inputFilePath, outputFilePath, options, error => error && console.log(error))
