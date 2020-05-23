import React, { Component, useState } from 'react';
import { uniqueId } from 'lodash'; //Para gerar ID único
import filesize from 'filesize';  //Para controlar a nomenclatura do tamanho de uma imagem

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

class App extends Component {
  // const [uploadedFiles, arrayFiles] = useState([]);
  state = {
    uploadedFiles: [],
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({  //criando um array de objetos
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })
  };

  render(){
    const { uploadedFiles } = this.state;

    return (
      <>
        <Container>
          <Content>
            <Upload onUpload={this.handleUpload} />
            {/** Para retornar o componente da lista, primeiro haverá uma
             * verificação para averiguar se na lista (UploadedFiles), tem mais
             * de 0 itens.
             * 
             * Utilizando o !! ao inves de retornar a quantidade de itens, retorna
             * TRUE para > 0 itens e FALSE para = 0 itens na lista
             */
             
              !!uploadedFiles.length && (
                <FileList files={uploadedFiles}/>
              )
             }

          </Content>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}

export default App;
