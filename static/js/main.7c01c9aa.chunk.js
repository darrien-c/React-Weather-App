(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),l=a(3),i=a.n(l),u=a(7),o=a(2),m=a(8),p=a.n(m),d=(a(44),a(20)),h=a.n(d),E=function(e){var t=e.forecasts,a=e.isLoading;t.sort((function(e,t){return t.dt_txt-e.dt_txt})),t.length=7;var n={swipe:!0,infinite:!0,adaptiveHeight:!0,arrows:!1,dots:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,adaptiveHeight:!0,infinite:!0,dots:!0}}]};return console.log(t),a?r.a.createElement("p",null):r.a.createElement("section",{className:"forecast-container"},r.a.createElement("h2",null,"Forecast"),r.a.createElement("div",{className:"forecast-wrapper"},r.a.createElement(h.a,n,t.map((function(e,t){return r.a.createElement("div",{key:t,className:"forecast-card"},r.a.createElement("p",null,(n=e.dt_txt,new Date(n).toISOString().split("T")[0])),r.a.createElement("p",null,(a=e.dt_txt,new Date(a).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))),r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:e.weather[0].description}),r.a.createElement("p",null,e.weather[0].description),r.a.createElement("p",null,Math.round(e.main.temp),r.a.createElement("sup",null,"\xb0C")));var a,n})))))},w=function(e){var t=e.weather,a=(e.isLoading,new Date),n=["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()],c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()]+" "+n+" "+a.getDate()+", "+a.getFullYear(),s=function(e){return new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return r.a.createElement("section",{id:"weather-app"},t.main&&r.a.createElement("div",{className:"weather-container"},r.a.createElement("div",{className:"city-heading"},r.a.createElement("h2",{className:"city-name"},t.name,", ",t.sys.country," "),r.a.createElement("h3",{className:"city-date"},c)),r.a.createElement("div",{className:"weather-app"},r.a.createElement("div",{className:"city"},r.a.createElement("div",{className:"city-info"},r.a.createElement("div",{className:"city-temp"},Math.round(t.main.temp),r.a.createElement("sup",null,"\xb0C"),r.a.createElement("h4",null,t.weather[0].description)),r.a.createElement("div",{className:"city-weather"},r.a.createElement("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:t.weather[0].description})))),r.a.createElement("div",{className:"extra-info"},r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,Math.round(t.main.temp_max)," ",r.a.createElement("sup",null,"\xb0C")),r.a.createElement("h4",null,"High")),r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,t.main.humidity),r.a.createElement("h4",null,"Humidity")),r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,t.wind.speed),r.a.createElement("h4",null,"Wind")),r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,Math.round(t.main.temp_min)," ",r.a.createElement("sup",null,"\xb0C")),r.a.createElement("h4",null,"Low")),r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,s(t.sys.sunrise)),r.a.createElement("h4",null,"Sunrise")),r.a.createElement("div",{className:"extra-box"},r.a.createElement("h4",null,s(t.sys.sunset)),r.a.createElement("h4",null,"Sunset"))))))},v=(a(60),"e07d6ec2285b805cff438c64609e3a00"),g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:v}});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&APPID=").concat(v,"&units=metric"),e.prev=1,e.next=4,p.a.get(a,{params:{q:t,APPID:v}});case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),"",e.t0.request||e.t0.request,c("Oops! Unable to find city, please try again!"),e.abrupt("return",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=Object(n.useState)(""),d=Object(o.a)(m,2),h=d[0],g=d[1],f=Object(n.useState)(""),y=Object(o.a)(f,2),b=(y[0],y[1]),x=Object(n.useState)(""),N=Object(o.a)(x,2),S=(N[0],N[1]),O=Object(n.useState)(!0),j=Object(o.a)(O,2),k=j[0],D=j[1],T=Object(n.useState)([]),M=Object(o.a)(T,2),L=M[0],P=M[1],_=Object(n.useState)([]),q=Object(o.a)(_,2),A=q[0],C=q[1],I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=14;break}return e.next=3,l(h);case 3:return a=e.sent,e.next=6,s(h);case 6:n=e.sent,P(a.list),C(n),b(n.coord.lat),S(n.coord.lon),D(!1),g(""),c("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-container"},r.a.createElement("h1",null,"Weather app"),r.a.createElement("input",{type:"text",className:"search",placeholder:"Search a city...",value:h,onChange:function(e){return g(e.target.value)},onKeyPress:I}),r.a.createElement("h2",{className:"error-msg"},a),r.a.createElement("div",null,r.a.createElement(w,{weather:A,isLoading:k}),r.a.createElement(E,{isLoading:k,forecasts:L})))};s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7c01c9aa.chunk.js.map