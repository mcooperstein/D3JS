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
