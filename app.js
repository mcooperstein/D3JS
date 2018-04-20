// JS

/*
// Lesson 1
d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')
    .attr('class', 'heading')
    .text('updated h1 text');

d3.select('body').append('p').text('first paragraph')
d3.select('body').append('p').text('second paragraph')
d3.select('body').append('p').text('third paragraph')

d3.selectAll('p').style('color', 'blue')

// Lesson 2
let dataSet = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text('D3 is awesome!!')
*/

// Lesson 3
/*
let dataSet = [80, 100, 34, 99, 88, 54, 175, 130, 67];

let svgWidth = 500;
let svgHeight = 300;
let barPadding = 5;
let barWidth = (svgWidth / dataSet.length);

let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

let barChart = svg.selectAll('rect')
    .data(dataSet)
    .enter()
    .append('rect')
    .attr('y', function (d) {
        return svgHeight - d;
    })
    .attr('height', function (d) {
        return d;
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function (d, i) {
        let translate = [barWidth * i, 0];
        return `translate(${translate})`;
    })
    .attr('fill', '#115d8c')

let text = svg.selectAll("text")
    .data(dataSet)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("y", function (d, i) {
        return svgHeight - d - 3;
    })
    .attr("x", function (d, i) {
        return barWidth * i;
    })
    .attr("fill", "#a64c38");
*/

// Lesson Scales

/*
let dataSet = [1, 2, 3, 4, 5];

let svgWidth = 500;
let svgHeight = 300;
let barPadding = 5;
let barWidth = (svgWidth / dataSet.length);

let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight)

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataSet) * 1.25])
    .range([0, svgHeight])


let barChart = svg.selectAll('rect')
    .data(dataSet)
    .enter()
    .append('rect')
    .attr('y', function (d) {
        return svgHeight - yScale(d);
    })
    .attr('height', function (d) {
        return yScale(d);
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function (d, i) {
        let translate = [barWidth * i, 0];
        return `translate(${translate})`;
    })
    .attr('fill', '#115d8c')


let text = svg.selectAll("text")
    .data(dataSet)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("y", function (d, i) {
        return svgHeight - yScale(d) - 3;
    })
    .attr("x", function (d, i) {
        return barWidth * i;
    })
    .attr("fill", "#a64c38");
*/

// Lesson Axis
/*
var data = [80, 70, 56, 120, 100, 120, 40, 150];

var svgWidth = 400;
var svgHeight = 300;

var svg = d3.select('#axis')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([-10, d3.max(data)])
    .range([svgHeight, 0]);

var xAxis = d3.axisBottom().scale(xScale);

var yAxis = d3.axisLeft().scale(yScale);

svg.append('g')
    .attr('transform', 'translate(50,0)')
    .call(yAxis);

svg.append('g')
    .attr('transform', 'translate(50,280)')
    .call(xAxis);
*/

// SVG Shapes
/*
var svgWidth = 500;
var svgHeight = 400;

var svg = d3.select('#shapes')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var line = svg.append('line')
    .attr("x1", 100)
    .attr("x2", 400)
    .attr("y1", 300)
    .attr("y2", 300)
    .attr('stroke', 'red')
    .attr('stroke-width', 5)

var rect = svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 100)
    .attr('height', 80)
    .attr('fill', 'blue')

var rect2 = svg.append('rect')
    .attr('x', 300)
    .attr('y', 100)
    .attr('width', 100)
    .attr('height', 80)
    .attr('fill', 'blue')

var circle = svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 140)
    .attr('r', 40)
    .attr('fill', 'white')

var circle2 = svg.append('circle')
    .attr('cx', 350)
    .attr('cy', 140)
    .attr('r', 40)
    .attr('fill', 'white')
*/

// Pie Charts

var data = [
    {
        "result": "Win",
        "percentage": 54.8
    },
    {
        "result": "Loss",
        "percentage": 33
    },
    {
        "result": "OT Loss",
        "percentage": 12.2
    }
];

var svgWidth = 500;
var svgHeight = 300;
var radius = Math.min(svgWidth, svgHeight) / 2;

var svg = d3.select('.pie-chart')
    .attr('width', svgWidth)
    .attr('height', svgHeight);


// create group element to hold pie chart
/*var g = svg.append('g')
    .attr('transform', `translate${radius},${radius}`);*/
var g = svg.append('g')
    .attr('transform', `translate(${svgWidth/2},${svgHeight/2})`);


var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function (d) {
    return d.percentage;
})

var path = d3.arc().outerRadius(radius).innerRadius(0);

var arc = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')

arc.append('path')
    .attr('d', path)
    .attr('fill', function (d) {
        return color(d.data.percentage)
    });

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0)

arc.append('text')
    .attr('transform', function (d) {
        return `translate(${label.centroid(d)})`
    })
    .attr('text-anchor', 'middle')
    .attr('font-weight', 'bold')
    .text(function (d) {
        return d.data.result + ": " + d.data.percentage + "%"
    });
