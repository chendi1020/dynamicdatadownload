d3.text("enrollmentfile.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);
                 var parsedCSV1= [];
                 for (var i=0;i<parsedCSV.length;i++){
                    if(parsedCSV[i][2]==="Undergraduate" && parsedCSV[i][0]==='FS15' ){
                        parsedCSV1.push(parsedCSV[i]);
                    }
                    
                }
                 
               

                var container = d3.select("#dvData")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV1)
                        .enter()
                        .append("tr")
                        
                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
