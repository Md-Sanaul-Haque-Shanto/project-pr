var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [166557.42, 150031.41, 151047.84, 175944.51, 183522.79, 180765.64, 207838.44, 215894.52, 211341.98, 269829.08, 267767.94],
  name: 'Natural Gas',
  text: 'MMCFT',
  marker: {color: '#8b0000'},
  type: 'bar'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [9.74, 118.78, 182.48, 266.11, 424.72, 378.13, 439.33, 512.56, 615.35, 480.06, 301.09],
  name: 'Furnace oil',
  text: 'Million liter',
  marker: {color: 'blue'},
  type: 'bar'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [124.69, 137.66, 59.89, 34.97, 175.00, 291.06, 238.22, 347.98, 795.34, 372.50, 11.93],
  name: 'HSD, SKO & LDO',
  text: 'Million liter',
  marker: {color: 'green'},
  type: 'bar'
};

var trace4 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [0.48, 0.41, 0.45, 0.59, 0.54, 0.52, 0.49, 0.59, 0.82, 0.57, 1.24],
  name: 'Coal',
  text: 'Million liter',
  marker: {color: 'grey'},
  type: 'bar'
};



var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: ' ',
  xaxis: {
    title: 'Fiscal Year',
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    },
      
    dtick: 1
  },
  yaxis: {
    title: 'In Million Ton',
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

Plotly.newPlot('ywfcpspp', data, layout);
