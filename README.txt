
# Instrucciones para utilizar la funci贸n moveOnlyFilesInCSV 馃摑  

La funci贸n "moveOnlyFilesInCSV" es una funci贸n de Node.js que se encarga de leer un archivo CSV que contiene una lista de nombres de archivo, y luego mover todos los archivos con esos nombres desde un directorio "coreDirectory" a un nuevo directorio "newDirectory". Esta funci贸n requiere que se instalen algunas librer铆as de Node.js antes de su uso.

## Requerimientos de Node.js  
Antes de poder utilizar la funci贸n "moveOnlyFilesInCSV", debes instalar los siguientes paquetes de Node.js mediante el comando "npm install":
- fs
- csv-parser
- fs-extra

## Rutas necesarias  
Antes de utilizar la funci贸n, aseg煤rate de cambiar las rutas "coreDirectory", "newDirectory" y "csvFile" en el archivo de c贸digo fuente para que se correspondan con las ubicaciones de tus archivos en tu sistema de archivos.

## C贸mo utilizar la funci贸n 
Para utilizar la funci贸n, simplemente llama a la funci贸n "moveOnlyFilesInCSV" pasando la ruta del archivo CSV como argumento. Esto iniciar谩 el proceso de lectura del archivo CSV y la posterior transferencia de archivos.

## Contexto de uso
Esta funci贸n podr铆a ser 煤til en cualquier situaci贸n en la que se necesite mover archivos en masa desde un directorio a otro, utilizando una lista predefinida de nombres de archivo contenidos en un archivo CSV. Por ejemplo, si tienes una gran cantidad de im谩genes y necesitas mover solo un subconjunto de ellas a otro directorio.

隆Eso es todo! Con estas instrucciones, deber铆as estar listo para utilizar la funci贸n "moveOnlyFilesInCSV".



