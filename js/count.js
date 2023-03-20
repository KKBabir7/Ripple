
			        var counter_list = [52,421,660];
	var str_counter_0 = counter_list[0];
	var str_counter_1 = counter_list[1];
	var str_counter_2 = counter_list[2];
	var display_str = " ";
	var display_div = document.getElementById("count");

	function incrementCount(current_count){
		setInterval(function(){
		
			while (display_div.hasChildNodes()) {
			    display_div.removeChild(display_div.lastChild);
			}
			str_counter_0++;
			if (str_counter_0 > 99) {
				str_counter_0 = 0; 
				str_counter_1++;   
			}
			if(str_counter_1>99999){
				str_counter_2++;
			}
			display_str = str_counter_2.toString()+"," + str_counter_1.toString() + ","+str_counter_0.toString();
			for (var i = 0; i < display_str.length; i++) {
				var new_span = document.createElement('span');
				new_span.className = 'num_tiles';
				new_span.innerText = display_str[i];
				display_div.appendChild(new_span);
			}
		},3000);
	}
			   