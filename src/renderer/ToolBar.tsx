import writeFileP from 'write-file-p';

const handleOpen = (e) => {
  e.preventDefault();

  writeFileP(
    `/home/camilo/Documents/git/react-markdown-editor/test.md`,
    '# Hello World',
    (err, data) => {
      console.log(err || data);
    }
  );
};

export const ToolBar = () => {
  return (
    <div>
      <button className="btn btn-light" onClick={handleOpen}>
        Open
      </button>
    </div>
  );
};
