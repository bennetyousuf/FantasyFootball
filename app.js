
// d3.selectAll("#positionDropDown").on("change", statChart);

// function statchart(adpData) {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#positionDropDown");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
  
//     // // Initialize x and y arrays
//     // var x = [];
//     // var y = [];
  
//     if (dataset === 'QB') {
//         d3.json("/api/v1.0/QB").then(data => {
//             var statTable = d3.select('tbody');
//             console.log(data);
//         })
//     }
  
//         // else if (dataset === 'RB') {
//         //     x = [10, 20, 30, 40, 50];
//         //     y = [1, 10, 100, 1000, 10000];
//         // }
// }
         
// // function adpGraph(adpData) {
// //     d3.json(flaskurl).then(data => {
        
// //     })

// // }

// function init(){
//     var dropDown = d3.select("#positionDropDown");

//     d3.json(flaskurl).then(positions => {
//         var positionIds = positions;
//         positionIds.forEach(adpData => {
//             dropDown.append("option").text(adpData).proptery("value",adpData);
//         })
//     })

//     statchart();
//     adpGraph();
// }

// function optionChange(newAdpData){
//     function statchart(newAdpData);
//     // function adpGraph(newAdpData);
// }

// init();

function bubbleChart (data) {
    var ADP = data.AverageDraftPosition;
    var Name = data.Name;
    var Position = data.Position;
    var LSFP = data.LastSeasonFantasyPoints;
    var PFP = ProjectedFantasyPoints;
    var colors = [];

    for (var i = 0; i < ADP.length; i++) {
    
        if (ADP[i] >= 2245) {
            colors.push("#581845");
        }
        else if (ADP[i] <= 2244 && ADP[i] >= 1000) {
            colors.push("#900C3F");
        }
        else if (ADP[i] <= 999 && ADP[i] >= 800) {
            colors.push("#C70039");
        }
        else if (ADP[i] <= 799 && ADP[i] >= 500) {
            colors.push("#FF5733");
        }
        else if (ADP[i] <= 499 && ADP[i] >= 200) {
            colors.push("#FFC300");
        }
        else {
            colors.push("#DAF7A6");
        }
    }

    var bubblelayout = {
        title: "Player Average Draft Positions",
        hovermode: "closest",
        xaxis: {title: "Average Draft Position" },
        height: 600,
        width: 600
    };

    var bubbledata = [
        {
            x: ADP,
            y: Position,
            text: "<h2>" + Name[i] + "</h2> <hr> <h3>ADP: " + ADP[i] + "</h3><h3>Projected Fantasy Points: " + PFP[i] + "</h3><h3>Position: " + Position[i] + "</h3>",
            mode: "markers",
            marker: {
                opacity: 0.3,
                size: 30,
                color: colors,
            }
        }
    ];
    Plotly.newPlot("bubble", bubbledata, bubblelayout);

}