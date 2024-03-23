import React from 'react';
import TableView from './TableViews.js';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'Deepika', Age: 19 },
     { ID: 2, Name: 'Vuha', Age: 19 },
     { ID: 3, Name: 'Vyshnavi', Age: 19 },
     { ID: 4, Name: 'Sai', Age: 19 },
     { ID: 5, Name: 'Teja', Age: 19 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;