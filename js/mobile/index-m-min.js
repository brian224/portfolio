$(function(){var h=$(".screen"),o=$(".subWrap"),i=$(".btn-menu"),l=$(".filter"),k=h.find(".midWrap"),m=o.find(".btn-theme"),n=k.find(".arrow"),c=k.find(".logo"),d=k.find(".works"),b=c.find(".signature"),j="https://cdn.rawgit.com/brian224/portfolio/master/",e=window.location.href.split("index")[0],a=0;if($(window).width()>860){window.location.replace(e+"index.html")}else{g()}k.delay(5000).queue(function(){b.remove()});i.on("click",function(){o.toggleClass("trigger");i.toggleClass("no-bg");h.toggleClass("scale");l.toggleClass("show")});m.on("click",function(){k.attr("class","midWrap "+$(this).data("menu"));o.attr("class","subWrap");n.removeAttr("style");$(".menu .list").removeClass("curr");$(this).parent().addClass("curr");h.removeClass("scale");l.removeClass("show");i.removeClass("no-bg");$("body").scrollTop(0)});l.on("click",function(){o.attr("class","subWrap");h.removeClass("scale");l.removeClass("show");i.removeClass("no-bg")});$(".works .list").on("click",function(){k.attr("class","midWrap detail");$(".menu .list").removeClass("curr");f($(this).data("id"),0)});n.on("click",function(){if($(this).hasClass("prev")){a=a-1}if($(this).hasClass("next")){a=a+1}f(0,a)});$(window).resize(function(){if($(window).width()>860){window.location.href=e+"index.html"}});function g(){var q=Datas.Data.front_end,r=[];for(var p=0;p<q.length;p++){r.push('<li class="list" data-id="'+q[p].CaseID+'">');r.push('	<img src="'+j+"img/mobile/works/"+q[p].CoverImg+'" alt="'+q[p].CaseName+'">');r.push('	<em class="case-name">'+q[p].CaseName+"</em>");r.push('	<span class="load-Wrap"><em class="text">- loading -</em></span>');r.push("</li>")}d.html(r.join(""));$("img",d).one("load",function(){$(".load-Wrap",$(this).parents(".list")).hide()}).each(function(){if(this.complete){$(this).load()}})}function f(r,u){var s=Datas.Data.front_end,t=[];if(r===0){t.push('<span class="img_bg"><img src="'+j+"img/mobile/detail/work"+s[u].CaseID+'_bg.png" alt="'+s[u].CaseName+'"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');t.push('<div class="project-info">');t.push('	<h2 class="project-name">'+s[u].CaseName+"</h2>");t.push('	<span class="info-desc">專案時間：<em class="time">'+s[u].Time+"</em></span>");t.push('	<span class="info-desc">特色說明：<em class="tech">'+s[u].SpecialTech+"</em></span>");if(s[u].webLink!==""){t.push('	<span class="info-desc url">網址：<a class="link" href="'+s[u].webLink+'" target="_blank">'+s[u].webLink.split("://")[1]+"</a></span>")}else{t.push('	<span class="info-desc url">網址：專案尚未上線，不便公開</span>')}t.push('	<ul class="photo-list">');for(var p=0;p<parseInt(s[u].PhotoCount,10);p++){t.push('		<li class="list"><img src="'+j+"img/mobile/detail/work"+s[u].CaseID+"_0"+(p+1)+'.png" alt="'+s[u].CaseName+'"><span class="load-Wrap"><em class="text">- loading -</em></span></li>')}t.push("	</ul>");t.push("</div>");if(u===0){$(".arrow.prev").hide()}else{$(".arrow.prev").show()}if(u===s.length-1){$(".arrow.next").hide()}else{$(".arrow.next").show()}}else{for(var q=0;q<s.length;q++){if(s[q].CaseID===r.toString()){t.push('<span class="img_bg"><img src="'+j+"img/mobile/detail/work"+s[q].CaseID+'_bg.png" alt="'+s[q].CaseName+'"><span class="load-Wrap"><em class="text">- loading -</em></span></span>');t.push('<div class="project-info">');t.push('	<h2 class="project-name">'+s[q].CaseName+"</h2>");t.push('	<span class="info-desc">專案時間：<em class="time">'+s[q].Time+"</em></span>");t.push('	<span class="info-desc">特色說明：<em class="tech">'+s[q].SpecialTech+"</em></span>");if(s[q].webLink!==""){t.push('	<span class="info-desc url">網址：<a class="link" href="'+s[q].webLink+'" target="_blank">'+s[q].webLink.split("://")[1]+"</a></span>")}else{t.push('	<span class="info-desc url">網址：此專案尚未上線，不便公開</span>')}t.push('	<ul class="photo-list">');for(var p=0;p<parseInt(s[q].PhotoCount,10);p++){t.push('		<li class="list"><img src="'+j+"img/mobile/detail/work"+s[q].CaseID+"_0"+(p+1)+'.png" alt="'+s[q].CaseName+'"><span class="load-Wrap"><em class="text">- loading -</em></span></li>')}t.push("	</ul>");t.push("</div>");a=q;if(q===0){$(".arrow.prev").hide()}else{$(".arrow.prev").show()}if(q===s.length-1){$(".arrow.next").hide()}else{$(".arrow.next").show()}}}}$(".mainWrap.detail").html(t.join(""));$("body").scrollTop(0);$("img",".photo-list").one("load",function(){$(".load-Wrap",$(this).parents(".photo-list")).hide()}).each(function(){if(this.complete){$(this).load()}});$("img",".img_bg").one("load",function(){$(".load-Wrap",$(this).parents(".img_bg")).hide()}).each(function(){if(this.complete){$(this).load()}})}});