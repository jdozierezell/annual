var _sz=_sz||[];_sz.push(["accountid",6019066]);_sz.push(["heatmap",{matches:{permanent:["https://afsp.org","https://afsp.org/about-suicide/risk-factors-and-warning-signs/","https://afsp.org/about-suicide/suicide-statistics/","https://afsp.org/our-work/advocacy/advocacy-events/annual-advocacy-forum/2017-advocacy-forum/"],include:[],exclude:[]}}]);var _sz=_sz||[];(function(k,b,h,j){var a={curr:window.location.href,ref:b.referrer,esc:function(d){return encodeURIComponent(new String(d).replace(/(\r?\n)+/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/,""))},empty:function(d){return(d==j||d==null||d=="")},tag:function(d){return(b.getElementsByTagName)?b.getElementsByTagName(d):[]},id:function(d){return(b.getElementById)?b.getElementById(d):false},clone:function(m){var l={};for(var d in m){if(m.hasOwnProperty(d)){l[d]=m[d]}}return l},rnd:function(){return Math.floor(Math.random()*100000)},txt:function(d){return(d.textContent)?d.textContent:d.innerText},uuid:function(){var d=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d())},navtime:function(){var d=k.performance||k.webkitPerformance||k.mozPerformance||k.msPerformance;return !d||!d.timing||d.timing.navigationStart<1?null:(new Date).getTime()-d.timing.navigationStart},_isready:false,_readyhandlers:[],register:function(l,d){d.base=this.actions[l];this.actions[l]=d},actions:{},action:function(l,d){this.actions[l].apply(this.actions,d)},data:[],ready:function(d){if(d===j){return this._isready||a.done()}else{this.when(this.ready,d)}},done:function(){return(this._isloaded&&b&&b.body!=null&&(b.readyState=="interactive"||b.readyState=="complete"))},_isloaded:false,_whenTimer:null,when:function(d,m){var l=this.uuid();if(d()){m()}else{setTimeout(function(){a.when(d,m)},50)}},fmt:function(){var d=Array.prototype.slice.call(arguments);var o=d[0];var l=d.slice(1);for(var m=0;m<l.length;m++){var n=new RegExp("\\{"+m+"\\}","gm");o=o.replace(n,l[m])}return o},listen:function(d,l){if(d.addEventListener){d.addEventListener("mousedown",l,false)}else{if(d.attachEvent){d.attachEvent("onmousedown",l)}}},load:function(l){var m=b.createElement("script");m.type="text/javascript";m.async=true;m.src=l;var d=b.getElementsByTagName("script")[0];d.parentNode.insertBefore(m,d)},global:function(d){return(k[d]!==j&&k[d]!==null)?k[d]:null},_images:[],_idx:0,requesturl:function(m,l){var n=[];l.rnd=h.core.rnd();for(d in l){if(this.empty(l[d])){continue}n.push(d+"="+this.esc(l[d]))}var d=this._idx++,q=m+"?"+n.join("&");return q},request:function(l,d){var m=this.requesturl(l,d);this._images[e]=new Image();this._images[e].src="//"+m;this.log("Requesting {0}",m)},_logqueue:[],_logshown:false,log:function(){this._logqueue.push({type:"msg",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},warn:function(){this._logqueue.push({type:"warn",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},showlog:function(){this._logshown=true;var m=b.getElementById("szdebugarea");if(m){m.parentNode.removeChild(m)}a.cookie("szngdebug",1);var q="";for(var n=0;n<this._logqueue.length;n++){var p=this._logqueue[n];q+='<p style="padding:8px;margin:0;margin-bottom:8px;background:#'+(p.type=="msg"?"FFF7C9":"ca0000;color:white")+';">'+((p.type=="warn")?"<b>Warning:</b> ":"")+decodeURIComponent(new String(this.fmt.apply(this,p.msg)).replace(/(&[a-z_]+=|\?)/g,"<br />&nbsp;&nbsp;&nbsp;$1"))+"</p>"}var l,d;d=b.createElement("a");d.href="#";d.innerHTML="\u00D7 Close";d.style.cssText="display:block;float:right;color:black;text-decoration:none;";d.onclick=function(o){l.parentNode.removeChild(l);a._logshown=false;a.cookie("szngdebug",null);return false};l=b.createElement("div");l.style.cssText="position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999";l.innerHTML=q;l.id="szdebugarea";l.appendChild(d);b.body.appendChild(l)},cookie:function(t,y,u){if(typeof y!="undefined"){u=u||{path:"/"};if(y===null){y="";u.expires=-1}var r="";if(u.expires&&(typeof u.expires=="number"||u.expires.toUTCString)){var p;if(typeof u.expires=="number"){p=new Date();p.setTime(p.getTime()+(u.expires*24*60*60*1000))}else{p=u.expires}r="; expires="+p.toUTCString()}var w=u.path?"; path="+(u.path):"; path=/";var q=u.domain?"; domain="+(u.domain):"";var x=u.secure?"; secure":"";b.cookie=[t,"=",encodeURIComponent(y),r,w,q,x].join("")}else{var m=null;if(b.cookie&&b.cookie!==""){var l=b.cookie.split(";");for(var s=0;s<l.length;s++){var d=l[s].replace(/^\s+|\s+$/g,"");if(d.substring(0,t.length+1)==(t+"=")){m=decodeURIComponent(d.substring(t.length+1));break}}}return m}}};a.register("set",function(l,o){var m=l.split("."),n=h,d;while(m.length>0){d=m.shift();if(n[d]===j){n=0;break}if(m.length==0){break}n=n[d]}(n&&d)?n[d]=o:a.warn("No property named {0}",l)});a.register("register",function(d){a.register(d[0],d[1])});a.register("custom",function(l,n){var m="Running custom function";if(n&&n!=""){m+=": <strong>"+n+"</strong>"}a.log(m);try{l()}catch(d){a.warn("Custom function failed! "+d.message)}});a.register("setcurr",function(d){a.curr=d});a.register("setref",function(d){a.ref=d});a.register("loaded",function(){a._isloaded=true});a.register("showlog",function(){a.showlog()});function g(d){var l=d[0];if(a.actions[l]===j){a.action("set",d)}else{a.action(l,d.slice(1))}}var c=[];var f=[];for(var e=0;e<h.length;e++){c[e]=h[e];f[e]=h[e]}a.data=c;a.ready(function(){for(var d=0;d<f.length;d++){g(f[d])}while(a._readyhandlers.length>0){_readyhandlers.shift().call()}a._isready=true});h.push=function(d){a.data.push(d);a.ready()?g(d):a.data.push(d)};h.core=a})(window,document,_sz);(function(o,a,m,n){var h={url:o.location.href,ref:a.referrer,title:a.title,res:o.screen.width+"x"+o.screen.height,accountid:null,groups:null,session:null,path:null,hits:null,sw:null,ct:null,ft:null,guid:null,uid:null,cid:null,cvid:null,rt:m.core.navtime(),prev:null,useurl:null,ourl:null,luid:m.core.uuid(),feedbackid:null,addcid:null,dnt:null};m.analytics={config:{cantrack:true,noonclick:false,ready:true},cookie:{name:"nmstat",domain:a.domain},endpoint:{host:"us4",domain:"siteimprove.com",path:"image.aspx",fullpath:function(d,p){if(!p){p=d;d=this.host}return(d||this.host)+"."+this.domain+"/"+(p||this.path)}},state:{requested:false,requestTime:new Date(),tracked:false,onclickattached:false},opts:function(d){return h[d]},getsessid:function(){if(m.analytics.config.cantrack){var d=m.core.cookie(m.analytics.cookie.name);if(!d){d=(new Date()).getTime()+m.core.rnd();m.core.cookie(m.analytics.cookie.name,d,{expires:1000,domain:m.analytics.cookie.domain})}return d}else{return""}}};function k(p,d){d.prev=m.analytics.getsessid();d.rt=d.rt!==null?m.core.navtime():null;m.core.request(p,d)}function l(p,d){d.prev=m.analytics.getsessid();return m.core.requesturl(p,d)}function j(r){if(!m.analytics.config.cantrack||m.analytics.state.onclickattached){return}var s=function(v){try{if(v.href==null||v.href==""||v.href.toLowerCase().indexOf("javascript:")==0||v.href.indexOf("#")==0||v.href.charAt(v.href.length-1)=="#"||v.href==o.location.href||v.href.indexOf(o.location.href+"#")==0){return true}if(!(r instanceof Array)){return false}for(var u=0;u<r.length;u++){if(v.href.indexOf(r[u])!==-1){return true}}return false}catch(t){return true}};var d=m.core.tag("a");var p=m.core.tag("area");var q=function(v){for(var t=0;t<v.length;t++){var u=v[t];if(s(u)){continue}(function(w){m.core.listen(w,function(){m.push(["request",{ourl:w.href,ref:o.location,autoonclick:1,rt:null}])})})(u)}};m.core.log("Attaching onclick handlers");q(d);q(p);m.analytics.state.onclickattached=true}function e(){if(!m.core.empty(h.guid)){return}var d=null;if(!d){for(var p=0;p<a.forms.length;p++){var q=a.forms[p].action.toString().toUpperCase();if(~q.indexOf("NRNODEGUID")){d=q.substr(q.indexOf("NRNODEGUID")+11);if(d.indexOf("%7B")==0){d=d.substr(3,d.indexOf("%7D")-3)}m.core.log("Found nrnodeguid: {0}",d);break}}}h.guid=d}function g(q,d){var p=m.core.global(q);if(p){if(d&&d in h){h[d]=p}else{if(typeof p=="object"){m.push(["param",p])}else{m.core.warn("Nowhere to put legacy {0} (key {1}, value {2})",q,d,p)}}}}var b=0;function c(p,d,q){return{aid:h.accountid,luid:h.luid,c:p,a:d,l:q,cid:h.cid,cvid:h.cvid,o:++b,d:Math.round((new Date()-m.analytics.state.requestTime)/1000)}}function f(){var d=window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack;return d=="yes"||d=="1"||(window.external&&window.external.msTrackingProtectionEnabled&&window.external.msTrackingProtectionEnabled())}m.core.register("eventurl",function(q,d,r,p){if(!p){m.core.warn("You must provide a callback function");return}if(!q||!d){m.core.warn("Category and action must be provided for event.");return}else{if(!m.analytics.config.cantrack){return}}var s=l(m.analytics.endpoint.fullpath("event.aspx"),c(q,d,r));p(s)});m.core.register("event",function(p,d,q){if(!p||!d){m.core.warn("Category and action must be provided for event.");return}else{if(!m.analytics.config.cantrack){return}}k(m.analytics.endpoint.fullpath("event.aspx"),c(p,d,q))});m.core.register("legacy",function(p,d){if(d!==n){m.core.log("Setting legacy variable {0}, property {1}",p,d);g(p,d)}else{m.core.log("Setting legacy variable {0}, property {0}",p);g(p)}});m.core.register("dump",function(){console.debug(m.analytics);console.debug(h)});m.core.register("noonclick",function(d){m.analytics.config.noonclick=d});m.core.register("set",function(d,p){if(h.hasOwnProperty(d)){h[d]=p}else{this.set.base(d,p)}});m.core.register("breadcrumbs",function(p){if(!p||!a.querySelector){return}var d=a.querySelector(p);if(d){h.path=m.core.txt(d)}});m.core.register("groupselector",function(r){if(!r||!a.querySelectorAll){return}var q=a.querySelectorAll(r),d=[];for(var p=0;p<q.length;p++){var s=m.core.txt(q[p]);if(s!=null){d.push(s)}}if(d.length>0){h.groups=d.join(",");m.core.log("Groups set: {0}",d.join(", "))}});m.core.register("metagroupname",function(r){var q=m.core.tag("meta"),d=[];if(h.groups){d.push(h.groups)}for(var p=0;p<q.length;p++){if(q[p].name==r){d.push(q[p].content)}}if(d.length>0){h.groups=d.join(",")}});m.core.register("param",function(d,p){if(typeof d=="object"){for(i in d){m.push(["param",i,d[i]])}}else{m.core.log("Param {0} = {1}",d,p);h["grk_"+d]=p}});m.core.register("request",function(d){if(d.accountid===n){d.accountid=h.accountid}k(m.analytics.endpoint.fullpath(),d)});m.core.register("trackpageview",function(){var d=m.analytics;if(!d.state.tracked&&d.config.cantrack&&d.config.ready){k(d.endpoint.fullpath(),h);d.state.tracked=true;d.state.requestTime=new Date()}else{if(d.state.tracked){m.core.log("Already tracked...")}}});m.core.register("notrack",function(d){if(d===n){d=true}if(d){m.core.cookie("sz_notrack","true",{expires:1825})}else{m.core.cookie("sz_notrack",null)}m.analytics.config.cantrack=!d});m.tracking=function(){return m.analytics.config.cantrack};m.donottrack=function(){return h.dnt===true&&!!f()};m.core.register("trackdynamic",function(q){var d=h.url;h.url=o.location.href;h.ref=d;h.title=a.title;h.luid=m.core.uuid();h.rt=null;h.ourl=null;m.analytics.state.tracked=false;if(q&&q.length>0){for(var p=0;p<q.length;p++){m.push(q[p])}}if(!h.ourl){h.ourl=h.url}m.push(["invoketracking"])});m.core.register("invoketracking",function(){if(!!m.analytics.config.cantrack&&m.donottrack()){m.core.log("Do not track enabled");m.analytics.config.cantrack=false}if(!m.analytics.config.cantrack){m.core.log("Tracking not enabled, skipping invocation");return}e();m.push(["trackpageview"]);if(m.analytics.config.noonclick!==true){j(m.analytics.config.noonclick)}});m.core.ready(function(){m.core.log("Running ready at {0}",new Date().getTime());g("searchWord","sw");g("numberOfHits","hits");g("_szpars");if(m.core.cookie("sz_notrack")!==null){m.push(["notrack"])}m.push(["invoketracking"])})})(window,document,_sz);(function(p,c,n,o){var a={scrollDelay:350,resizeDelay:350};var m={running:false,initViewPort:null,supportQuerySelector:true,clickCount:0,scrollHandle:null,lastViewPort:{l:0,t:0},scrollCount:0};n.analytics.heatmap={config:a,state:m};var b={hostnameRx:/^([\w@:.-]+)$/i,pathnameRx:/((?:\/\w+)*\/[-\w.]+[^#&?\s]*)$/i,maxSrcLen:50,boundingElements:{A:true,AREA:true,ARTICLE:false,BODY:false,BUTTON:true,DIV:false,FOOTER:false,FRAME:false,IFRAME:false,H1:false,H2:false,H3:false,H4:false,H5:false,H6:false,HEADER:false,HTML:false,IMG:true,INPUT:true,LABEL:false,LI:false,MAIN:false,SECTION:false,SELECT:true,SPAN:false,TABLE:false,TD:false,TH:false,TEXTAREA:true}};var f={on:function(r,s,q){var d=s.split(" "),t=d.length;while(t--){if(r.addEventListener){r.addEventListener(d[t],q,false)}else{if(r.attachEvent){r.attachEvent("on"+d[t],q)}}}},off:function(r,s,q){var d=s.split(" "),t=d.length;while(t--){if(r.removeEventListener){r.removeEventListener(d[t],q,false)}else{if(r.detachEvent){r.detachEvent("on"+d[t],q)}}}},stop:function(d){if(d.stopPropagation){d.stopPropagation()}else{if(d.cancelBubble!=null){d.cancelBubble=true}}},sourceElement:function(d){return d.srcElement||d.target},map:function(d,q){var s=[];for(var r=0;r<d.length;r++){s.push(q(d[r],r))}return s},cssEscape:function(r){var d=r.charAt(0),q="";if(/^-+$/.test(r)){return"\\-"+r.slice(1)}if(/\d/.test(d)){q="\\3"+d+" ";r=r.slice(1)}q+=f.map(r.split(""),(function(s){if(/[\t\n\v\f]/.test(s)){return"\\"+s.charCodeAt().toString(16)+" "}return(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^_`{|}~]/.test(s)?"\\":"")+s})).join("");return q},isUniqueSelector:function(r,d){if(!m.supportQuerySelector||!r){return false}var q=c.querySelectorAll(r);return q.length===1&&q[0]===d},trim:function(d){return String.prototype.trim?d.trim():d.replace(/^\s+|\s+$/g,"")},pathFromSrc:function(r){var d=c.createElement("a");d.href=r;var q=d.pathname;d=null;return q},parent:function(d){var q=d.parentNode;return q.nodeType==1&&!(/\b(html|body|head)\b/i.test(q.tagName))?q:null},childSelector:function(d,v){if(!d.parentNode){return null}var t=d.parentNode.children,u=t.length,r=0,w=true;for(var q=0;q<u;q++){var s=t[q];if(s===d){r=q+1}else{if(s.tagName.toLowerCase()==v){w=false;if(r!==0){break}}}}if(w){return null}if(r===1){return":first-child"}if(r===u){return":last-child"}return":nth-child("+r+")"},pathSelector:function(q){var s=q.tagName.toLowerCase(),r=f.parent(q),d=f.childSelector(q,s);return(r?f.pathSelector(r)+">":"")+s+(d||"")},cssSelector:function(u){var D=u,H="",G="",v="",E="";do{if(!u.tagName){return""}var I=u.tagName.toLowerCase();if(/\b(html|body|head)\b/i.test(I)){return I+H}var z=u.id,r=f.trim(u.className),q=u.classList||r.split(/\s+/);if(typeof(z)!=="string"){z=null}if(z){z=f.cssEscape(z);G="#"+z+H;if(f.isUniqueSelector(G,D)){return G}G=I+"[id='"+z.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}var J="";if(r&&c.getElementsByClassName){var K=Infinity;for(var y=0,A=q.length;y<A;y++){var d=q[y],t=c.getElementsByClassName(d).length;if(t<K){K=t;J=f.cssEscape(d)}}G=I+"."+J+H;if(f.isUniqueSelector(G,D)){return G}if(z){G=I+"[id='"+z.replace("'","\\'")+"']."+J+H;if(f.isUniqueSelector(G,D)){return G}}}switch(I){case"a":var w=u.hash;if(w){G=I+"[href='"+w.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}E=((u.pathname||"").match(b.pathnameRx)||["",""])[1];if(E&&E.length<=b.maxSrcLen){G=I+"[href*='"+E.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}var x=(u.hostname.match(b.hostnameRx)||["",""])[1];if(x&&x.length<=b.maxSrcLen){G=I+"[href*='"+x.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}break;case"img":E=f.pathFromSrc(u.src);v=(E.match(b.pathnameRx)||["",""])[1];if(v&&E.length<=b.maxSrcLen){G=I+"[src*='"+v.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}break;case"input":case"button":case"select":case"textarea":var C=u.getAttribute("name");if(C){G=I+"[name='"+C.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}break;case"label":var B=u.getAttribute("for");if(B){G=I+"[for='"+B.replace("'","\\'")+"']"+H;if(f.isUniqueSelector(G,D)){return G}}break}var F=f.childSelector(u,I);if(F){H=I+F+H;if(f.isUniqueSelector(H,D)){return H}}else{if(z){H=I+"[id='"+z.replace("'","\\'")+"']"+H}else{if(J){H=I+"."+J+H}else{H=I+H;if(f.isUniqueSelector(H,D)){return H}}}}}while((u=u.parentNode)&&(H=">"+H));return H},viewPort:function(){return{l:Math.round((p.pageXOffset||c.documentElement.scrollLeft)-(c.documentElement.clientLeft||0)),t:Math.round((p.pageYOffset||c.documentElement.scrollTop)-(c.documentElement.clientTop||0)),w:Math.round(p.innerWidth||c.documentElement.clientWidth||p.screen.width),h:Math.round(p.innerHeight||c.documentElement.clientHeight||p.screen.height)}},elementPoint:function(q,d){q=q||p.event;var r=f.pagePoint(q);var s=d.getBoundingClientRect();var u=c.documentElement.scrollTop?c.documentElement.scrollTop:c.body.scrollTop;var t=c.documentElement.scrollLeft?c.documentElement.scrollLeft:c.body.scrollLeft;return{x:Math.round(r.x-(s.left+t)),y:Math.round(r.y-(s.top+u))}},pagePoint:function(d){d=d||p.event;var q=d.pageX;var r=d.pageY;if(q===o){q=d.clientX+c.body.scrollLeft+c.documentElement.scrollLeft;r=d.clientY+c.body.scrollTop+c.documentElement.scrollTop}return{x:q,y:r}},preEventHandler:function(d){if(m.scrollCount<1&&m.clickCount<1){e({pos:m.initViewPort,type:"scroll"})}}};var j={click:function(q){if(q.szbHandled===true){return}f.preEventHandler(q);m.clickCount++;var t=f.sourceElement(q);var d=t;while(d!=null&&b.boundingElements[d.tagName]==null){d=d.parentNode}if(d==null){return}var s=f.cssSelector(d);if(!s||s=="html"){return}var r={path:s,point:f.elementPoint(q,d),type:"click"};e(r);q.szbHandled=true},scroll:function(d){if(m.scrollHandle!=null){clearTimeout(m.scrollHandle)}m.scrollHandle=setTimeout(function(){f.preEventHandler(d);m.scrollCount++;var q=f.viewPort();if(q.t!=m.lastViewPort.t||q.h!=m.lastViewPort.h){e({pos:q,type:"scroll"});m.lastViewPort=q}},a.scrollDelay)},resize:function(q){var d=f.viewPort();if(!m.scrollCount||d.h!=m.lastViewPort.h){j.scroll()}}};function h(){if(m.supportQuerySelector){n.core.log("Attaching behaviour map mousedown handlers");f.on(c,"mousedown",j.click);for(var q in b.boundingElements){if(b.boundingElements.hasOwnProperty(q)&&b.boundingElements[q]==true){var d=n.core.tag(q);for(var r in d){f.on(d[r],"mousedown",j.click)}}}}n.core.log("Attaching behaviour map scroll + resize handlers");f.on(p,"scroll",j.scroll);f.on(p,"resize",j.resize)}function e(d){if(!d){return}var s;switch(d.type){case"click":s="c|"+d.point.x+"|"+d.point.y+"|"+d.path;break;case"scroll":s="s|"+d.pos.l+"|"+d.pos.t;break;default:return}var q=l(s);var r=n.analytics.endpoint.fullpath("heat.aspx");n.core.request(r,q)}var g=0;function l(d){var q=f.viewPort();return{aid:n.analytics.opts("accountid"),luid:n.analytics.opts("luid"),p:d,ww:q.w,wh:q.h,cid:n.analytics.opts("cid"),cvid:n.analytics.opts("cvid"),o:++g,d:Math.round((new Date()-n.analytics.state.requestTime)/1000),prev:n.analytics.getsessid()}}var k={keys:Object.keys?Object.keys:function(q){if(q!==Object(q)){throw new TypeError("Object.keys called on a non-object")}var d=[];for(var r in q){if(Object.prototype.hasOwnProperty.call(q,r)){d.push(r)}}return d},extract:function(d){var t={};for(var q=0;q<d.length;q++){var s=d[q].split("=");if(s.length>1){var r=s.shift();var u=s.join("=");if(u.length>0){t[r]=u}}}return t},decompose:function(s){s=encodeURI(decodeURI(f.trim(s||"").replace(/^.*?:\/\//g,"").split("#")[0]));var r=s.split("?");var d=r.shift().replace(/^www\./,"").replace(/\/+$/,"");var q=this.extract(r.join("?").split("&"));return{resource:d,params:q}},check_url:function(d,t){if(d.resource===t.resource){var s=this.keys(t.params);for(var q=0;q<s.length;q++){var r=s[q];if(d.params[r]==o||d.params[r]!==t.params[r]){return false}}return true}return false},check_list:function(q,s,d){s=s||[];for(var r=0;r<s.length;r++){if(s[r]!=o&&this.check_url(q,this.decompose(s[r].toLowerCase()))){if(d){d(s[r])}return true}}return false},enable:function(){var d=this.decompose(this.cur_url());var r,q;var s=d.resource&&this.check_list(d,this.matches.permanent.concat(this.matches.include),function(t){r=t})&&!this.check_list(d,this.matches.exclude,function(t){q=t});n.core.log('Behaviour map tracking match:<br/>include = "{0}"<br/>exclude = "{1}"',encodeURI(r||""),encodeURI(q||""));return s},matches:{permanent:[],include:[],exclude:[]},add_matches:function(d){if(d!=null){if(this.is_array(d.permanent)){this.matches.permanent=this.matches.permanent.concat(d.permanent)}if(this.is_array(d.include)){this.matches.include=this.matches.include.concat(d.include)}if(this.is_array(d.exclude)){this.matches.exclude=this.matches.exclude.concat(d.exclude)}}},replacements:[],add_replacement:function(d){if(this.is_function(d)){this.replacements.push(d)}},is_function:function(d){return d!=null&&(typeof d==="function")&&(d instanceof Function)},is_array:function(d){return d!=null&&(d instanceof Array)&&(d.concat!=o)&&(d.length!=o)},cur_url:function(){var q=n.core.curr.toLowerCase();if(this.replacements&&this.replacements.length>0){for(var d=0;d<this.replacements.length;d++){q=this.replacements[d](q)}}return q}};n.core.register("heatmapreplacement",function(d){k.add_replacement(d)});n.core.register("heatmap",function(d){k.add_matches(d.matches)});n.core.register("heatmapinit",function(){if(!n.analytics.config.cantrack||n.donottrack()){return}if(m.running){n.core.log("Behaviour map tracking already running");return}try{if(!k.enable()){n.core.log("Skipping behaviour map tracking");return}}catch(d){n.core.log("Skipping behaviour map tracking due to: {0}",d);return}try{m.supportQuerySelector=!!c.querySelectorAll&&c.querySelectorAll("body > *:nth-child(1)").length===1}catch(d){m.supportQuerySelector=false}n.core.log("Enabling behaviour map tracking");m.running=true;m.lastViewPort=f.viewPort();m.initViewPort=f.viewPort();h()});n.core.ready(function(){n.core.log("Running behaviour map ready at {0}",new Date().getTime());n.push(["heatmapinit"])})})(window,document,_sz);_sz.core._isloaded=true;