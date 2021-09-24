//aula file e sistem (fs) - import de modulos pre existentes
const fs = require('fs') // import de modulos node não especifica diretorio


fs.readFile('./clientes.json', function(error, content) {
    if (error) {
        console.log('Ops! deu erro', error)
    } else {
        console.log('Sucesso', JSON.parse(content))
            // (console content) apresenta um buffer que é tratada com JSON.parse
            // conteudo JSON.parse return um arquivo.json
            //buffer serve para transitar arquivo com um metodo http
    }
})