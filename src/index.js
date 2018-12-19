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
var width = 300;  //画布的宽度
var height = 300;   //画布的高度

let rectHeight=30;

var svg = d3.select("body")     //选择文档中的body元素
    .append("svg")          //添加一个svg元素
    .attr("width", width)       //设定宽度
    .attr("height", height);    //设定高度

/*svg.selectAll("rect").data([20,30,40,50,60])
    .enter()
    .append("rect")
    .attr("x",20)
    .attr("y",function(d,i){
        return i * rectHeight;
    })
    .attr("width",function(d){
        return d;
    })
    .attr("height",rectHeight-2)
    .attr("fill","steelblue");*/

var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var linear = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 250]);
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",20)
    .attr("y",function(d,i){
        return i * rectHeight;
    })
    .attr("width",function(d){
        return linear(d);   //在这里用比例尺
    })
    .attr("height",rectHeight-2)
    .attr("fill","steelblue");



