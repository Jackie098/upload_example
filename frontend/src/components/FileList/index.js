import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="http://localhost:3000/files/d9fe483e486648c87735364695c9418f-logo.jpeg" />
        <div>
          <strong>nomeImagem.png</strong>
          <span>180kb <button onClick={() => {}}>Excluir</button></span>
        </div>
      </FileInfo>
    
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#7159c1'},
          }}
          strokeWidth={10}
          value={65}
          />

          <a 
            href="http://localhost:3000/files/d9fe483e486648c87735364695c9418f-logo.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLink style={{ marginLeft: 8 , marginRight: 8}} size={24} color="#222" />
          </a>

          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />        
      </div>
    </li>
  </Container>
);

export default FileList;