(function(){var m=this;function n(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function aa(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ba(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return v.apply(null,arguments)}var fa=Date.now||function(){return+new Date};
function w(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function ga(a,b){function c(){}c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c;a.base=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function ha(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ka(a){if(!la.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ra,"&#0;"));return a}var ma=/&/g,na=/</g,oa=/>/g,pa=/"/g,qa=/'/g,ra=/\x00/g,la=/[\x00&<>"']/;function x(a){return y(a,"&")?"document"in m?sa(a):ta(a):a}
function sa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(ua,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function ta(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var ua=/&([^;\s<&]+);?/g;function y(a,b){return-1!=a.indexOf(b)}var va=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function wa(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return va("0",Math.max(0,2-b))+a}function xa(a,b){return a<b?-1:a>b?1:0};var A=Array.prototype,B=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ya=A.filter?function(a,b,c){return A.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?
a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};function za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Aa(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}function Ba(a,b){var c;a.classList?c=a.classList.contains(b):(c=Aa(a),c=0<=B(c,b));return c}function Ca(a,b){a.classList?a.classList.add(b):Ba(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Da(a){a.classList?a.classList.remove("contains-mute-survey"):Ba(a,"contains-mute-survey")&&(a.className=ya(Aa(a),function(a){return"contains-mute-survey"!=a}).join(" "))};function Ea(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Fa(a){var b=D,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}var Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ia(){this.h="";this.f=null}function Ja(a){var b=new Ia;b.h=a;b.f=0}Ja("<!DOCTYPE html>");Ja("");var E;a:{var Ka=m.navigator;if(Ka){var La=Ka.userAgent;if(La){E=La;break a}}E=""};var Ma=y(E,"Opera")||y(E,"OPR"),F=y(E,"Trident")||y(E,"MSIE"),Na=y(E,"Edge"),Oa=y(E,"Gecko")&&!(y(E.toLowerCase(),"webkit")&&!y(E,"Edge"))&&!(y(E,"Trident")||y(E,"MSIE"))&&!y(E,"Edge"),Pa=y(E.toLowerCase(),"webkit")&&!y(E,"Edge");function Qa(){var a=E;if(Oa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Na)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pa)return/WebKit\/(\S+)/.exec(a)}function Ra(){var a=m.document;return a?a.documentMode:void 0}
var Sa=function(){if(Ma&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Qa())&&(a=b?b[1]:"");return F&&(b=Ra(),b>parseFloat(a))?String(b):a}(),Ta={};
function G(a){var b;if(!(b=Ta[a])){b=0;for(var c=ia(String(Sa)).split("."),d=ia(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");do{var t=k.exec(g)||["","",""],l=r.exec(h)||["","",""];if(0==t[0].length&&0==l[0].length)break;b=xa(0==t[1].length?0:parseInt(t[1],10),0==l[1].length?0:parseInt(l[1],10))||xa(0==t[2].length,0==l[2].length)||xa(t[2],l[2])}while(0==b)}b=Ta[a]=0<=b}return b}
var Ua=m.document,Va=Ua&&F?Ra()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;var Wa=!F||9<=Va,Xa=!Oa&&!F||F&&9<=Va||Oa&&G("1.9.1");F&&G("9");var Ya=F||Ma||Pa;function Za(a){var b=document;return u(a)?b.getElementById(a):a}function $a(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):ab(a,b)}function I(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=ab(a,b)[0];return d||null}
function ab(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className,k;if(k="function"==typeof h.split)k=0<=B(h.split(/\s+/),a);k&&(f[e++]=c)}f.length=e;return f}return g}
function bb(a,b){Ea(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:cb.hasOwnProperty(d)?a.setAttribute(cb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var cb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function J(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Wa&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ka(g.name),'"');if(g.type){f.push(' type="',ka(g.type),'"');var h={};Ha(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(u(g)?f.className=g:"array"==p(g)?f.className=g.join(" "):bb(f,g));2<d.length&&db(e,f,d);return f}
function db(a,b,c){function d(c){c&&b.appendChild(u(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ba(f)||ca(f)&&0<f.nodeType?d(f):C(eb(f)?za(f):f,d)}}function K(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function fb(a){return Xa&&void 0!=a.children?a.children:ya(a.childNodes,function(a){return 1==a.nodeType})}
function gb(a){var b;if(Ya&&!(F&&G("9")&&!G("10")&&m.SVGElement&&a instanceof m.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ca(b)&&1==b.nodeType?b:null}function eb(a){if(a&&"number"==typeof a.length){if(ca(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==p(a))return"function"==typeof a.item}return!1};var ib={R:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},P:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},jb=ib,jb=ib;var L={AED:[2,"dh","\u062f.\u0625.","DH"],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[0,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[0,
"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[2,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","Php"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u0440\u0443\u0431.",
"\u0440\u0443\u0431."],SAR:[2,"Rial","Rial"],SEK:[2,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u20b4","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[0,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var kb={DECIMAL_SEP:".",GROUP_SEP:",",PERCENT:"%",N:"0",aa:"+",X:"-",U:"E",$:"\u2030",V:"\u221e",Y:"NaN",DECIMAL_PATTERN:"#,##0.###",ca:"#E0",Z:"#,##0%",S:"\u00a4#,##0.00",T:"USD"},N=kb,N=kb;function lb(a,b,c){this.B=b||N.T;this.W=c||0;this.l=40;this.f=1;this.J=0;this.o=3;this.m=this.h=0;this.M=!1;this.I=this.H="";this.A="-";this.D="";this.C=1;this.j=[];this.F=this.L=!1;this.G=0;if("number"==typeof a)switch(a){case 1:O(this,N.DECIMAL_PATTERN);break;case 2:O(this,N.ca);break;case 3:O(this,N.Z);break;case 4:a=N.S;b=["0"];c=L[this.B][0]&7;if(0<c){b.push(".");for(var d=0;d<c;d++)b.push("0")}a=a.replace(/0.00/g,b.join(""));O(this,a);break;case 5:nb(this,1);break;case 6:nb(this,2);break;default:throw Error("Unsupported pattern type.");
}else O(this,a)}
function O(a,b){b.replace(/ /g,"\u00a0");var c=[0];a.H=P(a,b,c);for(var d=c[0],e=-1,f=0,g=0,h=0,k=-1,r=b.length,t=!0;c[0]<r&&t;c[0]++)switch(b.charAt(c[0])){case "#":0<g?h++:f++;0<=k&&0>e&&k++;break;case "0":if(0<h)throw Error('Unexpected "0" in pattern "'+b+'"');g++;0<=k&&0>e&&k++;break;case ",":0<k&&a.j.push(k);k=0;break;case ".":if(0<=e)throw Error('Multiple decimal separators in pattern "'+b+'"');e=f+g+h;break;case "E":if(a.F)throw Error('Multiple exponential symbols in pattern "'+b+'"');a.F=
!0;a.m=0;c[0]+1<r&&"+"==b.charAt(c[0]+1)&&(c[0]++,a.M=!0);for(;c[0]+1<r&&"0"==b.charAt(c[0]+1);)c[0]++,a.m++;if(1>f+g||1>a.m)throw Error('Malformed exponential pattern "'+b+'"');t=!1;break;default:c[0]--,t=!1}0==g&&0<f&&0<=e&&(g=e,0==g&&g++,h=f-g,f=g-1,g=1);if(0>e&&0<h||0<=e&&(e<f||e>f+g)||0==k)throw Error('Malformed pattern "'+b+'"');h=f+g+h;a.o=0<=e?h-e:0;0<=e&&(a.h=f+g-e,0>a.h&&(a.h=0));a.f=(0<=e?e:h)-f;a.F&&(a.l=f+a.f,0==a.o&&0==a.f&&(a.f=1));a.j.push(Math.max(0,k));a.L=0==e||e==h;d=c[0]-d;a.I=
P(a,b,c);c[0]<b.length&&";"==b.charAt(c[0])?(c[0]++,a.A=P(a,b,c),c[0]+=d,a.D=P(a,b,c)):(a.A=a.H+a.A,a.D+=a.I)}function nb(a,b){a.G=b;O(a,N.DECIMAL_PATTERN);a.h=0;a.o=2;if(0<a.h)throw Error("Can't combine significant digits and minimum fraction digits");a.J=2}
lb.prototype.format=function(a){if(isNaN(a))return N.Y;var b=[],c;c=a;if(0==this.G)c=Q;else{c=Math.abs(c);var d=ob(this,1>=c?0:pb(c)).K;c=ob(this,d+pb(qb(this,c/Math.pow(10,d)).intValue))}a/=Math.pow(10,c.K);b.push(c.prefix);d=0>a||0==a&&0>1/a;b.push(d?this.A:this.H);if(isFinite(a))if(a=a*(d?-1:1)*this.C,this.F)if(0==a)rb(this,a,this.f,b),sb(this,0,b);else{var e;e=Math.floor(Math.log(a)/Math.log(10)+2E-15);a/=Math.pow(10,e);var f=this.f;if(1<this.l&&this.l>this.f){for(;0!=e%this.l;)a*=10,e--;f=1}else 1>
this.f?(e++,a/=10):(e-=this.f-1,a*=Math.pow(10,this.f-1));rb(this,a,f,b);sb(this,e,b)}else rb(this,a,this.f,b);else b.push(N.V);b.push(d?this.D:this.I);b.push(c.O);return b.join("")};function qb(a,b){var c=Math.pow(10,a.o),d;if(0>=a.J)d=Math.round(b*c);else{d=b*c;var e=a.o;if(d){var f=a.J-pb(d)-1;f<-e?(e=Math.pow(10,e),d=Math.round(d/e)*e):(e=Math.pow(10,f),d=Math.round(d*e)/e)}d=Math.round(d)}e=d;isFinite(e)?(d=Math.floor(e/c),c=Math.floor(e-d*c)):(d=b,c=0);return{intValue:d,da:c}}
function rb(a,b,c,d){if(a.h>a.o)throw Error("Min value must be less than max value");d||(d=[]);b=qb(a,b);var e=Math.pow(10,a.o),f=b.intValue,g=b.da,h=0<a.h||0<g||!1;b=a.h;h&&(b=a.h);for(var k="",r=f;1E20<r;)k="0"+k,r=Math.round(r/10);var k=r+k,t=N.DECIMAL_SEP,r=N.N.charCodeAt(0),l=k.length,q=0;if(0<f||0<c){for(f=l;f<c;f++)d.push(String.fromCharCode(r));if(2<=a.j.length)for(c=1;c<a.j.length;c++)q+=a.j[c];c=l-q;if(0<c)for(var f=a.j,z=q=l=0,R=N.GROUP_SEP,M=k.length,H=0;H<M;H++){if(d.push(String.fromCharCode(r+
1*k.charAt(H))),1<M-H)if(z=f[q],H<c){var $b=c-H;(1===z||0<z&&1===$b%z)&&d.push(R)}else q<f.length&&(H===c?q+=1:z===H-c-l+1&&(d.push(R),l+=z,q+=1))}else{c=k;k=a.j;f=N.GROUP_SEP;q=0;z=c.length;R=[];for(l=k.length-1;0<=l&&0<z;l--){q=k[l];for(M=0;M<q&&0<=z-M-1;M++)R.push(String.fromCharCode(r+1*c.charAt(z-M-1)));z-=q;0<z&&R.push(f)}d.push.apply(d,R.reverse())}}else h||d.push(String.fromCharCode(r));(a.L||h)&&d.push(t);a=""+(g+e);for(e=a.length;"0"==a.charAt(e-1)&&e>b+1;)e--;for(f=1;f<e;f++)d.push(String.fromCharCode(r+
1*a.charAt(f)))}function sb(a,b,c){c.push(N.U);0>b?(b=-b,c.push(N.X)):a.M&&c.push(N.aa);b=""+b;for(var d=N.N,e=b.length;e<a.m;e++)c.push(d);c.push(b)}
function P(a,b,c){for(var d="",e=!1,f=b.length;c[0]<f;c[0]++){var g=b.charAt(c[0]);if("'"==g)c[0]+1<f&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):e=!e;else if(e)d+=g;else switch(g){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<f&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.B;else switch(a.W){case 0:d+=L[a.B][1];break;case 2:var g=a.B,h=L[g],d=d+(g==h[1]?g:g+" "+h[1]);break;case 1:d+=L[a.B][2]}break;case "%":if(1!=a.C)throw Error("Too many percent/permill");a.C=100;d+=N.PERCENT;
break;case "\u2030":if(1!=a.C)throw Error("Too many percent/permill");a.C=1E3;d+=N.$;break;default:d+=g}}return d}var Q={prefix:"",O:"",K:0};function ob(a,b){var c=1==a.G?jb.R:jb.P;if(3>b)return Q;b=Math.min(14,b);c=c[Math.pow(10,b)];if(!c)return Q;c=c.other;return c&&"0"!=c?(c=/([^0]*)(0+)(.*)/.exec(c))?{prefix:c[1],O:c[3],K:b-(c[2].length-1)}:Q:Q}function pb(a){for(var b=0;1<=(a/=10);)b++;return b};var tb=/^https?.*#ocr$|^https?:\/\/(secure\-..\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|aksecure\.imrworldwide\.com\/)/,ub=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.youtube\.com\/pagead\/sul)/;var S=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};w("yt.config_",S);w("yt.tokens_",window.yt&&window.yt.tokens_||{});w("yt.msgs_",window.yt&&window.yt.msgs_||{});function vb(a){var b=arguments;if(1<b.length){var c=b[0];S[c]=b[1]}else for(c in b=b[0],b)S[c]=b[c]}function T(a,b){return a in S?S[a]:b}function wb(a){"function"==p(a)&&(a=xb(a));return window.setTimeout(a,0)}
function xb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw yb(b),b;}}:a}function yb(a){var b=n("yt.www.errors.log");b?b(a,void 0):(b=T("ERRORS")||[],b.push([a,void 0]),vb("ERRORS",b))};var zb={},Ab=0,Bb=n("yt.net.ping.workerUrl_")||null;w("yt.net.ping.workerUrl_",Bb);function U(a,b,c){a&&(c?a&&(a=J("iframe",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):Cb(a,b))}function Db(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||U(a,void 0)}catch(b){U(a,void 0)}}
function Eb(a){return/^[\s\xa0]*$/.test(null==a?"":String(a))?!1:ub.test(a)||tb.test(a)}function Cb(a,b){var c=new Image,d=""+Ab++;zb[d]=c;c.onload=c.onerror=function(){b&&zb[d]&&b();delete zb[d]};c.src=a};function Fb(a){if(a=Za(a))a.style.visibility="visible"};function Gb(a,b,c){this.j=a;this.h=null;(a=b||null)||(a=Hb(this.j));a="("+a.join("|")+")";a=ha("__%s__",a);this.h=new RegExp(a,"g");this.f=c||{}}var Ib=/__([a-z]+(?:_[a-z]+)*)__/g;function Jb(a){a=Za(a).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");return new Gb(a,void 0,void 0)}function Hb(a){var b=[],c={};a.replace(Ib,function(a,e){e in c||(c[e]=!0,b.push(e))});return b}
Gb.prototype.render=function(a,b,c){var d=v(function(d,f){b&&(f=b(f));return c?a[f]||this.f[f]||"":ka(a[f]||this.f[f]||"")},this);return this.j.replace(this.h,d)};function V(){this.B=this.B;this.C=this.C}V.prototype.B=!1;V.prototype.dispose=function(){this.B||(this.B=!0,this.o())};V.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(){V.call(this);this.A=1;this.j=[];this.l=0;this.f=[];this.h={}}ga(W,V);W.prototype.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.A;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.A=e+3;d.push(e);return e};W.prototype.m=function(a){if(0!=this.l)return this.j.push(a),!1;var b=this.f[a];if(b){var c=this.h[b];if(c){var d=B(c,a);0<=d&&A.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}return!!b};
W.prototype.D=function(a,b){var c=this.h[a];if(c){this.l++;for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];try{for(e=0,f=c.length;e<f;e++){var g=c[e];this.f[g+1].apply(this.f[g+2],d)}}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.m(c)}return 0!=e}return!1};W.prototype.clear=function(a){if(a){var b=this.h[a];b&&(C(b,this.m,this),delete this.h[a])}else this.f.length=0,this.h={}};
W.prototype.o=function(){W.ea.o.call(this);this.clear();this.j.length=0};function Kb(a,b){this.version=a;this.args=b}function Lb(a){this.f=a}Lb.prototype.toString=function(){return this.f};var Mb=n("yt.pubsub2.instance_")||new W;W.prototype.subscribe=W.prototype.subscribe;W.prototype.unsubscribeByKey=W.prototype.m;W.prototype.publish=W.prototype.D;W.prototype.clear=W.prototype.clear;w("yt.pubsub2.instance_",Mb);var Nb=n("yt.pubsub2.subscribedKeys_")||{};w("yt.pubsub2.subscribedKeys_",Nb);var Ob=n("yt.pubsub2.topicToKeys_")||{};w("yt.pubsub2.topicToKeys_",Ob);var Pb=n("yt.pubsub2.isAsync_")||{};w("yt.pubsub2.isAsync_",Pb);w("yt.pubsub2.skipSubKey_",null);function Qb(a){Kb.call(this,1,arguments)}ga(Qb,Kb);var Rb=new Lb("timing-sent");var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{},Sb=v(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||aa,X),Tb=X.mark?function(a){X.mark(a)}:aa;
function Ub(a){Y().tick[a]=fa();Tb(a);var b=T("TIMING_ACTION");a=Y().tick;if(n("yt.timing.ready_")&&b&&a._start&&Vb()){var b=!0,c=T("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}if(b)if(c=Y().tick,a=Y().span,d=Y().info,b=n("yt.timing.reportbuilder_")){if(b=b(c,a,d,void 0))Wb(b),Xb()}else{b={v:2,s:T("CSI_SERVICE_NAME","youtube"),action:T("TIMING_ACTION")};X.now&&X.timing&&(e=X.timing.navigationStart+X.now(),e=Math.round(fa()-e),d.yt_hrd=e);var e=T("TIMING_INFO")||
{},f;for(f in e)d[f]=e[f];f=d.srt;delete d.srt;var g;f||0===f||(g=X.timing||{},f=Math.max(0,g.responseStart-g.navigationStart),isNaN(f)&&d.pt&&(f=d.pt));if(f||0===f)d.srt=f;d.h5jse&&(e=window.location.protocol+n("ytplayer.config.assets.js"),(e=X.getEntriesByName?X.getEntriesByName(e)[0]:null)?d.h5jse=Math.round(d.h5jse-e.responseEnd):delete d.h5jse);c.aft=Vb();e=c._start;if("cold"==d.yt_lt){g||(g=X.timing||{});var h;a:if(h=g,h.msFirstPaint)h=Math.max(0,h.msFirstPaint);else{var k=window.chrome;if(k&&
(k=k.loadTimes,"function"==p(k))){var k=k(),r=1E3*Math.min(k.requestTime||Infinity,k.startLoadTime||Infinity),r=Infinity===r?0:h.navigationStart-r;h=Math.max(0,Math.round(1E3*k.firstPaintTime+r)||0);break a}h=0}0<h&&h>e&&(c.fpt=h);h=Y().span;k=g.redirectEnd-g.redirectStart;0<k&&(h.rtime_=k);k=g.domainLookupEnd-g.domainLookupStart;0<k&&(h.dns_=k);k=g.connectEnd-g.connectStart;0<k&&(h.tcp_=k);k=g.connectEnd-g.secureConnectionStart;g.secureConnectionStart>=g.navigationStart&&0<k&&(h.stcp_=k);k=g.responseStart-
g.requestStart;0<k&&(h.req_=k);k=g.responseEnd-g.responseStart;0<k&&(h.rcv_=k);X.getEntriesByType&&Yb(c)}d.p=T("CLIENT_PROTOCOL")||"unknown";d.t=T("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&(d.ba=1);for(var t in d)"_"!=t.charAt(0)&&(b[t]=d[t]);T("CSI_MORE")&&(c.ps=fa());t={};g=[];for(var l in c)"_"!=l.charAt(0)&&(h=Math.max(Math.round(c[l]-e),0),t[l]=h,g.push(l+"."+h));b.rt=g.join(",");l={};g=[];for(var q in a)"_"!=q.charAt(0)&&(l[q]=a[q],g.push(q+"."+a[q]));b.it=
g.join(",");(q=n("ytdebug.logTiming"))&&q(b,t,l);Xb();T("EXP_DEFER_CSI_PING")?(Zb(),w("yt.timing.deferredPingArgs_",b),w("yt.timing.deferredPingTimer_",wb(Zb))):Wb(b);q=new Qb(t.aft+(f||0));(l=n("yt.pubsub2.instance_"))&&l.publish.call(l,Rb.toString(),Rb,q)}}}function Xb(){ac();Sb();w("yt.timing.pingSent_",!1)}function Vb(){var a=Y().tick;if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function bc(a){return Math.round(X.timing.navigationStart+a)}
function Yb(a){var b=window.location.protocol,c=X.getEntriesByType("resource"),d=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.googleapis.com/css?family=")})[0],c=c.filter(function(a){return 0==a.name.indexOf(b+"//fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});d&&0<d.startTime&&0<d.responseEnd&&(a.wfcs=bc(d.startTime),a.wfce=bc(d.responseEnd));c&&0<c.startTime&&0<c.responseEnd&&(a.wffs=bc(c.startTime),a.wffe=bc(c.responseEnd))}
function Wb(a){if(T("DEBUG_CSI_DATA")){var b=n("yt.timing.csiData");b||(b=[],w("yt.timing.csiData",b));b.push({page:location.href,time:new Date,args:a})}T("EXP_DEFER_CSI_PING")&&(b=n("yt.timing.deferredPingTimer_"),window.clearTimeout(b),w("yt.timing.deferredPingArgs_",null));var c="https:"==window.location.protocol?"https://gg.google.com/csi":"http://csi.gstatic.com/csi",b="",d;for(d in a)b+="&"+d+"="+a[d];a=c+"?"+b.substring(1);d=T("CSI_LOG_WITH_YT")?"/csi_204?"+b.substring(1):null;window.navigator&&
window.navigator.sendBeacon?(Db(a),d&&Db(d)):(U(a),d&&U(d));w("yt.timing.pingSent_",!0)}function Zb(a){if(T("EXP_DEFER_CSI_PING")){var b=n("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),Wb(b))}}function Y(){return n("ytcsi.data_")||ac()}function ac(){var a={tick:{},span:{},info:{}};w("ytcsi.data_",a);return a};var cc=n("yt.dom.getNextId_");if(!cc){cc=function(){return++dc};w("yt.dom.getNextId_",cc);var dc=0};function ec(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in fc||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}ec.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ec.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};var fc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1};var D=n("yt.events.listeners_")||{};w("yt.events.listeners_",D);var gc=n("yt.events.counter_")||{count:0};w("yt.events.counter_",gc);function hc(a,b){return Fa(function(c){return c[0]==a&&"click"==c[1]&&c[2]==b&&0==c[4]})}
function ic(a,b){if(a&&(a.addEventListener||a.attachEvent)){var c=hc(a,b);if(!c){var c=++gc.count+"",d;d=function(c){c=new ec(c);c.currentTarget=a;return b.call(a,c)};d=xb(d);D[c]=[a,"click",b,d,!1];a.addEventListener?a.addEventListener("click",d,!1):a.attachEvent("onclick",d)}}}function jc(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in D){var c=D[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete D[a]}}))}
function kc(a){for(var b in D)D[b][0]==a&&jc(b)}function lc(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};var mc=n("yt.pubsub.instance_")||new W;W.prototype.subscribe=W.prototype.subscribe;W.prototype.unsubscribeByKey=W.prototype.m;W.prototype.publish=W.prototype.D;W.prototype.clear=W.prototype.clear;w("yt.pubsub.instance_",mc);var nc=n("yt.pubsub.subscribedKeys_")||{};w("yt.pubsub.subscribedKeys_",nc);var oc=n("yt.pubsub.topicToKeys_")||{};w("yt.pubsub.topicToKeys_",oc);var pc=n("yt.pubsub.isSynchronous_")||{};w("yt.pubsub.isSynchronous_",pc);var qc=n("yt.pubsub.skipSubId_")||null;
w("yt.pubsub.skipSubId_",qc);function rc(a,b){var c=n("yt.pubsub.instance_");if(c){var d=c.subscribe("dispose",function(){if(!qc||qc!=d){var c=arguments,f=function(){nc[d]&&a.apply(b||window,c)};try{pc.dispose?f():wb(f)}catch(g){yb(g)}}},b);nc[d]=!0;oc.dispose||(oc.dispose=[]);oc.dispose.push(d);return d}return 0}function sc(a,b){var c=rc(function(d){a.apply(b,arguments);tc(c)},b)}
function tc(a){var b=n("yt.pubsub.instance_");b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete nc[a]}))};function Z(a,b,c,d){V.call(this);this.l=a;this.h=b;this.D=c;this.m=d;a=this.j=J("div",{"class":"ads-mute-button"});b=String.fromCharCode(215);if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}this.f=J("div");this.f.innerHTML=uc.render({mute_gone:this.h.mute_gone,
mute_question:this.h.mute_question,mute_undo:this.h.mute_undo});this.A=I("ads-mute-undo",this.f);ic(this.j,v(this.F,this));this.l.firstElementChild.appendChild(this.j);b=this.h.mute_survey;a=[];c=0;for(var e in b)a[c++]=e;e=Math.random;for(b=a.length-1;0<b;b--)c=Math.floor(e()*(b+1)),d=a[b],a[b]=a[c],a[c]=d;for(var f in a)e=J("input",{"class":"yt-uix-form-input-radio",type:"radio"}),b=J("span",{"class":"yt-uix-form-input-radio-element"}),e=J("span",{"class":"yt-uix-form-input-radio-container"},e,
b),e=J("label","ads-mute-option",e,a[f]),ic(e,v(this.G,this,this.h.mute_survey[a[f]])),this.f.firstChild.appendChild(e);ic(this.f,lc);ic(this.A,v(this.H,this));sc(this.dispose,this)}ga(Z,V);var uc=new Gb('<div class="ads-mute-survey"><span class="ads-mute-check"></span><b>__mute_gone__</b> __mute_question__<div class="ads-mute-undo">__mute_undo__</div></div>');Z.prototype.o=function(){C($a("ads-mute-option",this.f),function(a){kc(a)});kc(this.j);K(this.j);kc(this.f);K(this.f);kc(this.A)};
Z.prototype.F=function(a){a.stopPropagation();a.preventDefault();this.m&&U(this.h.mute_url);this.l.firstElementChild.appendChild(this.f);Ca(gb(this.f),"contains-mute-survey")};Z.prototype.H=function(a){a.stopPropagation();a.preventDefault();this.h.mute_undo_url&&this.m&&U(this.h.mute_undo_url);Da(gb(this.f));K(this.f)};Z.prototype.G=function(a,b){b.stopPropagation();b.preventDefault();this.m&&U(a);K(this.l);this.D();this.dispose()};var vc,wc,xc=[];function yc(a,b,c){vc=Jb(a);wc=Jb(b);c&&Jb(c)}
function zc(a){C(a,function(a){var c=a.media_template_data[0];a.line1=x(a.line1);a.line2=x(a.line2);a.line3=x(a.line3);a.url=x(a.url);c.imageUrl=x(c.imageUrl);c.channelName=x(a.display_name?a.display_name:c.channelName);c.imageUrl&&(c.imageUrl=c.imageUrl.replace(/http(s)?:/,""));c.imageUrl&&y(c.imageUrl,"/vi/")&&(c.imageUrl=c.imageUrl.replace(/([mh]q)?default\.jpg/,"mqdefault.jpg"),c.imageUrl=c.imageUrl.replace(/\/([mh]q)?([1-9])\.jpg/,"/hq$2.jpg"));var d=a.duration/1E3,c=Math.floor(d/3600),e=d%3600,
d=Math.floor(e/60),e=e%60,c=c?ha("%s:%s:%s",c.toString(),wa(d),wa(e)):ha("%s:%s",d.toString(),wa(e));a.duration=c})}
function Ac(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0],f="";a.view_count&&(f=(new lb(1)).format(a.view_count));d.innerHTML=vc.render({title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,views:f,length_seconds:a.duration,video_id:e.videoId,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl},null,!0);e=I("yt-lockup-meta-info",d);f||(e.lastElementChild.style.display="none");a.view_url&&U(a.view_url);b&&new Z(d,a,Bc,c);return d}
function Bc(){var a=I("pyv-afc-ads-container");0==$a("ads-mute-button",a).length&&K(I("ad-info-container",a))}function Cc(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0];d.innerHTML=wc.render({title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl},null,!0);b&&new Z(d,a,Bc,c);return d}
function Dc(a,b){yc(I("pyv-afc-ads-video-template",b),I("pyv-afc-ads-channel-template",b),I("pyv-mute-template",b));var c=I("pyv-afc-ads-inner",b);C(a,function(a){var e=!T("SEARCH_PYV_DISABLE_MUTE")&&a.mute_url&&a.mute_survey,f=!T("SEARCH_PYV_DISABLE_MUTE_PINGS");e&&Ca(b,"pyv-afc-mute");a.media_template_data[0].videoId?c.appendChild(Ac(a,e,f)):c.appendChild(Cc(a,e,f));e=a.creative_view_url;/^[\s\xa0]*$/.test(null==e?"":String(e))||(a=x(a.creative_view_url),0<=B(xc,a)||xc.push(a))})}
function Ec(a){zc(a);var b=I("pyv-afc-ads-container");b&&(Dc(a,b),Fb(b),C(xc,function(a){U(a,void 0,Eb(a))}));Fb("results")};w("yt.www.ads.pyvsearch.pyvSearchTopAfcCallback",function(a){var b=I("pyv-afc-ads-container");a.length&&b?(Ub("afcs"),Ec(a)):Fb("results");Ub("afc")});w("yt.www.ads.pyvsearch.pyvSearchAdsCallback",function(){var a=I("pyv-afc-ads-inner");a&&(a=fb(a),C(a,function(a){(a=a.getAttributeNode("data-ad-impressions"))&&C(a.value.split(","),function(a){U(a,void 0,Eb(a))})}),Ub("resultspostdclk"))});})();
