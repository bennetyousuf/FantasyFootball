
d3.selectAll("#positionDropDown").on("change", statChart);

function statchart(adpData) {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#positionDropDown");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // // Initialize x and y arrays
    // var x = [];
    // var y = [];
  
    if (dataset === 'QB') {
        d3.json("/api/v1.0/QB").then(data => {
            var statTable = d3.select('tbody');
            console.log(data);
        })
    }
  
        // else if (dataset === 'RB') {
        //     x = [10, 20, 30, 40, 50];
        //     y = [1, 10, 100, 1000, 10000];
        // }
}
         
// function adpGraph(adpData) {
//     d3.json(flaskurl).then(data => {
        
//     })

// }

function init(){
    var dropDown = d3.select("#positionDropDown");

    d3.json(flaskurl).then(positions => {
        var positionIds = positions;
        positionIds.forEach(adpData => {
            dropDown.append("option").text(adpData).proptery("value",adpData);
        })
    })

    statchart();
    adpGraph();
}

function optionChange(newAdpData){
    function statchart(newAdpData);
    // function adpGraph(newAdpData);
}

init();