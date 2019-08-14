addEventListener('load', function(e) {
//	document.querySelector('h1').innerHTML = 'Enter Shoot Address';
//	document.querySelector('title').innerHTML = 'Shoot Finder | Full Package Media';
});
/////////////////////////////


function save_search(html,url,addx) {

	var ht = JSON.stringify(html);
		ht = ht.replace(/(.*)(\<meta itemprop=\\"image\\" content=\\")/, "");
		ht = ht.replace(/\"\>(.*)/g,"");
		ht = ht.replace(/(.*)http/g,"http");

	
	var img = ht.replace(/(\?k=)(.*)/,""); 
	var add = addx.replace(/_/g, " ");
	var save = '<div class="box"><a href="' + url + '" target="_blank"><img src="' + img + '" alt="not available" /><em class="addr">' + add +  '</em></a></div>';
	
	//
	$("#boxes").prepend( 
		save
	);
	
/*	//// Set Cookie ////
	var num = 0;
	for (var i=1; i<21; ++i) {
		var c = "shoot_search_" + String(i);
		if (checkCookie(c)) {
			num = i+1;
		} else { break; }
	}
	
	var cname = "shoot_search_" + String(num);
	setCookie(cname, save, 50);
	////	
*/
}
/*
//function prev_search() {
//// Get Cookies Into Array////
	var ckie = new Array();
	var num = 0;
	var d = document.cookie.length;
	for (var i=0; i<d; ++i) {
		var c = "shoot_search_" + String(i+1);
		if (checkCookie(c)) { ckie[i] = getCookie(c);
		} else { break; }
	}
	
	var a = ckie.length + 1;
	var b = ckie.length - 19;
	for (var i=a; i>b; --i) {
		$("#boxes").append( 
			ckie[i]
		);
	}	
	
//} */
//////////////////////////////
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
   
function jQURL(url, addx) {
	$.ajax({
		url: url
	})
	.done(function(html) {
		var ln = Object.size(html);
		if (ln > 1) { 
			dosX = "✓"; 
			document.getElementById("tha_link").innerHTML = "<span></span>";

			save_search(html,url,addx);
			//window.open(url, '_blank');
		}
	});
}

function DOB(url, addx) {
	$.ajax({
		url: url
	})
	.done(function(html) {
		var ln = Object.size(html);
		if (ln == 0) { dosX = "X"; } else { window.open(url, '_blank'); }
/*		$("#tha_link").append( 
			"<br><br>"+ dosX +"    <a href='"+ url +"'>"+ addx +"</a>"
		);
*/
	});
}

	
/////////////////////////////
$("#fpm").click(function(){

	var addy = document.getElementById("addy").value;
	
	if (addy != '' && addy != '123 ABC Lane') {
		var pog = "http://listing.fullpackagemedia.com/ut/";
		var link_1, link_2, link_3;
		var x, y, z;
		var temp, tag;
	
		temp = addy.replace(/\n(.*)/, "");
		temp = temp.replace(/,(.*)/gi, "");
		temp = temp.replace(/\s/gi, "_");
			tag = temp.replace(/(.*)\_/gi, "");
			tag = "_" + tag
		temp = temp.replace(tag, "");	
	

		switch(tag) {
			case "_Avenue":
			case "_Ave":
				x = "_Avenue";	y = "_Ave";	z = "";	break;
			case "_Drive":
			case "_Dr":
				x = "_Drive";	y = "_Dr";	z = "";	break;
			case "_Street":
			case "_St":
				x = "_Street";	y = "_St";	z = "";	break;
			case "_Lane":
			case "_Ln":
				x = "_Lane";	y = "_Ln";	z = "";	break;
			case "_Court":
			case "_Ct":
				x = "_Court";	y = "_Ct";	z = "";	break;
			case "_Circle":
			case "_Cir":
				x = "_Circle";	y = "_Cir";	z = "";	break;
			case "_Trail":
			case "_Trl":
				x = "_Trail";	y = "_Trl";	z = "";	break;
			case "_Grove":
			case "_Gr":
				x = "_Grove";	y = "_Gr";	z = "";	break;
			case "_Terrace":
			case "_Ter":
				x = "_Terrace";	y = "_Ter";	z = "";	break;
			case "_Road":
			case "_Rd":
				x = "_Road";	y = "_Rd";	z = "";	break;
			case "_Way":
			case "_Wy":
				x = "_Way";	y = "_Wy";	z = "";	break;
			default:
				x = tag;
				y = tag;
				z = "";
		}
	
		
		link_1 = pog + temp + x + ".html";
		var a = temp + x;
		jQURL(link_1, a);
	
		
		link_2 = pog + temp + y + ".html";
		var b = temp + y;
		jQURL(link_2, b);
	
		
		link_3 = pog + temp + z + ".html";
		var c = temp + z;
		jQURL(link_3, c);
	

	//	$("#em").append(addy);
	
	
	
	
	//////// IF NONE OF THOSE LINKS WORKED /////////
		function check() {
			var tha_link = document.getElementById("tha_link").innerHTML;
			if (tha_link == "") {
	
				
				var t, u, v;	
				if (nesw = temp.match(/(_N_|_N._|_North_|_E_|_E._|_East_|_S_|_S._|_South_|_W_|_W._|_West_)/i)) {	
					temp = temp.replace(nesw[0], "***");
				
					//alert(nesw[0] +"   ||   "+ temp);

		
					switch(nesw[0]) {			
						case "_N_":			
						case "_N._":			
						case "_North_":
							t = "_";	u = "_N_";	v = "_N._";	w = "_North_";	break;
						case "_E_":
						case "_E._":
						case "_East_":
							t = "_";	u = "_E_";	v = "_E._";	w = "_East_";	break;
						case "_S_":
						case "_S._":
						case "_South_":
							t = "_";	u = "_S_";	v = "_S._";	w = "_South_";	break;
						case "_W_":
						case "_W._":
						case "_West_":
							t = "_";	u = "_W_";	v = "_W._";	w = "_West_";	break;
						default:
							t = "_";	u = nesw[0];	u = nesw[0];	w = "_";
					}
	
	
					temp = temp.replace("***", t);
					DOB(pog + temp + x + ".html", temp + x);
					DOB(pog + temp + y + ".html", temp + y);
					DOB(pog + temp + z + ".html", temp + z);
	
					temp = temp.replace(t, u);
					DOB(pog + temp + x + ".html", temp + x);
					DOB(pog + temp + y + ".html", temp + y);
					DOB(pog + temp + z + ".html", temp + z);
	
					temp = temp.replace(u, v);
					DOB(pog + temp + x + ".html", temp + x);
					DOB(pog + temp + y + ".html", temp + y);
					DOB(pog + temp + z + ".html", temp + z);
	
					temp = temp.replace(v, w);
					DOB(pog + temp + x + ".html", temp + x);
					DOB(pog + temp + y + ".html", temp + y);
					DOB(pog + temp + z + ".html", temp + z);
				
				
				
					document.getElementById("tha_link").innerHTML = "<br><h2>Sorry, we couldn't find that place!</h2>";
				}
		
		
		
				else {
					$("#tha_link").append("<br><br><h2>Sorry, we couldn't find that place!</h2>");
				}
			
		
			}
		}


		setTimeout(function(){ check(); }, 3000);
	///////////////////////////////////////////////
	} 
	else {
		document.getElementById("tha_link").innerHTML = "<br><br><h2>Please enter a valid address.</h2>";
	}
});