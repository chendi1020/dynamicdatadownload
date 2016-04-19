var data = ["Undergraduate", "Graduate", "Professional"];

var select = d3.select('#filter')
  .append('select')
  	.attr('class','select')
    .on('change',onchange)
    

var options = select
  .selectAll('option')
	.data(data)
    .enter()
	.append('option')
		.text(function (d) { return d; });

