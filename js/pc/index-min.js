$(function(){var C=$(".easter-egg"),b=$(".showTime"),w=b.find(".footer"),D=b.find(".header"),c=b.find(".midWrap"),h=D.find(".main_menu .link"),i=c.find(".mainWrap"),u=i.find(".arrow"),x=i.find(".box"),q=i.find(".photo > img"),z=i.find(".slideShow"),m=i.find(".submenu .link"),l=i.find(".tab"),t=14,d=[],a="https://cdn.rawgit.com/brian224/portfolio/master/",e="",y="",B="",s="",k=q.attr("src"),r="?v="+new Date().getFullYear().toString()+(new Date().getMonth()+1).toString()+new Date().getDate().toString()+Math.floor((Math.random()*10000).toString()),p=new Konami(function(){v()}),o=navigator.userAgent.indexOf("Firefox")>-1,f=navigator.userAgent.indexOf("Safari")>-1,j=navigator.userAgent.indexOf("Chrome")>-1;if(window.location.href.split("http")[1]===undefined){e="http://brianlin224.theweb.tw/"}if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)&&$(window).width()<860){window.location.replace(e+"index-m.html")}else{if(window.localStorage!==undefined){y=window.localStorage.getItem("loadAnimate");B=window.localStorage.getItem("returnPage");s=window.localStorage.getItem("theme")}else{B="front_end";s="design"}if(y==="loaded"){D.addClass("show")}else{if(window.localStorage!==undefined){window.localStorage.setItem("loadAnimate","loaded")}$(".header, .midWrap, .footer").hide();D.css({top:"188px"});$("body").append('<div class="idx_anim"></div>');$(".idx_anim").delay(7561).fadeOut(1000);D.delay(8561).fadeIn(1000).animate({top:488},500);c.delay(10061).fadeIn(1000);w.delay(10061).fadeIn(1000)}}if(s==="design"||s==="about"||s==="skill"){$(".mainWrap."+s).addClass("curr");$(".main_menu .list").find("."+s).addClass("curr");if(s==="about"){q.attr("src",k+r)}}else{i.eq(0).addClass("curr");$(".main_menu .list").eq(0).find(".link").addClass("curr");if(window.localStorage!==undefined){window.localStorage.setItem("theme",$(".main_menu .list").eq(0).find(".link").data("theme"))}}if(B==="front_end"||B==="web_design"||B==="ad_design"||B==="other_design"){m.removeClass("curr");$(".submenu .link").each(function(){if($(this).data("type")===B){$(this).addClass("curr")}})}else{m.eq(0).addClass("curr");if(window.localStorage!==undefined){window.localStorage.setItem("returnPage","front_end")}}g();console.log("    ██╗      ██╗      ██       ██      ██╗        ██╗    ██╗        ██╗  ██████╗  █████╗ \n  ██████╗  ██████╗    ██║      ██║    ██╔╝        ╚██╗  ██╔╝        ╚██╗ ██╔══██╗██╔══██╗\n ██╔██║██╗██╔██║██╗██╗██║██╗██╗██║██╗████████╗████████╗████████╗████████╗██████╔╝███████║\n ╚═╝██║╚═╝╚═╝██║╚═╝╚██████╔╝╚██████╔╝╚██╔════╝╚════██╔╝╚██╔════╝╚════██╔╝██╔══██╗██╔══██║\n    ██║      ██║     ╚██╔╝    ╚██╔╝   ╚██╗        ██╔╝  ╚██╗        ██╔╝ ██████╔╝██║  ██║\n    ╚═╝      ╚═╝      ╚═╝      ╚═╝     ╚═╝        ╚═╝    ╚═╝        ╚═╝  ╚═════╝ ╚═╝  ╚═╝");h.on("click",function(){if(!$(this).hasClass(".curr")){var E=$(this).data("theme");h.removeClass("curr");$(this).addClass("curr");$(".mainWrap."+E).addClass("curr").siblings().removeClass("curr");if(window.localStorage!==undefined){window.localStorage.setItem("theme",E)}}});m.on("click",function(){if(!$(this).hasClass(".curr")){var E=$(this).data("type"),G;$(this).addClass("curr").parent(".list").siblings().find(".link").removeClass("curr");for(var F=0;F<d.length;F++){if(d[F].type===E){G=F}}if(G!==undefined){z.html(d[G].str);$(".works").each(function(){$(this).find(".list_item").eq(t/2).addClass("both")});$(".loading").hide();n()}else{g()}if(window.localStorage!==undefined){window.localStorage.setItem("returnPage",E);window.localStorage.setItem("work_idx",$(".works:visible").index())}else{B=E}}});c.on("click",".list_item",function(){if(!$(this).hasClass("empty")){if(window.localStorage!==undefined){B=window.localStorage.getItem("returnPage");window.localStorage.setItem("work_idx",$(".works:visible").index())}i.removeClass("curr");$(".mainWrap.detail").addClass("curr");A($(this).data("id"))}});$(window).resize(function(){if($(window).width()<860){window.location.href=e+"index-m.html"}});function g(){var H=$(".submenu .curr").data("type"),E=Math.ceil(Datas.Data[H].length/t),J=[],K={};for(var I=0,F=0;I<E;I++){J.push('<ul class="works">');for(var G=0;G<t;G++,F++){if(F>=0&&F<Datas.Data[H].length){J.push('<li class="list_item" data-id="'+Datas.Data[H][F].CaseType+"_"+Datas.Data[H][F].CaseID+'">');J.push('	<span class="pic middleSet">');J.push('		<img src="'+a+"img/pc/"+Datas.Data[H][F].CaseType+"/"+Datas.Data[H][F].CoverImg+'" alt="'+Datas.Data[H][F].CaseName+'">');J.push('		<div class="loading"></div>');J.push("	</span>");J.push('	<h3 class="name">'+Datas.Data[H][F].CaseName+"</h3>");J.push("</li>")}else{J.push('<li class="list_item empty">');J.push('	<span class="cross"></span>');J.push("</li>")}}J.push("</ul>")}z.html(J.join(""));K.type=H;K.str=J.join("");d.push(K);$(".works").each(function(){$(this).find(".list_item").eq(t/2).addClass("both")});$("img",".list_item").one("load",function(){$(".loading",$(this).parents(".pic")).hide()}).each(function(){if(this.complete){$(this).load()}});n()}function n(){var E=0;if(window.localStorage!==undefined&&window.localStorage.getItem("work_idx")!==0&&window.localStorage.getItem("work_idx")!==null){E=window.localStorage.getItem("work_idx")}if(z.find("ul.works").length>1){z.cycle({fx:"scrollHorz",timeout:9999999,speed:500,startingSlide:E,next:".arrow.right",prev:".arrow.left",pager:"#promoindex",pause:1});u.show()}else{u.hide()}}function A(J){var L=['<li class="back">BACK</li>'],K=[];for(var I=0;I<Datas.Data[B].length;I++){if(Datas.Data[B][I].CaseType+"_"+Datas.Data[B][I].CaseID===J){for(var H=1;H<=parseInt(Datas.Data[B][I].PhotoCount,10);H++){L.push('<li class="tag">'+H+"</li>");K.push('<li class="list middleSet"><img src="'+a+"img/pc/"+Datas.Data[B][I].CaseType+"/detail/"+Datas.Data[B][I].CaseType+Datas.Data[B][I].CaseID+"_0"+H+'.png?v=20150214" alt="'+Datas.Data[B][I].webDesc+'"><div class="loading"></div></li>')}if(Datas.Data[B][I].webLink!==""&&Datas.Data[B][I].webDesc!==""){var E=Datas.Data[B][I].webLink.split(","),G=Datas.Data[B][I].webDesc.split(",");for(var F=0;F<E.length;F++){K.push('<li class="link"><a class="webUrl" href="'+E[F]+'" target="_blank">'+G[F]+"</a></li>")}}else{if(Datas.Data[B][I].webLink===""&&Datas.Data[B][I].webDesc!==""){K.push('<li class="link"><span class="hint">'+Datas.Data[B][I].webDesc+"</span></li>")}}}}l.html(L.join(""));x.html(K.join(""));$(".back").animate({top:"0"},200);x.find(".list").eq(0).show();x.find(".link").eq(0).show();$(".tag").each(function(){if($(this).index()===1){$(this).delay(300).queue(function(){$(this).addClass("curr")})}else{$(this).delay(300).queue(function(){$(this).addClass("move")})}});$("img",".list").one("load",function(){$(".loading",$(this).parents(".list")).hide()}).each(function(){if(this.complete){$(this).load()}});$(".tag").on("click",function(){var M=$(this).index()-1;$(this).addClass("curr").removeClass("move").siblings(".tag").addClass("move").removeClass("curr");$(".box .list").eq(M).show().siblings(".list").hide();if($(".box .link").length!==1){if($(".box .link").eq(M).length!==0){$(".box .link").eq(M).show().siblings(".link").hide()}else{$(".box .link").hide()}}});$(".back").on("click",function(){i.removeClass("curr");$(".mainWrap.design").addClass("curr")})}function v(){if(j||f||o){var E=['<svg version="1.1" id="sign" class="signature flipInY animated" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">','<circle class="bg" fill-rule="evenodd" clip-rule="evenodd" fill="#D7DF00" cx="499.114" cy="506.532" r="428"/>','<path class="shadow" d="M609.171,920.141c228.43-60.783,364.334-295.235,303.551-523.666c-4.739-17.81-10.534-35.056-17.299-51.691l-110.444-64.021l-105.63-10.17L622.5,301.667l227.512,131.882l-29.338,82.746l-110.341-63.961l-27.857,35.086L653,470.333l-25.549,82.173L568.5,518.334l-29.676,6.117L467.75,483.25l-20.25,22l58.951,34.173l7.873,50.83L456.096,556.5l-12.81,36.372l-58.951-34.173l-4.26-2.748L309,514.75l-50.897,22.282L219,574.75l58.951,34.173l2.042,36.839L187.25,592l-15.428,68.001l6.527,73.706L523.72,933.908C552.064,932.247,580.665,927.726,609.171,920.141z"/>','<path class="stroke path1" stroke-miterlimit="10" d="M225.729,562.327c51.821-90.645,146.218-4.415,40.206,25.843c95.042,107.606-166.627,239.427-86.395,16.343"/>','<path class="stroke path2" stroke-miterlimit="10" d="M243.842,666.184c-1.709,18.932,58.815,49.183,125.682-94.479c-39.945,175.574,85.75,43.702,78.708-2.584c-15.712,61.443,18.275,76.753,36.978,59.764"/>','<path class="stroke path3" stroke-miterlimit="10" d="M565.783,535.562c-18.794-21.976-45.723,2.336-52.928,26.619c-18.746,42.647,24.906,86.071,50.565-1.256c14.474,100.81,74.927-27.819,83.444-77.106c0,0,20.119,38.708,14.349,84.466c16.882-40.131,33.244-91.247,41.747-103.141c-6.232,59.945,22.318,102.383,58.276,92.591c178.888-74.979,64.619-361.071-131.688-269.124"/>','<circle class="dot" cx="457" cy="493" r="16"/>',"</svg>"];b.attr("class","showTime flipOutY animated");C.finish().delay(1000).queue(function(){C.append(E.join(""))});$("body").finish().delay(8000).queue(function(){b.attr("class","showTime flipInY animated");C.empty()})}else{alert("請使用 Chrome 或 Safari 或 Firefox 來操作")}}});