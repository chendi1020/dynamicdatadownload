
                 
d3.text("enrollmentfile.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);
       graph =  d3.select("#dvData")
                    .append("table")

                     .selectAll("tr")
                        .data(parsedCSV)
                        .enter()
                        .append("tr")

                        
                     .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
    
});



function onchange() {
	//var selected = this.value;
    selectValue = d3.select('#lvl')[0][0].value
   selectValue1 = d3.select('#term')[0][0].value
  
     var parsedCSV1= [];
    d3.text("enrollmentfile.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);
                  console.log(selectValue);
                  console.log(selectValue1);
                 for (var i=0;i<parsedCSV.length;i++){
                    if((parsedCSV[i][2]===selectValue && parsedCSV[i][0]===selectValue1)|| parsedCSV[i]==parsedCSV[0] ){
                        parsedCSV1.push(parsedCSV[i]);
                        }   
                    };
        
      
                function update(){
                  //  console.log(parsedCSV1);
                var container = d3.select("#dvData");
                var rows =  container.selectAll("tr")
                        .data(parsedCSV1);
                        
                    
                     rows.enter().append("tr");
                        
                var cells = rows.selectAll("td")
                        .data(function(d) { return d; });
                    
                    cells.enter().append("td");
                    
                    cells.text(function(d) { return d; });
                    //cells.exit().remove();
                    rows.exit().remove();
                    
               
                };
        
                 
        
              update();
            }); 
   
};

