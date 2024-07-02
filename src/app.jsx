import React from 'react';
import Module01 from '../module-01/main.jsx';
import Module02 from '../module-02/main.jsx';
import Module03 from '../module-03/main.jsx';
import Module04 from '../module-04/main.jsx';
import Module05 from '../module-05/main.jsx';
import Module06 from '../module-06/main.jsx';
import Module07 from '../module-07/main.jsx';
import Module08 from '../module-08/main.jsx';

export const components = [
  {
    path: '/module-01',
    name: 'Module 01: Introduction to Deck.GL',
    element: <Module01 />,
  },
  {
    path: '/module-02',
    name: 'Module 02: Adding controllers to Deck.GL',
    element: <Module02 />,
  },
  {
    path: '/module-03',
    name: 'Module 03: Visualizing data on Deck.GL',
    element: <Module03 />,
  },
  {
    path: '/module-04',
    name: 'Module 04: Comparing rendering data with and without Deck.GL',
    element: <Module04 />,
  },
  {
    path: '/module-05',
    name: 'Module 05: Adding tooltip to points',
    element: <Module05 />,
  },
  {
    path: '/module-06',
    name: 'Module 06: Comparing data rendering with GPU and CPU',
    element: <Module06 />,
  },
  {
    path: '/module-07',
    name: 'Module 07: Heatmap with 4 million data points',
    element: <Module07 />,
  },
  {
    path: '/module-08',
    name: 'Module 08: Heatmap with dynamic controller',
    element: <Module08 />,
  },
];

export default function App() {
  return (
    <>
      <ul>
        {components.map((component, index) => (
          <li key={`component-${index}`}>
            <a href={component.path}>{component.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
