// import 'codemirror/keymap/vim';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

export const CodemirrorEditor = ({ callback }) => {
  return (
    <CodeMirror
      // height=""
      autoFocus
      theme={oneDark}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      onChange={(value, viewUpdate) => {
        callback(value);
      }}
    />
  );
};
