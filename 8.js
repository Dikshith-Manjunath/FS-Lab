const fs = require("fs");

const filePath = "./";
fs.readdir(filePath, { withFileTypes: true }, (err, items) => {
    if(err){
        console.log(JSON.stringify({ error: err.message }));
        return;
    }
    const result = items.map(item => ({
        name: item.name,
        type: item.isDirectory() ? "directory" : "file"
    }));
    console.log(JSON.stringify(result, null, 2));
})