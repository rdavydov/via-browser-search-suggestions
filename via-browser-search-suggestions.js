var autoComplete=function(){function e(e){function t(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function o(e,t,o){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o)}function s(e,t,o){e.detachEvent?e.detachEvent("on"+t,o):e.removeEventListener(t,o)}function n(e,s,n,l){o(l||document,s,function(o){for(var s,l=o.target||o.srcElement;l&&!(s=t(l,e));)l=l.parentElement;s&&n.call(l,o)})}if(document.querySelector){var l={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var o=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(o,"<b>$1</b>")+"</div>"},onSelect:function(){}};for(var c in e)e.hasOwnProperty(c)&&(l[c]=e[c]);for(var a="object"==typeof l.selector?[l.selector]:document.querySelectorAll(l.selector),u=0;u<a.length;u++){var i=a[u];i.sc=document.createElement("div"),i.sc.className="autocomplete-suggestions "+l.menuClass,i.autocompleteAttr=i.getAttribute("autocomplete"),i.setAttribute("autocomplete","off"),i.cache={},i.last_val="",i.updateSC=function(e,t){var o=i.getBoundingClientRect();if(i.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+l.offsetLeft)+"px",i.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+l.offsetTop)+"px",i.sc.style.width=Math.round(o.right-o.left)+"px",!e&&(i.sc.style.display="block",i.sc.maxHeight||(i.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(i.sc,null):i.sc.currentStyle).maxHeight)),i.sc.suggestionHeight||(i.sc.suggestionHeight=i.sc.querySelector(".autocomplete-suggestion").offsetHeight),i.sc.suggestionHeight))if(t){var s=i.sc.scrollTop,n=t.getBoundingClientRect().top-i.sc.getBoundingClientRect().top;n+i.sc.suggestionHeight-i.sc.maxHeight>0?i.sc.scrollTop=n+i.sc.suggestionHeight+s-i.sc.maxHeight:0>n&&(i.sc.scrollTop=n+s)}else i.sc.scrollTop=0},o(window,"resize",i.updateSC),document.body.appendChild(i.sc),n("autocomplete-suggestion","mouseleave",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&setTimeout(function(){e.className=e.className.replace("selected","")},20)},i.sc),n("autocomplete-suggestion","mouseover",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&(e.className=e.className.replace("selected","")),this.className+=" selected"},i.sc),n("autocomplete-suggestion","mousedown",function(e){if(t(this,"autocomplete-suggestion")){var o=this.getAttribute("data-val");i.value=o,l.onSelect(e,o,this),i.sc.style.display="none"}},i.sc),i.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){var e=0}e?i!==document.activeElement&&setTimeout(function(){i.focus()},20):(i.last_val=i.value,i.sc.style.display="none",setTimeout(function(){i.sc.style.display="none"},350))},o(i,"blur",i.blurHandler);var r=function(e){var t=i.value;if(i.cache[t]=e,e.length&&t.length>=l.minChars){for(var o="",s=0;s<e.length;s++)o+=l.renderItem(e[s],t);i.sc.innerHTML=o,i.updateSC(0)}else i.sc.style.display="none"};i.keydownHandler=function(e){var t=window.event?e.keyCode:e.which;if((40==t||38==t)&&i.sc.innerHTML){var o,s=i.sc.querySelector(".autocomplete-suggestion.selected");return s?(o=40==t?s.nextSibling:s.previousSibling,o?(s.className=s.className.replace("selected",""),o.className+=" selected",i.value=o.getAttribute("data-val")):(s.className=s.className.replace("selected",""),i.value=i.last_val,o=0)):(o=40==t?i.sc.querySelector(".autocomplete-suggestion"):i.sc.childNodes[i.sc.childNodes.length-1],o.className+=" selected",i.value=o.getAttribute("data-val")),i.updateSC(0,o),!1}if(27==t)i.value=i.last_val,i.sc.style.display="none";else if(13==t||9==t){var s=i.sc.querySelector(".autocomplete-suggestion.selected");s&&"none"!=i.sc.style.display&&(l.onSelect(e,s.getAttribute("data-val"),s),setTimeout(function(){i.sc.style.display="none"},20))}},o(i,"keydown",i.keydownHandler),i.keyupHandler=function(e){var t=window.event?e.keyCode:e.which;if(!t||(35>t||t>40)&&13!=t&&27!=t){var o=i.value;if(o.length>=l.minChars){if(o!=i.last_val){if(i.last_val=o,clearTimeout(i.timer),l.cache){if(o in i.cache)return void r(i.cache[o]);for(var s=1;s<o.length-l.minChars;s++){var n=o.slice(0,o.length-s);if(n in i.cache&&!i.cache[n].length)return void r([])}}i.timer=setTimeout(function(){l.source(o,r)},l.delay)}}else i.last_val=o,i.sc.style.display="none"}},o(i,"keyup",i.keyupHandler),i.focusHandler=function(e){i.last_val="\n",i.keyupHandler(e)},l.minChars||o(i,"focus",i.focusHandler)}this.destroy=function(){for(var e=0;e<a.length;e++){var t=a[e];s(window,"resize",t.updateSC),s(t,"blur",t.blurHandler),s(t,"focus",t.focusHandler),s(t,"keydown",t.keydownHandler),s(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}}return e}();!function(){"function"==typeof define&&define.amd?define("autoComplete",function(){return autoComplete}):"undefined"!=typeof module&&module.exports?module.exports=autoComplete:window.autoComplete=autoComplete}();

