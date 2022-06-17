var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [5823, 7264, 8716, 9151, 10416, 11534, 12365, 13555, 15953, 18961, 20383],
  text:'(MW)1',
  mode: 'lines+markers',
  name: 'Installed Capacity',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [5271, 6639, 8100, 8537, 9821, 10939, 11170, 12771, 15410, 18438, 19892],
  text:'(MW)2',
  mode: 'lines+markers',
  name: 'Present Capacity(Derated)',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [6454, 6765, 7518, 8349, 9268, 8920, 9600, 10400, 11200, 12100, 13300],
  text:'(MW)3',
  mode: 'lines+markers',
  name: 'Maximum Forecasted Demand',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace4 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [4606, 4890, 6066, 6434, 7356, 7817, 9036, 9479, 10958, 12893, 12738],
  text:'(MW)',
  mode: 'lines+markers',
  name: 'Maximum Demand Served',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace5 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [1829, 1899, 1647, 1070, 515, 177, 122, 37, 32, 53, 58],
  text:'(MkWh)',
  mode: 'lines+markers',
  name: 'Energy Not Served',
  line: {shape: 'spline'},
  type: 'scatter'
};

var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {
  title: 'From 2020 to 2025',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'MW generation'
  },
  height: 400,
  weidth: 900,
  legend: {

    y: 0.5,

    traceorder: 'reversed',

    font: {size: 8},

    yref: 'paper'

  }
};

Plotly.newPlot('icpmf', data, layout);