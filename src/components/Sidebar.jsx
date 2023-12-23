import React, { useState } from 'react';
import Filelist from './fileList';
import Folderlist from './folderList';
import axios from 'axios';

const Sidebar = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState({ id: '', title: '' });
  const [items, setItems] = useState([]);
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState('');
  const url = 'https://cashier.rulim34.dev';
  const key = 'WhZjF9JrRe+8PmSkHLk5K+Kjuo+/pw5avi7JhFreRD4=';
  const params = new URLSearchParams();
  params.append('directoryId', selectedFolder.id);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key,
  };

  async function getData() {
    const response = await axios.get(url + '/directories', { headers: headers });
    setItems(response.data);
  }

  async function showFolderDropDown() {
    if (items.length === 0) {
      await getData();
    }
    setIsFolderOpen(!isFolderOpen);
  }

  async function showFileDropDown() {
    console.log(selectedFolder.id);
    if (selectedFolder.id) {
      try {
        const fileres = await axios.get(url + '/notes', {
          headers: headers,
          params: params,
        });
        setFile(fileres.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    }
    setIsFileOpen(!isFileOpen);
  }

  async function handleEnter(event) {
    if (event.key === 'Enter') {
      await axios.post(
        url + '/notes',
        { title: fileName, directoryId: selectedFolder.id },
        { headers: headers }
      );
    }
  }

  const deleteFile = async (fileId) => {
    console.log('Deleting file with id:', fileId);
    // Implement your file deletion logic here
  };

  function handleFolderClick(id, title) {
    setSelectedFolder({ id, title });
  }

  return (
    <>
      <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto border border-gray-300'>
        <h1 className='text-xl font-bold pb-10 ml-8 mt-10'>Notes</h1>
        <div>
          <button onClick={showFolderDropDown} className='mb-5 ml-8 mt-5'>
            <p className=''>Folders</p>
          </button>
          {isFolderOpen &&
            items.map((item) => (
              <Folderlist
                key={item.id}
                name={item.title}
                onClick={() => handleFolderClick(item.id, item.title)}
              />
            ))}
        </div>
        <div>
          <button onClick={showFileDropDown} className='mb-5 ml-8 mt-5'>
            <p className=''>
              {selectedFolder.title ? selectedFolder.title : 'Folder Name'}
            </p>
          </button>
          {isFileOpen &&
            file.map((oneFile) => (
              <Filelist
                key={oneFile.id}
                fileName={oneFile.title}
                deleteFile={deleteFile}
              />
            ))}
        </div>
        <button className='ml-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#ccc'
            aria-hidden='true'
            className='hm kj nz sb pr-2 al'
            width='25'
            height='25'
          >
            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z'></path>
          </svg>
        </button>
        <textarea
          name=''
          id=''
          cols='30'
          rows='1'
          className='focus:outline-none focus:border-none'
          placeholder='New Page'
          onChange={(e) => setFileName(e.target.value)}
          onKeyDown={handleEnter}
        ></textarea>
      </div>
    </>
  );
};

export default Sidebar;
