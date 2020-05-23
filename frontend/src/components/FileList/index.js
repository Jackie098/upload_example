import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}

              {!!uploadedFile.url && (
                <button onClick={() => {}}>Excluir</button>
              )}
            </span>
          </div>
        </FileInfo>
      
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#7159c1'},
            }}
            strokeWidth={10}
            value={uploadedFile.progress}
            />
          )}

          {
            uploadedFile.url && (
              <a 
              href="http://localhost:3000/files/d9fe483e486648c87735364695c9418f-logo.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              >
                <MdLink style={{ marginLeft: 8 , marginRight: 8}} size={24} color="#222" />
              </a>
            )}

            { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
            
            { uploadedFile.error && <MdError size={24} color="#e57878" /> }        
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;