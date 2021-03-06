const addPositionInput = document.getElementById("input_position");
const addTimeInput = document.getElementById("input_time");
const addButton = document.getElementById("add");
const dtTable = document.getElementById("dtTable");
const setTimeUnitButton = document.getElementById("set_time_unit_button");
const setPositionUnitButton = document.getElementById("set_position_unit_button");

const onKeyUp = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
}

const graphConfig = {
    type: "line",
    showLine: true,
    data: {
        datasets: [{
            borderColor: "rgba(0, 0, 0, 0.5)",
            pointBackgroundColor: "rgba(0, 0, 0, 0.5)",
            data: [],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true
                },
                type: "linear",
                grid: {
                    borderColor: "rgba(0, 0, 0, 1)",
                },
                ticks: {
                    color: "black"
                }
            },
            xAxes: {
                type: "linear",
                grid: {
                    borderColor: "rgba(0, 0, 0, 1)",
                },
                ticks: {
                    color: "black"
                }
            }
        },
        plugins: {
            title: {
                display: true,
                color: "rgba(0, 0, 0, 1)"
            }
        }
    }
}

var dtGraphConfig = JSON.parse(JSON.stringify(graphConfig));
dtGraphConfig.options.plugins.title.text = "Coal-solar hybrids VS Cost";
dtGraphConfig.data.datasets[0].label = "Graph";
dtGraphConfig.options.scales.yAxes.text = "d";
var dtGraph = new Chart(document.getElementById("dtChart"), dtGraphConfig);

var vtGraphConfig = JSON.parse(JSON.stringify(graphConfig));
vtGraphConfig.options.plugins.title.text = "Coal natural gas VS Cost";
vtGraphConfig.data.datasets.data = {x:0, y:0};
vtGraphConfig.data.datasets[0].label = "Graph";
dtGraphConfig.options.scales.yAxes.text = "v";
var vtGraph = new Chart(document.getElementById("vtChart"), vtGraphConfig);

const addData = (x, y) => {
    if(!x || !y) {
        return;
    }

    dtGraph.data.datasets[0].data.push({x: x, y: y})
    let tr = document.createElement("tr");
    let timeTd = document.createElement("td");
    timeTd.innerText = x;
    let positionTd = document.createElement("td");
    positionTd.innerText = y;
    tr.appendChild(timeTd);
    tr.appendChild(positionTd);
    dtTable.appendChild(tr);

    let thisPoint = dtGraph.data.datasets[0].data[dtGraph.data.datasets[0].data.length - 1];
    let lastPoint = dtGraph.data.datasets[0].data[dtGraph.data.datasets[0].data.length - 2];
    dtGraph.update();

    if (!lastPoint) {
        return;
    }

    let y1 = (thisPoint.y - lastPoint.y) / (thisPoint.x - lastPoint.x); // sometimes is nan
    if(isNaN(y1)) {
        y1 = 0;
    }
    if (y1 === Infinity) {
        y1 = lastPoint.y;
    }
    let x1 = thisPoint.x;

    let y2 = y1;
    let x2 = lastPoint.x;

    //console.log(`(${x2}, ${y2}) (${x1}, ${y1})`)

    vtGraph.data.datasets[0].data.push({x: x2, y: y2});
    vtGraph.data.datasets[0].data.push({x: x1, y: y1});
    vtGraph.update();
};

const updateTotals = (tf, df) => {
    console.log(dtGraph.data.datasets[0].data.length)
    if (dtGraph.data.datasets[0].data.length === 1) {
        document.getElementById("totals").innerText = `Cost: 0; Coal-solar hybrids: 0; Coal natural gas: 0`;
        return;
    }
    if (vtGraph.data.datasets[0].data.length < 1) {
        document.getElementById("totals").innerText = `Cost:??? Coal-solar hybrids:??? Coal natural gas:???`;
        return;
    }
    let di = dtGraph.data.datasets[0].data[0].y;
    let ti = dtGraph.data.datasets[0].data[0].x;
    if(di && ti) {
        let displacement = df - di;
        let velocity = displacement / (tf  - ti);

        let distance = 0;
        for(let i = 1; i < dtGraph.data.datasets[0].data.length; i++) {
            let lastD = dtGraph.data.datasets[0].data[i - 1].y;
            let thisD = dtGraph.data.datasets[0].data[i].y;
            distance += (thisD - lastD) * ((thisD - lastD) < 0 ? -1 : 1);
        }
        document.getElementById("totals").innerText = `Cost: ${displacement}; Coal-solar hybrids: ${distance}; Coal natural gas: ${velocity}`;

        return displacement;
    }
}

addButton.addEventListener("click", () => {
    addData(addTimeInput.value, addPositionInput.value);
    updateTotals(addTimeInput.value, addPositionInput.value);
})
addPositionInput.addEventListener("keyup", onKeyUp);
addTimeInput.addEventListener("keyup", onKeyUp); 
document.getElementById("reset").addEventListener("click", () => {
    dtGraph.data.datasets[0].data = [];
    vtGraph.data.datasets[0].data = [];
    dtTable.innerHTML = `<tr>
    <th>Sources</th>
    <th>Costs</th>
<tr>`;

    dtGraph.update();
    vtGraph.update();
    updateTotals();
})