let sample_values = Object.values(sample_values[940]);

let labels = Object.keys (otu_ids);

function init() {

    // Default trace for the country data
    let trace = {
      values: sample_values,
      labels: otu_ids,
      type: "bar",
      sort: false // Ensure sectors are not reordered
    }


    let data = [trace];

  // Layout object
  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);

  // On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {

  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

// Initialize an empty array for the new country's data
let newdata = [];

// If/Else statement to assign the chosen country to the new dataset
if (dataset == '940') {
  newdata = 940;
}
else if (dataset == '2859') {
  newdata = 2859;
}
else if (dataset == '482') {
  newdata = 482;
}
else if (dataset == '2264') {
  newdata = 2264;
}
else if (dataset == '41') {
  newdata = 41;
}
else if (dataset == '1189') {
    newdata = 1189;
  }

  updatePlotly(newdata);

  function updatePlotly(newdata) {
    Plotly.restyle("bar", "values", [newdata]);
  }
  
  init();