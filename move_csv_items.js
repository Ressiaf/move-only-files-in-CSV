//Requerimientos de Node,js
//npm install fs csv-parser fs-extra
const fs = require('fs'); 
const csv = require('csv-parser');
const fse = require('fs-extra');

// Rutas necesarias para la funcion 
const coreDirectory = 'C:\\your\\path\\here\\core_directory';
const newDirectory =  'C:\\your\\path\\here\\new_directory';
const csvFile = 'C:\\your\\path\\here\\example.csv';

function moveOnlyFilesInCSV(csvFile) {
    const filesToMove = [ ];
    fs.createReadStream(csvFile)
        .pipe(csv())
        .on('data', (row) => {
            if (row.file_name) {
                filesToMove.push(`${row.file_name}`);
            }
        })
        .on('end', () => {
                fs.readdir(coreDirectory , (err, files) => {
                    if (err) throw err;
                    files.forEach((file) => {
                    if (!filesToMove.includes(file)) {
                        fse.moveSync(`${coreDirectory }/${file}`, `${newDirectory}/${file}`);
                    }
                    });
                });
                });
            }
//Ejecucion 
moveOnlyFilesInCSV(csvFile);