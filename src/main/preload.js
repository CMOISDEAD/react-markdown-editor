const electron = require('electron');
const { contextBridge, ipcRenderer } = require('electron');
const { shell } = require('electron');
const remote = electron.remote;
const { dialog } = remote;

let openFileDialog = () => {
  dialog
    .ShowOpenDialog({
      title: 'Open File',
      message: 'First Dialog',
      //pass 'openDirectory' to strictly open directories
      properties: ['openFile'],
    })
    .then((result) => {
      shell.openPath(result.filePaths[0]);
      console.log(result.filePaths[0]);
    });
};

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
});
