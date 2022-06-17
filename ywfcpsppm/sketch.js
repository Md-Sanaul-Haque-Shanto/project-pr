var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [7120, 6431, 13831, 18885, 23430, 23307, 31753, 32261, 55611, 38427, 33455],
  text:'(Million Taka)',
  mode: 'lines+markers',
  name: 'East Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [9245, 12632, 14740, 18380, 32822, 36946, 30137, 35699, 50098, 30157, 24410],
  text:'(Million Taka)',
  mode: 'lines+markers',
  name: 'West Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [16364, 19063, 28571, 37266, 56252, 60253, 61890, 67960, 105709, 68584, 57865],
  text:'(Million Taka)',
  mode: 'lines+markers',
  name: 'System Total',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace4 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [10.25, 16.49, 49.88, 30.43, 50.95, 7.11, 2.72, 9.81, 55.55, 35.12, 15.63],
  text:'%',
  mode: 'lines+markers',
  name: 'Change over preceding Year',
  line: {shape: 'spline'},
  type: 'scatter'
};



var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: ' ',
  xaxis: {
    title: 'Year',
      dtick: 1
  },
  yaxis: {
    title: 'Maximum Generation in MW'
  },
  height: 400,
  weidth: 900,
  legend: {

    x: 0,
    y: 2.0

  }
};

Plotly.newPlot('ywfcpsppm', data, layout);