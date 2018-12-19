import * as d3 from "d3"

d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; })
    .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });


d3.select("body").transition()
    .style("background-color", "black");