var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [3883, 3962, 4805, 5010, 5320, 5902, 6699, 7024, 8034, 9012, 9005],
  text:'(MW)',
  mode: 'lines+markers',
  name: 'East Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [723, 928, 1261, 1424, 2036, 1915, 2337, 2455, 2924, 3881, 3733],
  text:'(MW)',
  mode: 'lines+markers',
  name: 'West Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [4606, 4890, 6066, 6434, 7356, 7817, 9036, 9479, 10958, 12893, 12738],
  text:'(MW)',
  mode: 'lines+markers',
  name: 'System Total',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace4 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [10.67, 6.17, 24.05, 6.07, 14.33, 6.27, 15.59, 4.90, 15.60, 17.66, 1.20],
  text:'%',
  mode: 'lines+markers',
  name: 'Increase over System Total the preceding year',
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

Plotly.newPlot('ywmg', data, layout);