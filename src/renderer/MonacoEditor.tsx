import Editor from '@monaco-editor/react';

export const MonacoEditor = () => {
  return (
    <>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </>
  );
};
