import React from 'react';
import WithDeck from './components/with-deck.jsx';
import WithoutDeck from './components/without-deck.jsx';
import WithGPUAndCPU from './components/with-gpu-cpu.jsx';
import Heatmap from './components/heatmap.jsx';
import FourMillionHeatmapData from './components/4-million-heatmap.jsx';
import FourMillionGridData from './components/4-million-grid.jsx';

export const components = [
  {
    path: '/with-deck',
    name: 'With Deck (Scatter Plot)',
    element: <WithDeck />,
  },
  {
    path: '/without-deck',
    name: 'Without Deck (Scatter Plot)',
    element: <WithoutDeck />,
  },
  {
    path: '/with-gpu',
    name: 'With GPU (Grid)',
    element: <WithGPUAndCPU gpuAggregation={true} />,
  },
  {
    path: '/with-cpu',
    name: 'With CPU (Grid)',
    element: <WithGPUAndCPU gpuAggregation={false} />,
  },
  {
    path: '/heatmap',
    name: 'Heatmap',
    element: <Heatmap />,
  },
  {
    path: '/big-data-heatmap',
    name: '4 million data points (Heatmap)',
    element: <FourMillionHeatmapData />,
  },
  {
    path: '/big-data-grid',
    name: '4 million data points (Grid)',
    element: <FourMillionGridData gpuAggregation={true} />,
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
