import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>React Webpack Boilerplate by Devnubie</h1>;

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);