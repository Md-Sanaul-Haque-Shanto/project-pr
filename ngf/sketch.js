var trace1 = {
  x: ['Trouble in generation', 'Trouble in grid S-S Equipment', 'Fault in transmission line', 'The lightning on transmission line-Thunder Storm', 'Grid failure', 'Total Grid failure'],
  y: [171, 55, 17, 0, 2, 0],
  type: 'bar',
  name: 'FY 2019',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
  }
};

var trace2 = {
  x: ['Trouble in generation', 'Trouble in grid S-S Equipment', 'Fault in transmission line', 'The lightning on transmission line-Thunder Storm', 'Grid failure', 'Total Grid failure'],
  y: [162, 29, 11, 0, 2, 0],
  type: 'bar',
  name: 'FY 2020',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5
  }
};

var data = [trace1, trace2];

var layout = {
  title: 'Interruption of National Grid for FY 2019 & FY 2020',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group',
  height: 400,
  weidth: 900
};

Plotly.newPlot('ngf', data, layout);
