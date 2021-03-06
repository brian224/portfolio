$(function () {
	var Datas = {
		Data : {
			"front_end": [
				{
					"CaseName": "好房網",
					"CaseID": "33",
					"CaseType": "web",
					"CoverImg": "web_33.png",
					"PhotoCount": "4",
					"webLink": "http://www.housefun.com.tw/",
					"webDesc": "好房網"
				},
				{
					"CaseName": "好房網市場週報",
					"CaseID": "29",
					"CaseType": "web",
					"CoverImg": "web_29.png",
					"PhotoCount": "4",
					"webLink": "http://news.housefun.com.tw/RealEstate",
					"webDesc": "好房網市場週報"
				},
				{
					"CaseName": "好房網M版",
					"CaseID": "38",
					"CaseType": "web",
					"CoverImg": "web_38.png",
					"PhotoCount": "1",
					"webLink": "http://buy.housefun.com.tw/mobile",
					"webDesc": "好房網M版"
				},
				{
					"CaseName": "全家鮮食平台",
					"CaseID": "27",
					"CaseType": "web",
					"CoverImg": "web_27.png",
					"PhotoCount": "4",
					"webLink": "http://www.family.com.tw/Marketing/superbread/index.html,http://www.family.com.tw/Marketing/curry/,http://www.family.com.tw/marketing/oden/",
					"webDesc": "全家鮮食平台,全家咖哩祭,全家關東煮,全家超麵包"
				},
				{
					"CaseName": "遠傳電信",
					"CaseID": "37",
					"CaseType": "web",
					"CoverImg": "web_37.png",
					"PhotoCount": "4",
					"webLink": "http://www.fetnet.net/Home/index.html",
					"webDesc": "遠傳電信"
				},
				{
					"CaseName": "華南財富管理",
					"CaseID": "39",
					"CaseType": "web",
					"CoverImg": "web_39.png",
					"PhotoCount": "4",
					"webLink": "http://wealth.hncb.com.tw/",
					"webDesc": "華南財富管理"
				},
				{
					"CaseName": "中租租車",
					"CaseID": "26",
					"CaseType": "web",
					"CoverImg": "web_26.png",
					"PhotoCount": "3",
					"webLink": "http://www.rentalcar.com.tw",
					"webDesc": "中租租車官方網站"
				},
				{
					"CaseName": "永慶房屋<br>房仲科技 3.0",
					"CaseID": "31",
					"CaseType": "web",
					"CoverImg": "web_31.png",
					"PhotoCount": "3",
					"webLink": "http://brianlin224.theweb.tw/webLink/yc_brand/index.html",
					"webDesc": "永慶房屋「房仲科技 3.0」"
				},
				{
					"CaseName": "中國信託<br>保險經紀人",
					"CaseID": "23",
					"CaseType": "web",
					"CoverImg": "web_23.png",
					"PhotoCount": "3",
					"webLink": "http://www.ctbcinsbrokers.com/Main",
					"webDesc": "中國信託 保險經紀人"
				},
				{
					"CaseName": "中國信託<br>活動網頁",
					"CaseID": "24",
					"CaseType": "web",
					"CoverImg": "web_24.png",
					"PhotoCount": "2",
					"webLink": "http://www.ctbcbank.com/html/fileUpload/internet/phaseII/homepage.html",
					"webDesc": "中國信託網路銀行2013全新風貌邀您立即體驗"
				},
				{
					"CaseName": "家在雙和<br>活力 UP UP!",
					"CaseID": "42",
					"CaseType": "web",
					"CoverImg": "web_42.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "好房網<br>物件即時通",
					"CaseID": "35",
					"CaseType": "web",
					"CoverImg": "web_35.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": "※ 此專案尚未上線，不便公開"
				},
				{
					"CaseName": "好房網<br>新屋博覽會",
					"CaseID": "32",
					"CaseType": "web",
					"CoverImg": "web_32.png",
					"PhotoCount": "2",
					"webLink": "http://newhouse.housefun.com.tw/expo",
					"webDesc": "好房網新屋博覽會"
				},
				{
					"CaseName": "澳盛銀行",
					"CaseID": "40",
					"CaseType": "web",
					"CoverImg": "web_40.png",
					"PhotoCount": "3",
					"webLink": "http://anz.tw/zh/personal/digital/digitalbank.jsp",
					"webDesc": "澳盛銀行 - 遙控理財"
				},
				{
					"CaseName": "中國信託<br>商業銀行",
					"CaseID": "36",
					"CaseType": "web",
					"CoverImg": "web_36.png",
					"PhotoCount": "4",
					"webLink": "https://www.ctbcbank.com/",
					"webDesc": "中國信託商業銀行"
				},
				{
					"CaseName": "正宇生技",
					"CaseID": "34",
					"CaseType": "web",
					"CoverImg": "web_34.png",
					"PhotoCount": "3",
					"webLink": "http://zybio.com.tw/",
					"webDesc": "正宇生技"
				},
				{
					"CaseName": "好房網雙訊",
					"CaseID": "10",
					"CaseType": "other",
					"CoverImg": "other_10.png",
					"PhotoCount": "2",
					"webLink": "https://itunes.apple.com/tw/app/hao-fang-wang-shuang-xun/id838108164?mt=8,https://play.google.com/store/apps/details?id=com.housefun.doubleSMS&hl=zh_TW",
					"webDesc": "iTunes - 好房網雙訊,Google play - 好房網雙訊"
				},
				{
					"CaseName": "LUXGEN",
					"CaseID": "41",
					"CaseType": "web",
					"CoverImg": "web_41.png",
					"PhotoCount": "5",
					"webLink": "",
					"webDesc": "LUXGEN 納智捷汽車"
				},
				{
					"CaseName": "好房網新聞活動",
					"CaseID": "30",
					"CaseType": "web",
					"CoverImg": "web_30.png",
					"PhotoCount": "3",
					"webLink": "http://event.housefun.com.tw/329mag_press_conference/,http://event.news.housefun.com.tw/taoyuan/,http://event.housefun.com.tw/salesjvv/",
					"webDesc": "好房網不動產市場週報 創刊發表暨記者會,輕總價 藝術生活 桃園藝文特區,馬來西亞皇萱灣"
				},
				{
					"CaseName": "中國信託CI",
					"CaseID": "25",
					"CaseType": "web",
					"CoverImg": "web_25.png",
					"PhotoCount": "3",
					"webLink": "http://brianlin224.theweb.tw/webLink/CTCB_CI/global.html",
					"webDesc": "前往網頁"
				}
			],
			"web_design": [
				{
					"CaseName": "Wine95 Blog",
					"CaseID": "16",
					"CaseType": "web",
					"CoverImg": "web_16.png",
					"PhotoCount": "2",
					"webLink": "http://brianlin224.theweb.tw/webLink/wine95/wine_blog.html,webLink/wine95/post.html",
					"webDesc": "前往Blog首頁,前往文章內容頁"
				},
				{
					"CaseName": "airiti Nature",
					"CaseID": "15",
					"CaseType": "web",
					"CoverImg": "web_15.png",
					"PhotoCount": "4",
					"webLink": "http://www.airitinature.com",
					"webDesc": "華藝自然世界"
				},
				{
					"CaseName": "design ptc",
					"CaseID": "13",
					"CaseType": "web",
					"CoverImg": "web_13.png",
					"PhotoCount": "3",
					"webLink": "http://www.designptc.com/",
					"webDesc": "Patterns Textiles & Concepts"
				},
				{
					"CaseName": "Wine95",
					"CaseID": "14",
					"CaseType": "web",
					"CoverImg": "web_14.png",
					"PhotoCount": "3",
					"webLink": "http://brianlin224.theweb.tw/webLink/wine95/index.html,webLink/wine95/cart.html,webLink/wine95/wine_detail.html",
					"webDesc": "前往wine95首頁,前往購物車,前往詳目頁"
				},
				{
					"CaseName": "喬杰設技工程",
					"CaseID": "12",
					"CaseType": "web",
					"CoverImg": "web_12.png",
					"PhotoCount": "4",
					"webLink": "http://www.spid.com.tw",
					"webDesc": "喬杰設技工程"
				},
				{
					"CaseName": "立象科技",
					"CaseID": "09",
					"CaseType": "web",
					"CoverImg": "web_09.png",
					"PhotoCount": "2",
					"webLink": "http://www.argox.com/",
					"webDesc": "立象科技"
				},
				{
					"CaseName": "桃園假日飯店",
					"CaseID": "04",
					"CaseType": "web",
					"CoverImg": "web_04.png",
					"PhotoCount": "2",
					"webLink": "http://www.expresstaoyuan.com",
					"webDesc": "桃園假日飯店"
				},
				{
					"CaseName": "賽先生<br>科學玩具購物網",
					"CaseID": "10",
					"CaseType": "web",
					"CoverImg": "web_10.png",
					"PhotoCount": "3",
					"webLink": "http://www.mr-sai.com/mrsai.html",
					"webDesc": "賽先生科學玩具購物網"
				},
				{
					"CaseName": "設計師交流之夜",
					"CaseID": "20",
					"CaseType": "web",
					"CoverImg": "web_20.png",
					"PhotoCount": "3",
					"webLink": "http://www.xuexue.tw/pkn",
					"webDesc": "PKN 設計師交流之夜"
				},
				{
					"CaseName": "布瓦布榭<br>設計工作坊",
					"CaseID": "28",
					"CaseType": "web",
					"CoverImg": "web_28.png",
					"PhotoCount": "3",
					"webLink": "http://www.xuexuefoundation.org.tw/boisbuchet/",
					"webDesc": "布瓦布榭暑期設計工作坊"
				},
				{
					"CaseName": "長新科技",
					"CaseID": "11",
					"CaseType": "web",
					"CoverImg": "web_11.png",
					"PhotoCount": "6",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "一口一口學<br>食驗室",
					"CaseID": "22",
					"CaseType": "web",
					"CoverImg": "web_22.png",
					"PhotoCount": "3",
					"webLink": "http://ecohecohxue.xuexue.tw",
					"webDesc": "一口一口學食驗室"
				},
				{
					"CaseName": "iRead<br>網路書店",
					"CaseID": "17",
					"CaseType": "web",
					"CoverImg": "web_17.png",
					"PhotoCount": "2",
					"webLink": "http://www.iread.com.tw",
					"webDesc": "iRead灰熊愛讀書"
				},
				{
					"CaseName": "1+1來玩",
					"CaseID": "21",
					"CaseType": "web",
					"CoverImg": "web_21.png",
					"PhotoCount": "1",
					"webLink": "http://www.xuexue.tw/kids",
					"webDesc": "1+1來玩"
				},
				{
					"CaseName": "陽光瓦舍",
					"CaseID": "01",
					"CaseType": "web",
					"CoverImg": "web_01.png",
					"PhotoCount": "5",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "GALAXY",
					"CaseID": "03",
					"CaseType": "web",
					"CoverImg": "web_03.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "商鐵咖啡",
					"CaseID": "05",
					"CaseType": "web",
					"CoverImg": "web_05.png",
					"PhotoCount": "2",
					"webLink": "http://www.sunte.com.tw",
					"webDesc": "商鐵咖啡"
				},
				{
					"CaseName": "昱廚",
					"CaseID": "08",
					"CaseType": "web",
					"CoverImg": "web_08.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "星禾玫瑰園",
					"CaseID": "06",
					"CaseType": "web",
					"CoverImg": "web_06.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "星禾出版社",
					"CaseID": "07",
					"CaseType": "web",
					"CoverImg": "web_07.png",
					"PhotoCount": "1",
					"webLink": "http://shing-he-stars.com",
					"webDesc": "星禾出版社"
				},
				{
					"CaseName": "airiti Library",
					"CaseID": "18",
					"CaseType": "web",
					"CoverImg": "web_18.png",
					"PhotoCount": "3",
					"webLink": "http://brianlin224.theweb.tw/webLink/AL/demo01.html,webLink/AL/demo02.html,webLink/AL/demo03.html",
					"webDesc": "前往airitiLibrary首頁,前往詳目頁,前往列表頁"
				},
				{
					"CaseName": "airiti Books<br>活動網頁",
					"CaseID": "19",
					"CaseType": "web",
					"CoverImg": "web_19.png",
					"PhotoCount": "5",
					"webLink": "",
					"webDesc": ""
				}
			],
			"ad_design": [
				{
					"CaseName": "企業形象年報",
					"CaseID": "02",
					"CaseType": "ad",
					"CoverImg": "ad_02.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "企業贈品",
					"CaseID": "12",
					"CaseType": "ad",
					"CoverImg": "ad_12.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "各式DM",
					"CaseID": "13",
					"CaseType": "ad",
					"CoverImg": "ad_13.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "賀卡",
					"CaseID": "11",
					"CaseType": "ad",
					"CoverImg": "ad_11.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "各式名片",
					"CaseID": "05",
					"CaseType": "ad",
					"CoverImg": "ad_05.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "活動海報",
					"CaseID": "14",
					"CaseType": "ad",
					"CoverImg": "ad_14.png",
					"PhotoCount": "2",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "各式活動EDM",
					"CaseID": "01",
					"CaseType": "ad",
					"CoverImg": "ad_01.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "CI規劃",
					"CaseID": "03",
					"CaseType": "ad",
					"CoverImg": "ad_03.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "餐廳MENU",
					"CaseID": "10",
					"CaseType": "ad",
					"CoverImg": "ad_10.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				}
			],
			"other_design":[
				{
					"CaseName": "app實作 -<br>好房網雙訊",
					"CaseID": "10",
					"CaseType": "other",
					"CoverImg": "other_10.png",
					"PhotoCount": "2",
					"webLink": "https://itunes.apple.com/tw/app/hao-fang-wang-shuang-xun/id838108164?mt=8,https://play.google.com/store/apps/details?id=com.housefun.doubleSMS&hl=zh_TW",
					"webDesc": "iTunes - 好房網雙訊,Google play - 好房網雙訊"
				},
				{
					"CaseName": "app實作 -<br>iRead ebook",
					"CaseID": "03",
					"CaseType": "other",
					"CoverImg": "other_03.png",
					"PhotoCount": "3",
					"webLink": "play.google.com/store/apps/details?id=com.airiti.reader",
					"webDesc": "Google play - iRead ebook"
				},
				{
					"CaseName": "app提案 -<br>國寶菁華",
					"CaseID": "04",
					"CaseType": "other",
					"CoverImg": "other_04.png",
					"PhotoCount": "4",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "app提案 -<br>世界美術",
					"CaseID": "05",
					"CaseType": "other",
					"CoverImg": "other_05.png",
					"PhotoCount": "2",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "空間設計 -<br>當地球停止轉動",
					"CaseID": "09",
					"CaseType": "other",
					"CoverImg": "other_09.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "空間提案 -<br>墨水心",
					"CaseID": "07",
					"CaseType": "other",
					"CoverImg": "other_07.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "空間提案 -<br>閃靈俠",
					"CaseID": "08",
					"CaseType": "other",
					"CoverImg": "other_08.png",
					"PhotoCount": "1",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "空間提案 -<br>赤壁二",
					"CaseID": "06",
					"CaseType": "other",
					"CoverImg": "other_06.png",
					"PhotoCount": "2",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "3D建模 -<br>樓梯間",
					"CaseID": "01",
					"CaseType": "other",
					"CoverImg": "other_01.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
				},
				{
					"CaseName": "3D建模 - 臥房",
					"CaseID": "02",
					"CaseType": "other",
					"CoverImg": "other_02.png",
					"PhotoCount": "3",
					"webLink": "",
					"webDesc": ""
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