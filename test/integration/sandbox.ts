import * as fs from 'fs-extra'
import * as path from 'path'
const rimraf = require('rimraf')

export function tmpTest(fn: any) {
  return new Promise(async (resolve, reject) => {
    const name = (+Date.now()).toString()
    const dir = path.resolve(process.cwd(), name)
    const folder = await fs.mkdir(dir)

    await fn(dir)

    rimraf(dir, () => {
      resolve()
    })
  })
}