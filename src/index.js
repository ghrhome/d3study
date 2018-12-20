import * as d3 from "d3"


d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; })
    .text(function(d,i) {
        console.log(i);
        return "I’m number " + d + "!";
        });

 //d3.select("p:nth-child(1)").remove();


//柱状图
let width=500
let height=500

let svg=d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

let padding = {left:30, right:30, top:20, bottom:20};

let dataset=[10, 20, 30, 40, 33, 24, 12, 5]

let xScale = d3.scaleOrdinal()
    .domain([0, d3.range(dataset.length)])
    .range([0, width - padding.left - padding.right]);

let yScale= d3.scaleLinear()
    .domain([0,d3.max(dataset)])
    .rangeRound([0, height - padding.bottom -padding.top]);


let xAxis = d3.axisBottom(xScale)
let yAxis = d3.axisLeft(yScale);

let rectPadding = 4;
let rects= svg.selectAll(".myRect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr('class' , 'myRect')
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .attr('x', function(d,i){
        return xScale(i) +rectPadding/2
    })
    .attr('y',function(d){
        return yScale(d);
    })
    .attr("width", xScale.rangeBand() - rectPadding )
    .attr("height", function(d){
        return height - padding.top - padding.bottom - yScale(d);
    });


let texts = svg.selectAll(".MyText")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class","MyText")
    .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    .attr("x", function(d,i){
        return xScale(i) + rectPadding/2;
    } )
    .attr("y",function(d){
        return yScale(d);
    })
    .attr("dx",function(){
        return (xScale.rangeBand() - rectPadding)/2;
    })
    .attr("dy",function(d){
        return 20;
    })
    .text(function(d){
        return d;
    });

//添加x轴
svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
    .call(xAxis);

//添加y轴
svg.append("g")
    .attr("class","axis")
    .attr("transform","translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis);