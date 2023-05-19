const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname)).then(files=> console.log(files))
// .catch(e => console.log(e));

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if(!/\.css$/g.test(fileFullPath)) {
            //console.log(file);
            continue;
        }
        
        console.log(fileFullPath);
    }
}

const pt = 'js_udemy'

readdir(`/home/amauri/Documents/JS-TS-estudo-/${pt}`);