	
// ----------------------------------Native JS


	var info1 = document.getElementById('a').childNodes[0],a, b, min, max;
	var info2 = document.getElementById('sum').childNodes[0],sum;
	var img_sum = document.getElementsByClassName('img_sum')[0];
    a = Math.floor(Math.random()* (10 - 6)) + 6;
	        max = 15-a;
			min = 11-a;
			b = Math.floor(Math.random()* (max - min)) + min;
			sum=a+b;
            document.getElementsByClassName('img_sum')[0].style.width = a*40+'px';
	info1.onkeypress = handle_1;
	info2.onkeypress = handle_2;

	function handle_1 (){        
		setTimeout(function(){
			var inp = Number(info1.value);
			console.log(inp);
			console.log(a);
            if(inp==a) { 
            info1 = info1.parentElement;
			info1.textContent = a; 
			info1.setAttribute('class','yellow');
            info2.style.display = 'inherit';
            var str = ' + '+ b +' = ';
            document.getElementById('smth').textContent=str;
            img_sum.style.left = a*40+36+'px';
            img_sum.style.width = b*40+'px';
		}   
		else {
			info1.style.color='red';
		}

		},0);
	};

	function handle_2 (){        
		setTimeout(function(){
            a = info2.value;
            if(a==sum) { 
			info2 = info2.parentElement;
            info2.textContent = sum;
            info2.setAttribute('class','yellow');
		}
		else {
			info2.style.color='red';
		}

		},0);
		
	}


// ----------------------------------jQuery

	// var info1 = $('#a input'),a, b, min, max;
	// var info2 = $('#sum input'),sum;
 //    a = Math.floor(Math.random()* (10 - 6)) + 6;
	//         max = 15-a;
	// 		min = 11-a;
	// 		b = Math.floor(Math.random()* (max - min)) + min;
	// 		sum=a+b;
 //            $('.img_sum').css('width',a*40);

	// info1.keypress(function(){        
	// 	setTimeout(function(){
	// 		var inp = Number(info1.val());
 //            if(inp==a) { 
	// 		info1.fadeOut().parent().text(a).attr('class','yellow'); 
 //            info2.fadeIn(400);
 //            var str = ' + '+ b +' = ';
 //            $('#smth').text(str);
 //            $('.img_sum').css({left:a*40+36,width:b*40});
	// 	}
	// 	else {
	// 		info1.css('color','red');
	// 	}

	// 	},0);
	// });

	// info2.keypress(function(){
        
	// 	setTimeout(function(){
 //            a=info2.val();
 //            if(a==sum) { 
	// 		info2.fadeOut().parent().text(sum).attr('class','yellow'); 
	// 	}
	// 	else {
	// 		info2.css('color','red');
	// 	}

	// 	},0);
		
	// });