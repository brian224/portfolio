$(function(){var t=$(".arrow"),w=$(".box"),B=$(".easter-egg"),v=$(".footer"),C=$(".header"),g=$(".main_menu .link"),h=$(".mainWrap"),b=$(".midWrap"),p=$(".photo > img"),a=$(".showTime"),y=$(".slideShow"),l=$(".submenu .link"),k=$(".tab"),s=14,c=[],d="",x="",A="",r="",j=p.attr("src"),q="?v="+new Date().getFullYear().toString()+(new Date().getMonth()+1).toString()+new Date().getDate().toString()+Math.floor((Math.random()*10000).toString()),o=new Konami(function(){u()}),n=navigator.userAgent.indexOf("Firefox")>-1,e=navigator.userAgent.indexOf("Safari")>-1,i=navigator.userAgent.indexOf("Chrome")>-1;if(window.location.href.split("http")[1]===undefined){d="http://brianlin224.theweb.tw/"}if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)&&$(window).width()<860){window.location.replace(d+"index-m.html")}else{if(window.localStorage!=undefined){x=window.localStorage.getItem("loadAnimate");A=window.localStorage.getItem("returnPage");r=window.localStorage.getItem("theme")}else{A="front_end";r="design"}if(x==="loaded"){C.addClass("show")}else{if(window.localStorage!=undefined){window.localStorage.setItem("loadAnimate","loaded")}$(".header, .midWrap, .footer").hide();C.css({top:"188px"});$("body").append('<div class="idx_anim"></div>');$(".idx_anim").delay(7561).fadeOut(1000);C.delay(8561).fadeIn(1000).animate({top:488},500);b.delay(10061).fadeIn(1000);v.delay(10061).fadeIn(1000)}}if(r==="design"||r==="about"||r==="skill"){$(".mainWrap."+r).addClass("curr");$(".main_menu .list").find("."+r).addClass("curr");if(r==="about"){p.attr("src",j+q)}}else{h.eq(0).addClass("curr");$(".main_menu .list").eq(0).find(".link").addClass("curr");if(window.localStorage!=undefined){window.localStorage.setItem("theme",$(".main_menu .list").eq(0).find(".link").data("theme"))}}if(A==="front_end"||A==="web_design"||A==="ad_design"||A==="other_design"){l.removeClass("curr");$(".submenu .link").each(function(){if($(this).data("type")===A){$(this).addClass("curr")}})}else{l.eq(0).addClass("curr");if(window.localStorage!=undefined){window.localStorage.setItem("returnPage","front_end")}}f();console.log("    ██╗      ██╗      ██       ██      ██╗        ██╗    ██╗        ██╗  ██████╗  █████╗ \n  ██████╗  ██████╗    ██║      ██║    ██╔╝        ╚██╗  ██╔╝        ╚██╗ ██╔══██╗██╔══██╗\n ██╔██║██╗██╔██║██╗██╗██║██╗██╗██║██╗████████╗████████╗████████╗████████╗██████╔╝███████║\n ╚═╝██║╚═╝╚═╝██║╚═╝╚██████╔╝╚██████╔╝╚██╔════╝╚════██╔╝╚██╔════╝╚════██╔╝██╔══██╗██╔══██║\n    ██║      ██║     ╚██╔╝    ╚██╔╝   ╚██╗        ██╔╝  ╚██╗        ██╔╝ ██████╔╝██║  ██║\n    ╚═╝      ╚═╝      ╚═╝      ╚═╝     ╚═╝        ╚═╝    ╚═╝        ╚═╝  ╚═════╝ ╚═╝  ╚═╝");g.on("click",function(){if(!$(this).hasClass(".curr")){var D=$(this).data("theme");g.removeClass("curr");$(this).addClass("curr");$(".mainWrap."+D).addClass("curr").siblings().removeClass("curr");if(window.localStorage!=undefined){window.localStorage.setItem("theme",D)}}});l.on("click",function(){if(!$(this).hasClass(".curr")){var D=$(this).data("type"),F;$(this).addClass("curr").parent(".list").siblings().find(".link").removeClass("curr");for(var E=0;E<c.length;E++){if(c[E].type==D){F=E}}if(F!=undefined){y.html(c[F].str);$(".works").each(function(){$(this).find(".list_item").eq(s/2).addClass("both")});$(".loading").hide();m()}else{f()}if(window.localStorage!=undefined){window.localStorage.setItem("returnPage",D);window.localStorage.setItem("work_idx",$(".works:visible").index())}else{A=D}}});b.on("click",".list_item",function(){if(!$(this).hasClass("empty")){if(window.localStorage!=undefined){A=window.localStorage.getItem("returnPage");window.localStorage.setItem("work_idx",$(".works:visible").index())}h.removeClass("curr");$(".mainWrap.detail").addClass("curr");z($(this).data("id"))}});$(window).resize(function(){if($(window).width()<860){window.location.href=d+"index-m.html"}});function f(){var G=$(".submenu .curr").data("type"),D=Math.ceil(Datas.Data[G].length/s),I=[],J={};for(var H=0,E=0;H<D;H++){I.push('<ul class="works">');for(var F=0;F<s;F++,E++){if(E>=0&&E<Datas.Data[G].length){I.push('<li class="list_item" data-id="'+Datas.Data[G][E].CaseType+"_"+Datas.Data[G][E].CaseID+'">');I.push('	<span class="pic middleSet">');I.push('		<img src="'+d+"img/pc/"+Datas.Data[G][E].CaseType+"/"+Datas.Data[G][E].CoverImg+'" alt="'+Datas.Data[G][E].CaseName+'">');I.push('		<div class="loading"></div>');I.push("	</span>");I.push('	<h3 class="name">'+Datas.Data[G][E].CaseName+"</h3>");I.push("</li>")}else{I.push('<li class="list_item empty">');I.push('	<span class="cross"></span>');I.push("</li>")}}I.push("</ul>")}y.html(I.join(""));J.type=G;J.str=I.join("");c.push(J);$(".works").each(function(){$(this).find(".list_item").eq(s/2).addClass("both")});$("img",".list_item").one("load",function(){$(".loading",$(this).parents(".pic")).hide()}).each(function(){if(this.complete){$(this).load()}});m()}function m(){var D=0;if(window.localStorage!=undefined&&window.localStorage.getItem("work_idx")!=0&&window.localStorage.getItem("work_idx")!=null){D=window.localStorage.getItem("work_idx")}if(y.find("ul.works").length>1){y.cycle({fx:"scrollHorz",timeout:9999999,speed:500,startingSlide:D,next:".arrow.right",prev:".arrow.left",pager:"#promoindex",pause:1});t.show()}else{t.hide()}}function z(I){var K=['<li class="back">BACK</li>'],J=[];for(var H=0;H<Datas.Data[A].length;H++){if(Datas.Data[A][H].CaseType+"_"+Datas.Data[A][H].CaseID==I){for(var G=1;G<=parseInt(Datas.Data[A][H].PhotoCount);G++){K.push('<li class="tag">'+G+"</li>");J.push('<li class="list middleSet"><img src="'+d+"img/pc/"+Datas.Data[A][H].CaseType+"/detail/"+Datas.Data[A][H].CaseType+Datas.Data[A][H].CaseID+"_0"+G+'.png?v=20150214" alt="'+Datas.Data[A][H].webDesc+'"><div class="loading"></div></li>')}if(Datas.Data[A][H].webLink!=""&&Datas.Data[A][H].webDesc!=""){var D=Datas.Data[A][H].webLink.split(","),F=Datas.Data[A][H].webDesc.split(",");for(var E=0;E<D.length;E++){J.push('<li class="link"><a class="webUrl" href="'+D[E]+'" target="_blank">'+F[E]+"</a></li>")}}else{if(Datas.Data[A][H].webLink===""&&Datas.Data[A][H].webDesc!=""){J.push('<li class="link"><span class="hint">'+Datas.Data[A][H].webDesc+"</span></li>")}}}}k.html(K.join(""));w.html(J.join(""));$(".back").animate({top:"0"},200);w.find(".list").eq(0).show();w.find(".link").eq(0).show();$(".tag").each(function(){if($(this).index()===1){$(this).delay(300).queue(function(){$(this).addClass("curr")})}else{$(this).delay(300).queue(function(){$(this).addClass("move")})}});$("img",".list").one("load",function(){$(".loading",$(this).parents(".list")).hide()}).each(function(){if(this.complete){$(this).load()}});$(".tag").on("click",function(){var L=$(this).index()-1;$(this).addClass("curr").removeClass("move").siblings(".tag").addClass("move").removeClass("curr");$(".box .list").eq(L).show().siblings(".list").hide();if($(".box .link").length!=1){if($(".box .link").eq(L).length!=0){$(".box .link").eq(L).show().siblings(".link").hide()}else{$(".box .link").hide()}}});$(".back").on("click",function(){h.removeClass("curr");$(".mainWrap.design").addClass("curr")})}function u(){if(i||e||n){var D=['<svg version="1.1" id="sign" class="signature flipInY animated" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">','<circle class="bg" fill-rule="evenodd" clip-rule="evenodd" fill="#D7DF00" cx="499.114" cy="506.532" r="428"/>','<path class="shadow" d="M609.171,920.141c228.43-60.783,364.334-295.235,303.551-523.666c-4.739-17.81-10.534-35.056-17.299-51.691l-110.444-64.021l-105.63-10.17L622.5,301.667l227.512,131.882l-29.338,82.746l-110.341-63.961l-27.857,35.086L653,470.333l-25.549,82.173L568.5,518.334l-29.676,6.117L467.75,483.25l-20.25,22l58.951,34.173l7.873,50.83L456.096,556.5l-12.81,36.372l-58.951-34.173l-4.26-2.748L309,514.75l-50.897,22.282L219,574.75l58.951,34.173l2.042,36.839L187.25,592l-15.428,68.001l6.527,73.706L523.72,933.908C552.064,932.247,580.665,927.726,609.171,920.141z"/>','<path class="stroke path1" stroke-miterlimit="10" d="M225.729,562.327c51.821-90.645,146.218-4.415,40.206,25.843c95.042,107.606-166.627,239.427-86.395,16.343"/>','<path class="stroke path2" stroke-miterlimit="10" d="M243.842,666.184c-1.709,18.932,58.815,49.183,125.682-94.479c-39.945,175.574,85.75,43.702,78.708-2.584c-15.712,61.443,18.275,76.753,36.978,59.764"/>','<path class="stroke path3" stroke-miterlimit="10" d="M565.783,535.562c-18.794-21.976-45.723,2.336-52.928,26.619c-18.746,42.647,24.906,86.071,50.565-1.256c14.474,100.81,74.927-27.819,83.444-77.106c0,0,20.119,38.708,14.349,84.466c16.882-40.131,33.244-91.247,41.747-103.141c-6.232,59.945,22.318,102.383,58.276,92.591c178.888-74.979,64.619-361.071-131.688-269.124"/>','<circle class="dot" cx="457" cy="493" r="16"/>',"</svg>"];a.attr("class","showTime flipOutY animated");B.finish().delay(1000).queue(function(){B.append(D.join(""))});$("body").finish().delay(8000).queue(function(){a.attr("class","showTime flipInY animated");B.empty()})}else{alert("請使用 Chrome 或 Safari 或 Firefox 來操作")}}});