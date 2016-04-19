

d3.csv("enrollmentfile.csv", function(data){
   var select1 = d3.select('#filter').append("select").attr('class','select').on('change',onchange).attr('id','lvl')
                        .selectAll("option")
                        .data(d3.map(data,function(d){return d.Student_Lvl;}).keys())
                        .enter()
                        .append("option")
                        .text(function(d){return d;})
                        //.attr("value",function(d){return d;});
                        .property("selected",function(d){return d === "Undergraduate";});
    
    var select2 = d3.select('#filter').append("select").attr('class','select').on('change',onchange).attr('id','term')
                        .selectAll("option")
                        .data(d3.map(data,function(d){return d.Semester;}).keys())
                        .enter()
                        .append("option")
                        .text(function(d){return d;})
                        .property("selected", function(d){return d === "FS15";});
})

