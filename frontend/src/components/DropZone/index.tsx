import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const getColor = (props: any) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  width: 300px;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

const Dropzone = (props: any) => {

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone();



    const files = acceptedFiles.map(file => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    return (
        <div className="container">
            <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />

                <p>Clique para fazer upload do arquivo</p>
                <CloudUploadIcon sx={{ fontSize: 60 }} />

            </Container>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}

export default Dropzone;