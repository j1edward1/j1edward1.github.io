var checkr;
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
	$('#wrapper').animate({ scrollTop: 4999 }, 1000);

}

//////////////////////////////
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
   
function jQURL(url, addx, fly) {
	$.ajax({
		url: url
	})
	.done(function(html) {
		var ln = Object.size(html);
		if (ln > 1) { 
			dosX = "✓"; 
			document.getElementById("tha_link").innerHTML = "<span></span>";
			clearTimeout(checkr);
			
			save_search(html,url,addx);
			if(fly){window.open(url, '_blank');}
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
		$("#tha_link").append( 
			"<br><br>"+ dosX +"    <a href='"+ url +"'>"+ addx +"</a>"
		);

	});
}

function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
	
/////////////////////////////
$("#fpm").click(function(){
	
	var fly = document.getElementById("fly").checked;
	var addy = document.getElementById("addy").value;
		addy = capital_letter(addy);
	
	if (addy != '' && addy != '123 ABC Lane') {
		var pog = "http://listing.fullpackagemedia.com/ut/";
		var link_1, link_2, link_3;
		var x, y, z;
		var temp, tag; 
		var unit = "";
	
		temp = addy.replace(/\n(.*)/, "");
		temp = temp.replace(/,(.*)/gi, "");
		if(temp.match("#")) { //grab apt #123 and cut it off from temp
			unit = temp.replace(/(.*)#/gi, "");
			temp = temp.replace(/#(.*)/, "");
		}
		temp = temp.replace(/\s/gi, "_");
		temp = temp.replace(/\./gi, "");
		if(temp.charAt(temp.length-1)=="_") 
			{ temp = temp.substr(0, temp.length-1); }
		tag = temp.replace(/(.*)\_/gi, "");
		tag = "_" + tag;
		temp = temp.replace(new RegExp(tag + '$'), "");
		if(unit != "")
			{ unit = "_" + unit; }	
			

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
			case "_Place":
			case "_Pl":
				x = "_Place";	y = "_Pl";	z = "";	break;
			case "_Boulevard":
			case "_Blvd":
				x = "_Boulevard";	y = "_Blvd";	z = "";	break;
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
				y = "";
				z = "";
		}
	
		
		link_1 = pog + temp + x + unit + ".html";
		var a = temp + x + unit;
		jQURL(link_1, a, fly);
	
		
		link_2 = pog + temp + y + unit + ".html";
		var b = temp + y + unit;
		jQURL(link_2, b, fly);
	
		
		link_3 = pog + temp + z + unit + ".html";
		var c = temp + z + unit;
		jQURL(link_3, c, fly);
	
	
	
	
	
	//////// IF NONE OF THOSE LINKS WORKED /////////
		var firstCheck = false;
		function check() {
			var tha_link = document.getElementById("tha_link").innerHTML;
			//if (tha_link == "") {
	
				
				var t, u, v;	
				
				
				if (unit != "" && !firstCheck) {
					link_1 = pog + temp + tag + ".html";
					var a = temp + tag;
					jQURL(link_1, a, fly);
					firstCheck = true;
					checkr = setTimeout(function(){ check(); }, 1000);
					
				} else if (nesw = temp.match(/(_N_|_N._|_North_|_E_|_E._|_East_|_S_|_S._|_South_|_W_|_W._|_West_)/i)) {	
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
				
				
					var link_n = pog + temp + tag + unit + ".html"; 
					document.getElementById("tha_link").innerHTML = "<br><h2'>Sorry, we couldn't find that place!</h2>Try this: <em><a href='"+link_n+"' style='background:#232932;color:#7a8ba3;' target='_blank'>"+link_n+"</a></em>";
				}
		
		
		
				else {
					$("#tha_link").append("<br><br><h2>Sorry, we couldn't find that place!</h2>We tried: <em>"
						+ "<a href='"+link_1+"' style='background:#232932;color:#7a8ba3;' target='_blank'>"+link_1+"</a><br>"
						+ "<a href='"+link_2+"' style='background:#232932;color:#7a8ba3;' target='_blank'>"+link_2+"</a><br>"
						+ "<a href='"+link_3+"' style='background:#232932;color:#7a8ba3;' target='_blank'>"+link_3+"</a>"
						+ "</em>");
				}
			
		
		//	} else { document.getElementById("tha_link").innerHTML = ""; }
		}


		checkr = setTimeout(function(){ check(); }, 2000);
	///////////////////////////////////////////////
	} 
	else {
		document.getElementById("tha_link").innerHTML = "<br><br><h2>Please enter a valid address.</h2>";
	}
});