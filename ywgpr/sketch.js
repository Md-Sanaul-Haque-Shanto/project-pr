var trace1 = {
  x: [16],
  y: [9065],
  text:['(MW)'],
  mode: 'lines+markers',
  name: 'Public'
};

var trace2 = {
  x: [27],
  y: [6229],
  text:['(MW)'],
  mode: 'lines+markers',
  name: 'IPP'
};



var data = [trace1, trace2];

var layout = {
  title: 'Under Construction Projects',
  xaxis: {
    title: 'No. of Projects'
  },
  yaxis: {
    title: 'Capacity (MW)'
  },
  height: 400,
  weidth: 700
};

Plotly.newPlot('ywgpr', data, layout);