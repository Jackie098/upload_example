const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports =  {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) callback(err);

        const fileName = `${hash.toString('hex')}- ${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
  limits: {
    /** 
     * A ideia é transformar o tamanho máximo do arquivo que será medido em 
     * bytes para Mbytes. Primeiro converto para Kbytes e dps para Mbytes,
     * neste caso, o tamanho máximo que um arquivo pode ter é de 2MB
     * */ 
    fileSize: 2 * 1024 * 1024,
  },
  /**
   * Serve para filtrar os arquivos. Um exemplo é quando eu quero lmiitar o tipo
   * de arquivo que o usuário poderá fazer o upload: "não quero 
   * arquivos com a extensão .jep e nem .gif" (por exemplo)
   */
  fileFilter: (req, file, callback) => { 
    /**
     * 3 parâmetros -
     * -> A requisição
     * -> O arquivo a ser manipulado
     * -> A função de retorno
     */

     //mime types permitidas
     const allowedMimes = [
       'image/jpeg',
       'image/pjpeg',
       'image/png',
       'image/gif',
     ];

     /**
      * Se o arquivo estiver no array acima, retorna tudo ok, se não estiver
      * retorna um erro
      */
     if(allowedMimes.includes(file.mimetype)){
       callback(null, true);
     } else {
       callback(new Error("Invalid file type."));
     }
  },
}