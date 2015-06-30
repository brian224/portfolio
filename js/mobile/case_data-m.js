$(function () {
	var Datas = {
		Data : {
			"front_end": [
				{
					"CaseName": "好房網-市場週報",
					"CaseID": "06",
					"CoverImg": "work_06.png",
					"PhotoCount": "3",
					"SpecialTech": "HighCharts、Lazy-load、Masonry、Ajax",
					"Time": "2014年 8月",
					"webLink": "http://news.housefun.com.tw/RealEstate"
				},
				{
					"CaseName": "好房網",
					"CaseID": "03",
					"CoverImg": "work_03.png",
					"PhotoCount": "5",
					"SpecialTech": "AngularJS、Google Map API、Web fonts、Ajax",
					"Time": "2014年 7月",
					"webLink": "http://www.housefun.com.tw/"
				},
				{
					"CaseName": "中租租車",
					"CaseID": "01",
					"CoverImg": "work_01.png",
					"PhotoCount": "3",
					"SpecialTech": "無",
					"Time": "2012年 11月",
					"webLink": "http://www.rentalcar.com.tw"
				},
				{
					"CaseName": "好房網-物件即時通",
					"CaseID": "09",
					"CoverImg": "work_09.png",
					"PhotoCount": "1",
					"SpecialTech": "single page website、Ajax",
					"Time": "2015年 4月",
					"webLink": ""
				},
				{
					"CaseName": "馬來西亞皇萱灣",
					"CaseID": "07",
					"CoverImg": "work_07.png",
					"PhotoCount": "3",
					"SpecialTech": "無",
					"Time": "2014年 1月",
					"webLink": "http://event.housefun.com.tw/salesjvv/"
				},
				{
					"CaseName": "永慶房屋「房仲科技 3.0」",
					"CaseID": "04",
					"CoverImg": "work_04.png",
					"PhotoCount": "3",
					"SpecialTech": "Parallax Scrolling",
					"Time": "2014年 7月",
					"webLink": "http://event.yungching.com.tw/brand/201409brand"
				},
				{
					"CaseName": "中國信託 保險經紀人",
					"CaseID": "02",
					"CoverImg": "work_02.png",
					"PhotoCount": "3",
					"SpecialTech": "無",
					"Time": "2012年 12月",
					"webLink": "http://www.ctbcinsbrokers.com/Main"
				},
				{
					"CaseName": "中國信託-活動網頁",
					"CaseID": "05",
					"CoverImg": "work_05.png",
					"PhotoCount": "4",
					"SpecialTech": "Flash",
					"Time": "2013年 2月",
					"SpecialTech": "",
					"Time": "2012年 11月",
					"webLink": "http://www.ctbcbank.com/html/fileUpload/internet/phaseII/homepage.html"
				},
				{
					"CaseName": "全家咖哩祭",
					"CaseID": "08",
					"CoverImg": "work_08.png",
					"PhotoCount": "2",
					"SpecialTech": "無",
					"Time": "2012年 10月",
					"webLink": "http://www.family.com.tw/Marketing/curry/"
				},
				{
					"CaseName": "中國信託 商業銀行",
					"CaseID": "10",
					"CoverImg": "work_10.png",
					"PhotoCount": "4",
					"SpecialTech": "無",
					"Time": "2013年 2月",
					"webLink": "https://www.ctbcbank.com/"
				},
				{
					"CaseName": "遠傳電信",
					"CaseID": "11",
					"CoverImg": "work_11.png",
					"PhotoCount": "4",
					"SpecialTech": "無",
					"Time": "2012年 11月",
					"webLink": "http://www.fetnet.net/Home/index.html"
				}
			]
		}
	}

	if ( ! window.Datas ) {
		window.Datas = Datas;
	} else {
		window.Datas = $.extend({}, window.Datas, Datas);
	}
});