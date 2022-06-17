
var data = [{
  type: "pie",
  values: [10, 5, 3, 3.3],
  labels: ["diesel", "coal", "heavy oil", "renewable sources"],
  textinfo: "label+percent",

  insidetextorientation: "radial",
  automargin: true
}]

var layout = {

      title: 'State (i.e. 62.9% of Bangladeshi generated electricity)',


  
  height: 400,
  width: 600
  }

Plotly.newPlot('graphenergy', data, layout)