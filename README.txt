
# Instrucciones para utilizar la función moveOnlyFilesInCSV 📝  

La función "moveOnlyFilesInCSV" es una función de Node.js que se encarga de leer un archivo CSV que contiene una lista de nombres de archivo, y luego mover todos los archivos con esos nombres desde un directorio "coreDirectory" a un nuevo directorio "newDirectory". Esta función requiere que se instalen algunas librerías de Node.js antes de su uso.

## Requerimientos de Node.js  
Antes de poder utilizar la función "moveOnlyFilesInCSV", debes instalar los siguientes paquetes de Node.js mediante el comando "npm install":
- fs
- csv-parser
- fs-extra

## Rutas necesarias  
Antes de utilizar la función, asegúrate de cambiar las rutas "coreDirectory", "newDirectory" y "csvFile" en el archivo de código fuente para que se correspondan con las ubicaciones de tus archivos en tu sistema de archivos.

## Cómo utilizar la función 
Para utilizar la función, simplemente llama a la función "moveOnlyFilesInCSV" pasando la ruta del archivo CSV como argumento. Esto iniciará el proceso de lectura del archivo CSV y la posterior transferencia de archivos.

## Contexto de uso
Esta función podría ser útil en cualquier situación en la que se necesite mover archivos en masa desde un directorio a otro, utilizando una lista predefinida de nombres de archivo contenidos en un archivo CSV. Por ejemplo, si tienes una gran cantidad de imágenes y necesitas mover solo un subconjunto de ellas a otro directorio.

¡Eso es todo! Con estas instrucciones, deberías estar listo para utilizar la función "moveOnlyFilesInCSV".



