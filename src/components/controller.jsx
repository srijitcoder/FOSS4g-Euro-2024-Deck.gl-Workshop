import React, { useState } from 'react';
import '../styles/controller.css';

export default function Controller({ controllers }) {
  return (
    <div className="controller">
      {controllers.map(({ name, value, max, min, set, step }) => {
        return (
          <div>
            {name}:{' '}
            <input
              type="range"
              step={step}
              min={min}
              max={max}
              value={value}
              onInput={e => set(Number(e.target.value))}
            />{' '}
            {value}
          </div>
        );
      })}
    </div>
  );
}
