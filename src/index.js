import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var contents = [
  { id: 1, title: 'THML', description: 'HTML IS ...' },
  { id: 2, title: 'JS', description: 'JS IS ...' },
  { id: 3, title: 'REACT', description: 'REACT IS ...' },
];

function Topic() {
  var params = useParams();
  console.log('params', params);
  return (
    <div>
      <h3>Topic</h3>
      Topic....
    </div>
  );
}

function Topics() {
  var lis = [];
  console.log('aaa');
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li>
        <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Routes>
        <Route path=":content_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello Router</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
