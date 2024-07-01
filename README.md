# High performant & large-scale GeoSpatial visualisation using MapLibre and Deck.GL (with React)

## Overview about the workshop:

Introduce everyone to the basic usage of Deck.GL, including various layers such as ScatterPlot, Grid, and Heatmap. Demonstrate different parameters to show the differences between CPU and GPU-based rendering, as well as data rendering with and without Deck.GL. This will help everyone understand how Deck.GL works.

## Workshop Structure

- Introduction of Deck.GL.
- Setup workshop repository.
- Going through documentation.
- Hands-on experience based on different modules.
- Exploring apps made on Deck.GL
- Ending note and questions.
- Explode with some tomatoes or bye.

## What is Deck.GL?

deck.gl is designed to simplify high-performance, WebGPU/WebGL2 based visualization of large data sets. Users can quickly get impressive visual results with minimal effort by composing existing layers, or leverage deck.gl's extensible architecture to address custom needs.

deck.gl maps **DATA** (typically in the form of arrays of JSON objects or binary data columns) into a stack of visual **LAYERS** - e.g. icons, polygons, texts; and lets the application render these through various **VIEWS**: e.g. map, first-person, orthographic.

## Why Deck.GL?

- Minimizing CPU time
- Instanced rendering
- Attribute management
- GPU-accelerated aggregation and filtering

## Setup for the workshop

### Clone the workshop repository

```
git clone https://github.com/srijitcoder/FOSS4g-Euro-2024-Deck.gl-Workshop.git
```

### Install packages

```
npm install
```

### Download data

- Download data for the workshop from GDrive - https://drive.google.com/file/d/14VzOWsOn8EDury7wgy_K_Ml8QPfXuU9L/view?usp=sharing
- Unzip the file
- Copy `data` to `/workshop-folder/public`

### Check WebGL enabled on your browser

- Go to this URL - https://get.webgl.org/ (If your browser don't support WebGL, you need to enable it)
- Use this link to enable WebGL on your respective browser - https://help.lexialearning.com/s/article/How-to-Turn-on-Web-GL-in-Your-Browser-20516

## Hands-on session

Each session is divided into `modules` and each `modules` contain -

- `main.jsx` - Which is where everyone will write code
- `solution.jsx` - If you are badly suck with the solution you can refer this but try to avoid
- `readme.md` - Helps everyone to go through the steps required to achieve the task.

## List of modules.

- Module 01: Introduction to Deck.GL
- Module 02: Adding controllers to Deck.GL
- Module 03: Visualizing data on Deck.GL
- Module 04: Comparing rendering data with and without Deck.GL
- Module 05: Adding tooltip to points
- Module 06: Comparing data rendering with GPU and CPU
- Module 07: Heatmap with 4 million data points

## Further learning resources

If you want to explore more - https://deck.gl/docs/get-started/learning-resources
