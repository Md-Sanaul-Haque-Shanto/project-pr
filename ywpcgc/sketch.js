var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [29247, 31355, 35118, 38229, 42195, 45836, 52193, 57276, 62677, 70533, 71419],
  name: 'Total Net Generation',
  marker: {color: 'black'},
  type: 'bar'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168],
  name: 'Total Population',
  marker: {color: 'yellow'},
  type: 'bar'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [24596, 26587, 29974, 32740, 36233, 39624, 45299, 50264, 55103, 62037, 63364],
  name: 'Total Sale',
  marker: {color: 'blue'},
  type: 'bar'
};

var trace4 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [197.88, 209.46, 231.65, 248.73, 270.83, 290.28, 326.41, 354.10, 383.00, 426.05, 426.23],
  name: 'Per Capita Generation',
  marker: {color: 'green'},
  type: 'bar'
};

var trace5 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [166.42, 177.60, 197.72, 213.01, 232.56, 250.95, 283.30, 310.75, 336.71, 374.73, 378.16],
  name: 'Per Capita Consumption',
  marker: {color: 'red'},
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5];

var layout = {
  title: 'Year Wise Per Capita Generation and Consumption',
  xaxis: {tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    },
      
    dtick: 1
  },
  yaxis: {
    title: 'Fiscal Year',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'      
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    font:{size: 8},
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1,
  height: 500,
  weidth: 900
};

Plotly.newPlot('ywpcgc', data, layout);
