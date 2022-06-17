
var trace1 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [16072, 14673, 15201, 17994, 19645, 21103, 22585, 26597, 31082, 35107, 35316],
  name: 'Public Sector Net Generation',
  text : '(MkWh)',
  marker: {color: 'rgb(55, 83, 109)'},
  type: 'bar'
};

var trace2 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [13175, 16682, 19917, 20235, 22550, 24733, 29608, 30679, 31595, 35426, 36102],
  name: 'Private Sector Net Generation',
  text : '(MkWh)',
  marker: {color: 'rgb(26, 118, 255)'},
  type: 'bar'
};

var trace3 = {
  x: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
  y: [17064, 15525, 16074, 19008, 20669, 22163, 23721, 27938, 32507, 36718, 37074],
  name: 'Total Net Generation',
  text : '(MkWh)',
  marker: {color: 'green'},
  type: 'bar'
};



var data = [trace1, trace2, trace3];

var layout = {
  title: 'Total Net Energy Generation',
  xaxis: {

     title: 'Fiscal Year',
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    },
      
    dtick: 1
  },
  yaxis: {
    title: 'Maximum Generation in MW',
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
    x: 0,
    y: 1.0,
    font:{ size: 8},
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1,
  height: 400,
  weidth: 900
};

Plotly.newPlot('tneg', data, layout);
