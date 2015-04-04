$(function () {
	var Datas = {
		Data : {
			"front_end": [
				{
					"CaseName": "好房網市場週報",
					"CaseID": "06",
					"CaseType": "web",
					"CoverImg": "web_06.png",
					"PhotoCount": "4",
					"webLink": "http://news.housefun.com.tw/RealEstate",
					"webDesc": "好房網市場週報"
				},
				{
					"CaseName": "好房網",
					"CaseID": "03",
					"CaseType": "web",
					"CoverImg": "web_03.png",
					"PhotoCount": "4",
					"webLink": "http://www.housefun.com.tw/",
					"webDesc": "好房網"
				},
				{
					"CaseName": "中租租車",
					"CaseID": "01",
					"CaseType": "web",
					"CoverImg": "web_01.png",
					"PhotoCount": "3",
					"webLink": "http://www.rentalcar.com.tw",
					"webDesc": "中租租車官方網站"
				},
				{
					"CaseName": "物件即時通",
					"CaseID": "09",
					"CaseType": "web",
					"CoverImg": "web_35.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": "物件即時通"
				},
				{
					"CaseName": "馬來西亞皇萱灣",
					"CaseID": "07",
					"CaseType": "web",
					"CoverImg": "web_07.png",
					"PhotoCount": "3",
					"webLink": "http://event.housefun.com.tw/salesjvv/",
					"webDesc": "馬來西亞皇萱灣"
				},
				{
					"CaseName": "永慶房屋<br>房仲科技 3.0",
					"CaseID": "04",
					"CaseType": "web",
					"CoverImg": "web_04.png",
					"PhotoCount": "3",
					"webLink": "http://event.yungching.com.tw/brand/201409brand",
					"webDesc": "永慶房屋「房仲科技 3.0」"
				},
				{
					"CaseName": "中國信託<br>保險經紀人",
					"CaseID": "02",
					"CaseType": "web",
					"CoverImg": "web_02.png",
					"PhotoCount": "3",
					"webLink": "http://www.ctbcinsbrokers.com/Main",
					"webDesc": "中國信託 保險經紀人"
				},
				{
					"CaseName": "中國信託<br>活動網頁",
					"CaseID": "05",
					"CaseType": "web",
					"CoverImg": "web_05.png",
					"PhotoCount": "2",
					"webLink": "http://www.ctbcbank.com/html/fileUpload/internet/phaseII/homepage.html",
					"webDesc": "中國信託網路銀行2013全新風貌邀您立即體驗"
				},
				{
					"CaseName": "全家鮮食平台",
					"CaseID": "08",
					"CaseType": "web",
					"CoverImg": "web_08.png",
					"PhotoCount": "4",
					"webLink": "http://www.family.com.tw/Marketing/superbread/index.html,http://www.family.com.tw/Marketing/curry/,http://www.family.com.tw/marketing/oden/",
					"webDesc": "全家鮮食平台,全家咖哩祭,全家關東煮,全家超麵包"
				},
				{
					"CaseName": "中國信託<br>商業銀行",
					"CaseID": "10",
					"CaseType": "web",
					"CoverImg": "web_10.png",
					"PhotoCount": "4",
					"webLink": "https://www.ctbcbank.com/",
					"webDesc": "中國信託商業銀行"
				},
				{
					"CaseName": "遠傳電信",
					"CaseID": "11",
					"CaseType": "web",
					"CoverImg": "web_11.png",
					"PhotoCount": "4",
					"webLink": "http://www.fetnet.net/Home/index.html",
					"webDesc": "遠傳電信"
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