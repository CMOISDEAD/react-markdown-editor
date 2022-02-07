import './App.css';
import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CodemirrorEditor } from './CodemirrorEditor';
import { RemarkRender } from './RemarkRender';
// import { Footer } from './Footer';
import { ToolBar } from './ToolBar';

const Hello = () => {
  const [doc, setDoc] = useState('');

  return (
    <div>
      <ToolBar />
      <div className="row">
        <div className="col editor">
          <CodemirrorEditor callback={setDoc} />
        </div>
        <div className="col viewer">
          <RemarkRender value={doc} />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
