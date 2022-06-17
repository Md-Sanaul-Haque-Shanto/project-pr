 var trace1 = {
  x: ['Quad ACCC Dhaka', 'Twin ACCC Hamburg', 'Twin ACSR Mallard', 'ACSR Grosbeak', 'ACSR Grosbeak.', 'ACSR Grosbeak at Sherpur (Bogura)', 'ACSR Grosbeak at Rajshahi(N)132 kV', 'ACSR Grosbeak at Chowddagram', 'ACSR Grosbeak at Gopalganj(N)', 'ACSR Grosbeak at Gopalganj', 'ACSR Grosbeak..'],
  y: [163.55, 93.00, 158.24, 40.949, 78.972, 2.616, 1.624, 3.152, 6.12, 42, 49.4],
  type: 'bar',
  text: ['Payra-Gopalganj(N) 400kV double circuit', 'Patuakhali-Payra 230kV double circuit', 'Ishurdi-Rajshahi 230kV double circuit', 'Rangpur-Kurigram132 kV Single circuit', 'Magura-Narail132 kV double circuit', 'LILO of Bogura-Sirajganj 132 kV double circuit', 'LILO of Rajshahi-Chapai-Nawabganj-Amnura 132 kV double circuit', 'LILO of Feni-Cumilla(N) 132 kV double circuit', 'LILO of Faridpur-Madaripur 132 kV double circuit', 'LILO of Gopalganj-Madaripur 132 kV double circuit', 'Kodda–Rajendrapur132 kV double circuit'],
  marker: {
    color: 'green'
  }
};

var data = [trace1];

var layout = {
  title: 'Number of Transmission Line',
  font:{
    family: 'Raleway, sans-serif'
  },
  xaxis: {
      title: 'Conductor',
    },
    yaxis: {
      title: 'Quantity (Ckt. Km.)'
    },
  showlegend: false,
 
  height: 500,
  weidth: 900
};

Plotly.newPlot('transmissionL', data, layout);
