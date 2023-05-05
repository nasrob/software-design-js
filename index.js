import fs from 'fs-extra'
import glob from 'glob'
import path from 'path'

const srcDir = process.cwd()
console.log('SRC-DIR => ', srcDir);

fs.readdir(srcDir, (err, files) => {
    console.log('Running Read Dir callback');
    if (err) {
        console.error(err)
    } else {
        for (const name of files) {
            console.log('FILE-NAME => ', name);
        }
    }
})

const [srcRoot, dstRoot] = process.argv.slice(2)

const argsLength = process.argv.length

console.log('ARGS-LENGTH => ', argsLength);

if (argsLength !== 4) {
    console.error('Expected 2 arguments, i.e: node index.js ./inputDir ./outputDir');
} else {
    glob(`${srcRoot}/**/*.*`, {ignore: '**/node_modules/**'},(err, files) => {
        if (err) {
            console.error(err);
        } else {
            for (const fileName of files) {
                fs.stat(fileName, (err, stats) => {
                    if (err) {
                        console.error(err)
                    } else if (stats.isFile()) {
                        const dstName = fileName.replace(srcRoot, dstRoot)
                        const dstDir = path.dirname(dstName)
                        fs.ensureDir(dstDir, (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                fs.copy(fileName, dstName, (err) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    })
}