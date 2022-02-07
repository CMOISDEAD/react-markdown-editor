// import { Remark } from 'react-remark';

import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkReact from 'remark-react';

// import remarkMath from 'remark-math';
// import remarkRehype from 'remark-rehype';
// import rehypeKatex from 'rehype-katex';
// import rehypeStringify from 'rehype-stringify';

export const RemarkRender = ({ value }) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
    })
    .processSync(value).result;

  return <div className="">{md}</div>;
};
