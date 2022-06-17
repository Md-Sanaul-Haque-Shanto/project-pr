var data = [{
  values: [33, 125, 35, 210, 40, 20],
  labels: ['Fenchuganj CCPP unit 1 (ST)', 'Barapukuria Coal Thermal Power Plant Unit-1', 'Fenchuganj CCPP unit 2', '210 MW Siddhirganj Thermal Power Station', 'Kaptai Hydro-Unit 2', 'Rangpur GT Power Plant'],
  text: 'OH',
  textposition: 'inside',
  domain: {column: 0},

  insidetextorientation: "radial",
  automargin: true,
  name: 'OH',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [463,63],
  labels: ['OH Maintenance','HGPI Bhola CCPP (GT-1)'],
  text: 'HGPI',
  textposition: 'inside',
  domain: {column: 1},
  name: 'HGPI',
  hoverinfo: 'label+percent',
  hole: .4,
   insidetextorientation: "radial",
  automargin: true,
  type: 'pie'
}];

var layout = {
  title: 'Maintenance of Power Plants In FY 2019-20',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'OH',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'HGPI',
      x: 0.82,
      y: 0.5
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
  grid: {rows: 1, columns: 2}
};

Plotly.newPlot('maintenancepowerplants', data, layout);
