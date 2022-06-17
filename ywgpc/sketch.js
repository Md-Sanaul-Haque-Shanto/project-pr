var trace1 = {
  x: [2020, 2021, 2022, 2023, 2024, 2025],
  y: [2456, 2139, 981, 3621, 2400, 1975],
  text:['(MW)','(MW)','(MW)','(MW)','(MW)','(MW)'],
  mode: 'lines+markers',
  name: 'Public'
};

var trace2 = {
  x: [2020, 2021, 2022, 2023, 2024, 2025],
  y: [1063, 150, 3109, 757, 590, 1240],
  text:['(MW)','(MW)','(MW)','(MW)','(MW)','(MW)'],
  mode: 'lines+markers',
  name: 'Private'
};

var trace3 = {
  x: [2020, 2021, 2022, 2023, 2024, 2025],
  y: [0, 0, 1496, 0, 0, 0],
  text:['(MW)','(MW)','(MW)','(MW)','(MW)','(MW)'],
  mode: 'lines+markers',
  name: 'Power Import'
};

var data = [trace1, trace2, trace3];

var layout = {
  title: 'From 2020 to 2025',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'MW generation'
  },
  height: 400,
  weidth: 700
};

Plotly.newPlot('ywgpc', data, layout);