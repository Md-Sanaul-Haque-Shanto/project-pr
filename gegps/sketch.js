var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [14735, 12845, 13316, 15078, 15726, 16950, 17542, 21343, 24231, 26755, 26094],
  text:'(MkWh)',
  mode: 'lines+markers',
  name: 'East Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [2329, 2680, 2758, 3929, 4943, 5214, 6179, 6594, 8276, 9963, 10980],
  text:'(MkWh)',
  mode: 'lines+markers',
  name: 'West Zone',
  line: {shape: 'spline'},
  type: 'scatter'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [17064, 15525, 16074, 19008, 20669, 22163, 23721, 27938, 32507, 36718, 37074],
  text:'(MkWh)',
  mode: 'lines+markers',
  name: 'System Total',
  line: {shape: 'spline'},
  type: 'scatter'
};



var data = [trace1, trace2, trace3];

var layout = {
  title: 'Gross Energy Generation of Public Sector',
  xaxis: {
    title: 'Year'
  },
  yaxis: {
    title: 'Maximum Generation in MW'
  },
  height: 400,
  weidth: 900,
  legend: {

    y: 0.5,

    traceorder: 'reversed',

    font: {size: 10},

    yref: 'paper'

  }
};

Plotly.newPlot('gegps', data, layout);