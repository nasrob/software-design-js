const nodePath = process.argv[0];
const pathToVersion = nodePath.split('/').slice(0, nodePath.length - 1).join('/')

console.log('Path to Node Version => ', pathToVersion);
console.log('Node Path => ', nodePath)