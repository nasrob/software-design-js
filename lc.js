import fs from 'fs'
import readline from 'readline'

const files = process.argv.slice(2)

const countLines = async (files) => {
    let totalLine = 0
    for (const file of files) {
        let linesCount = 0
        const rl = readline.createInterface({
            input: fs.createReadStream(file),
            output: process.stdout,
            terminal: false,
        })

        rl.on('line', (line) => {
            linesCount++
        })

        rl.on('close', () => {
            console.log(`${file} => ${linesCount}`)
            totalLine += linesCount
        })
    }
    return totalLine
}

console.log('TOTAL-LINES => ', await countLines(files)) // rerturns Zero ???