import fs from 'fs-extra'
import path, { basename } from 'path'

const args = process.argv.slice(2)

const [newExt, ...files] = args

const filesToRename = files.filter((file) => !file.endsWith(newExt))

for (const file of filesToRename) {

    const oldExt = path.extname(file)
    const fileName = path.basename(file, oldExt)
    const dirName = path.dirname(file)

    const baseName = path.basename(file)
    console.log('BASE-NAME => ', baseName)

    // const renamed = path.join(dirName, fileName + newExt)

    const renamed = path.format({ ...path.parse(file), base: '', ext: newExt})

    console.log('OLD-EXT => ', oldExt)
    console.log('FILE-NAME => ', fileName)
    console.log('FILE-DIR-NAME => ', dirName)
    console.log('RENAMED => ', renamed)

    try {
        fs.renameSync(file, renamed)
    } catch (err) {
        console.error(err);
    }
}


