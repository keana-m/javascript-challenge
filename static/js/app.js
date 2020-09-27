// from data.js
var tableData = data;

// Reference table body
var tbody = d3.select("tbody");

// Console.log data from data.js
console.log(data);
tableData.forEach((UFO_Data) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Data).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });

});

  //Reference button
  var button = d3.select("#filter-btn");

  //Button click handler
  button.on("click", function() {
    console.log("Table Filtered!");
	
    //Clear tbody
    tbody.html("");
	
    //Reference to "Enter a Date" 
    var input = d3.select("#datetime");
	
    //Grab user input value
    var userInput = input.property("value");
	
    //Filter Table According to userInput
    var filterTable = tableData.filter(tableData => tableData.datetime === userInput);
    console.log(filterTable);
	
    //Add filterTable to tbody to 
    filterTable.forEach((UFO_Data) => {
      var row = tbody.append("tr");
      Object.entries(UFO_Data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });
