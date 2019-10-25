import glob from 'glob'

const flattenArray = array => {
  if (!Array.isArray(array)) {
    if (!array) return []
    return [array]
  }

  let returnArray = []

  array.forEach(item => {
    if (Array.isArray(item)) {
      returnArray = [...returnArray, ...flattenArray(item)]
      return
    }

    if (item) {
      returnArray = [...returnArray, item]
    }
  })

  return returnArray
}

const importFile = async file => {
  const importedFile = await import('../' + file)

  const fileExports = Object.values(importedFile)

  return fileExports.map(flattenArray)
}

export const importAllFromGlob = str =>
  new Promise((resolve, reject) => {
    glob(str, { cwd: 'src' }, (err, files) => {
      if (err) {
        reject(err)
        return
      }

      Promise.all(files.map(importFile)).then(importedFiles => {
        resolve(flattenArray(importedFiles))
      })
    })
  })