//global atrrs
var st = document.createElement('style');
st.textContent  = ".autocomplete-suggestions {text-align: left; cursor: default; border: 1px solid #ccc; border-top: 0; background: #fff; box-shadow: -1px 1px 3px rgba(0,0,0,.1);position: absolute; display: none; z-index: 9999; max-height: 500px; overflow: auto; overflow-y: auto; box-sizing: border-box;}.autocomplete-suggestion {border:0.5px outside rgba(50,50,50,1); position: relative; padding: 0 .6em; line-height: 1.6; white-space: nowrap; overflow:auto; text-overflow: clio; font-size: 1.02em; color: #333; }.autocomplete-suggestion b { font-weight: normal; color: #1f8dd6; }.autocomplete-suggestion.selected { background: #f0f0f0; }";
document.body.appendChild(st);
var searchInp = document.getElementById('search_input');
  	searchInp.setAttribute("type","search");
  	searchInp.setAttribute("aria-autocomplete","both");
  	searchInp.setAttribute("spellcheck","false");
  	searchInp.setAttribute("aria-haspopup", "false");
  	searchInp.setAttribute("autocapitalize","off");
  	searchInp.setAttribute("role", "combobox");
if (window.inHome)  {
searchInp.setAttribute("autocomplete", "on");
searchInp.setAttribute("autocorrect", "off");

}  	
//  type="search" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off"
// autocorrect="off" role="combobox" spellcheck="false" class="search" onfocus="showButton()" onblur="hideButton()"  value="" 	
  	
  	
  	
  	var logo = document.querySelector("a.logo");		
  	var logo2 = document.querySelector("a.logo+a");
  			
  	var bookmark_part = document.querySelector("#bookmark_part");		
  	var searchForm = document.querySelector(".search_bar");
  	var bg = document.querySelector(".frosted-glass");
  	var toShow;
  	
  	window.noUpAttr||searchInp.addEventListener("focus", ()=>{
	// alert(	searchInp.getAttribute("autocomplete"));
  	 toShow=1;
 	 searchForm.style.position="fixed"; 
 	 searchForm.style.top="0px"; 
 	 searchForm.style.width="100%";
 	 logo.style.display="none";		
 	 logo2&&(logo2.style.display="none");		
 	 bookmark_part&&(bookmark_part.style.display="none");
 	 //alert(bg);
 	 bg.style.backgroundColor="rgba(50, 50, 50, 0.2)";
 	 
 	 		
  	});
  	window.noUpAttr||searchInp.addEventListener("blur", ()=>{
  	toShow = 0;
		setTimeout(()=>{
		if (toShow) return;
		searchForm.style.position="";
		searchForm.style.top="";
		searchForm.style.width="";
		logo.style.display="";	
		logo2&&(logo2.style.display="");			
		bookmark_part&&(bookmark_part.style.display="");
		bg.style.backgroundColor="";
		},50);	
		
  	});
  	var Yahoo = {}; // реестр
  	Yahoo.url="https://search.yahoo.com/sugg/gossip/gossip-us-ura/?t_stmp=1553803922&l=1&bm=3&output=sd1&appid=fp&nresults=10&pq=&ipos=0&command=";
  	var Google ={};
  	Google.url="https://www.google.com/complete/search?&cp=4&client=mobile-gws-wiz-hp&xssi=&hl=ru-US&authuser=0&psi=&ei=&dpr=1.5&q="
//    	fetch(Yahoo.url).then(alert).catch(alert);
 function scriptRequest(term, onSuccess) {
 	var scriptJsonp;
	var callbackName = "term" + String(Math.random()).slice(-6);
	var url =Google.url + term + "&callback=Google." + callbackName;
  	Google[callbackName] = function(data) {
     	scriptOk = true;
    	delete Google[callbackName]; 
	   	onSuccess(data);
  	};
 	scriptJsonp = document.createElement('script');
 	scriptJsonp.src = url;
 	document.body.appendChild(scriptJsonp);	     	
 }
  	
var ac = new autoComplete({
	selector: 'input[id="search_input"]',
	minChars: 0,
	delay: 100,
	cache: 1,
	source: function(term, suggest){
		//	suggest(Yahoo["term"  + term].r.map(q=>q.k));
		var ans;
		term&&scriptRequest(term, (data)=> {suggest(data[0].map(mem=>mem[0].replace(/<\/?b>/g,"")));});
	},
	renderItem: function (item, search){
		if((item==search)||!searchInp.value/*||(search!=searchInp)/*||(searchInp!= document.activeElement)*/) return "";
		search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
		var shortedItem = (search.length>6)?item.replace(search,"..."):item;
		return '<div class="autocomplete-suggestion" data-val="' + item + '">' + shortedItem.replace(re, "<b>$1</b>") + '</div>';
	}
})
;
