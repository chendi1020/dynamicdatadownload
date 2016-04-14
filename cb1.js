var data = ["Undergraduate", "Graduate", "Professional"];

var select = d3.select('body')
  .append('select')
  	.attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
	.data(data).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
	var selected = this.value;
    //selectValue = d3.select('select').property('value')
    displayOthers = this.checked ? "inline" : "none";
      display = this.checked ? "none" : "inline";
    
	//d3.select('body')
	//	.append('p')
	//	.text(selectValue + ' is the last selected option.')
    console.log(selected);
   
};

  //console.log(onchange().selectValue);