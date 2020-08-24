// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    let row = tbody.append("tr");
    
    //Loop through each field in the dataRow and add
    //each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        });
    });
}
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
        
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
          // Apply `filter` to the table data to only keep the
          // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
    }
        
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    }
    
    //Attach an event filter for the form button
    d3.selectAll("#filter-button").on("click", handleClick);
    
    //Build the table when the page loads
    buildTable(tableData);





    let date = d3.select("#datetime").property("value")
 le 

    
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
    if (date) {filters["datetime"] = date; }
    else {delete filters["datetime"];} 
    
    if (city) {filters["city"] = city; }
    else {delete filters["city"]; }
    
    if (state) {filters["state"] = state; }
    else {delete filters["state"]; }
    
    if (country) {filters["country"] = country; }
    else {delete filters["country"]; }
    
    if (shape) {filters["shape"] = shape; }
    else {delete filters["shape"]; }
    
  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData

  // Loop through all of the filters and keep any data that
  // matches the filter values
  if (filters) { 
    Object.keys(filters).forEach(function(key){
      filteredData=filteredData.filter(row=> row[key] == filters[key]);
    });
  }
  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);
d3.selectAll("#filter-button").on("click", updateFilters);