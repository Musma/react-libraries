const camelcase = require('camelcase')

function generateComponentName(fileName) {
  const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
    pascalCase: true,
  })}Icon`

  return componentName
}

exports.generateComponentName = generateComponentName
