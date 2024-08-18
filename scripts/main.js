const datas = [
    {name: "PREMIUMBASE", otherNames: ["프베", "베이스"], image: "./resources/cards/PremiumBase.png", eo: 1, min: 23, sec: 0},
    {name: "NO CARD", otherNames: ["일반"], image: "./resources/cards/No-Card.png", eo: 1, min: 32, sec: 0},
    {name: "PRIME ICON", otherNames: ["프아"], image: "./resources/cards/PrimeIcon.png", eo: 1, min: 35, sec: 0},
    {name: "TOP DIRBY", otherNames: ["탑더비"], image: "./resources/cards/TopDirby.png", eo: 1, min: 35, sec: 0},
    {name: "KH12", otherNames: ["KH"], image: "./resources/cards/KH12.png", eo: 0, min: 5, sec: 0},
    {name: "KH02", otherNames: ["KH", "월드투어", "WT"], image: "./resources/cards/KH02.png", eo: 1, min: 35, sec: 0},
    {name: "KFA21", otherNames: ["KFA", "한국"], image: "./resources/cards/KH12.png", eo: 0, min: 5, sec: 0},
    {name: "2002 KOREAN ICON", otherNames: ["2002", "한국", "아이콘", "대한민국", "2002아이콘", "02아이콘", "02", "한국아이콘"], image: "./resources/cards/2002KR_ICON.png", eo: 1, min: 35, sec: 0},
    {name: "FANTASTIC DUO 21", otherNames: ["판타스틱 듀오", "판듀21", "판듀"], image: "./resources/cards/FantasticDuo21.png", eo: 1, min: 36, sec: 0},
    {name: "WT21", otherNames: ["월드투어", "WT"], image: "./resources/cards/WT21.png", eo: 1, min: 35, sec: 0},
    {name: "CHELSEA AMBASSADOR", otherNames: ["첼앰", "첼엠", "CMA"], image: "./resources/cards/ChelseaAmb.png", eo: 1, min: 36, sec: 0},
    {name: "TOE21 ICON", otherNames: ["TOE", "TOE21"], image: "./resources/cards/TOE21_Icons.png", eo: 1, min: 34, sec: 0},
    {name: "KICK OFF 21", otherNames: ["킥오프", "베이스"], image: "./resources/cards/KickOff21.png", eo: 0, min: 11, sec: 0},
    {name: "NATIONAL ICON", otherNames: ["내셔널", "NI"], image: "./resources/cards/NationalIcon.png", eo: 1, min: 37, sec: 30},
    {name: "FUTMAS21", otherNames: ["풋마스", "FUTMAS"], image: "./resources/cards/Futmas21.png", eo: 1, min: 38, sec: 0},
    {name: "REMEMBER 2002", otherNames: ["2002", "리멤버2002", "리멤버", "RE02", "똥그리", "땡그리", "동그리", "동그랑땡"], image: "./resources/cards/Remember02.png", eo: 1, min: 21, sec: 30},
    {name: "REMEMBER 2002(H)", otherNames: ["2002", "리멤버2002", "리멤버", "RE02", "똥그리", "땡그리", "동그리", "동그랑땡", "히어로"], image: "./resources/cards/Remember02_Others.png", eo: 0, min: 0, sec: 0},
    {name: "UCL22 GROUP STAGE", otherNames: ["챔스22", "22챔스", "챔스", "그룹"], image: "./resources/cards/UCL22_GS.png", eo: 1, min: 20, sec: 0},
    {name: "UCL22 16 ĐỘI", otherNames: ["챔스22", "22챔스", "챔스"], image: "./resources/cards/UCL22_16.png", eo: 1, min: 28, sec: 0},
    {name: "UCL22 8 ĐỘI", otherNames: ["챔스22", "22챔스", "챔스"], image: "./resources/cards/UCL22_8.png", eo: 1, min: 29, sec: 0},
    {name: "UCL22 4 ĐỘI", otherNames: ["챔스22", "22챔스", "챔스"], image: "./resources/cards/UCL22_4.png", eo: 1, min: 32, sec: 0},
    {name: "UCL22 FINAL", otherNames: ["챔스22", "22챔스", "챔스"], image: "./resources/cards/UCL22_Final.png", eo: 1, min: 33, sec: 0},
    {name: "UCL22 BEST", otherNames: ["22챔베", "챔베22", "챔베", "챔스", "별", "별카드"], image: "./resources/cards/UCL22_Best.png", eo: 1, min: 33, sec: 0},
    {name: "TOTS22", otherNames: ["토츠22", "22토츠", "토츠"], image: "./resources/cards/TOTS22.png", eo: 1, min: 33, sec: 30},
    {name: "UTOTS22", otherNames: ["얼토츠22", "22얼토츠", "얼토츠", "토츠", "별", "별카드"], image: "./resources/cards/TOTS22_UT.png", eo: 1, min: 35, sec: 50},
    {name: "TOTY22 NOMINEE", otherNames: ["22토티", "토티22", "노미니", "토티"], image: "./resources/cards/TOTY22_Nominee.png", eo: 1, min: 24, sec: 0},
    {name: "TOTY22 HM", otherNames: ["22파토", "파토22", "HM", "토티", "아너블멘션"], image: "./resources/cards/TOTY22_HM.png", eo: 1, min: 30, sec: 0},
    {name: "TOTY22 NYI", otherNames: ["22토티", "토티22", "토티"], image: "./resources/cards/NYI_Icon.png", eo: 1, min: 20, sec: 0},
    {name: "TOTY22 FINAL", otherNames: ["22파토", "파토22", "파토", "토티", "파이널", "별", "별카드"], image: "./resources/cards/TOTY22_Final.png", eo: 1, min: 25, sec: 0},
    {name: "LEGACY22", otherNames: ["22레거시", "레거시22", "레거시"], image: "./resources/cards/Legacy22.png", eo: 1, min: 27, sec: 0},
    {name: "FUTURESTARS22", otherNames: ["퓨처스타", "퓨처"], image: "./resources/cards/FutureStar22.png", eo: 1, min: 30, sec: 0},
    {name: "HERO22", otherNames: ["히어로22", "22히어로", "히어로"], image: "./resources/cards/Hero22.png", eo: 0, min: 0, sec: 0},
    {name: "FLASHBACK22", otherNames: ["플래시백", "플백"], image: "./resources/cards/FlashBack22.png", eo: 1, min: 31, sec: 0},
    {name: "FLASHBACK22 ICON", otherNames: ["플래시백", "플백", "아이콘"], image: "./resources/cards/FlashBack22_Icon.png", eo: 1, min: 20, sec: 0},
    {name: "NOS22", otherNames: ["노스22", "22노스", "노스"], image: "./resources/cards/NOS22_STAR.png", eo: 1, min: 32, sec: 40},
    {name: "ISS22", otherNames: ["ISS"], image: "./resources/cards/IconSuperStar_2.png", eo: 1, min: 20, sec: 35},
    {name: "RS22", otherNames: ["RS", "썸머"], image: "./resources/cards/RS22.png", eo: 1, min: 36, sec: 0},
    {name: "RS22 ICON", otherNames: ["RS", "썸머"], image: "./resources/cards/RS22_Icon.png", eo: 1, min: 20, sec: 40},
    {name: "LN22", otherNames: ["LN22", "LN", "레전더리 넘버"], image: "./resources/cards/LegendaryNumbers22.png", eo: 1, min: 21, sec: 0},
    {name: "LN22", otherNames: ["LN22", "LN", "레전더리 넘버"], image: "./resources/cards/LegendaryNumbers22.png", eo: 0, min: 0, sec: 0},
    {name: "RMA22", otherNames: ["레엠", "RMA"], image: "./resources/cards/RMA22.png", eo: 1, min: 37, sec: 0},
    {name: "RMA22 ICON", otherNames: ["레엠", "RMA"], image: "./resources/cards/RMA22_Icons.png", eo: 1, min: 22, sec: 0},
    {name: "TOP TRANSFER22", otherNames: ["TT22", "22TT", "TT", "녹즙"], image: "./resources/cards/TopTransfers22.png", eo: 1, min: 37, sec: 0},
    {name: "TOP TRANSFER22 ICON", otherNames: ["TT22", "22TT", "TT", "녹즙"], image: "./resources/cards/TT22_Icon.png", eo: 0, min: 20, sec: 0},
    {name: "WORLDCUP22 BASE", otherNames: ["월드컵", "월베", "베이스"], image: "./resources/cards/WorldCup22_Base.jpg", eo: 0, min: 0, sec: 20},
    {name: "WORLDCUP22 RISING STAR", otherNames: ["월드컵", "월스", "월컵", "라이징"], image: "./resources/cards/WorldCup22_RisingStar.png", eo: 0, min: 24, sec: 40},
    {name: "WORLDCUP22 STAR", otherNames: ["월드컵", "월스", "월컵"], image: "./resources/cards/WorldCup22_Star.png", eo: 0, min: 13, sec: 30},
    {name: "WORLDCUP22 BEST", otherNames: ["월드컵", "월베", "월컵"], image: "./resources/cards/WorldCup22_Best.png", eo: 0, min: 13, sec: 15},
    {name: "WORLDCUP22 HEADLINE", otherNames: ["월드컵", "월헤", "중국방석", "헤드라인", "월컵"], image: "./resources/cards/WorldCup22_Headlines.png", eo: 0, min: 12, sec: 14},
    {name: "WORLDCUP ICON", otherNames: ["월드컵", "월콘", "월드콘", "월컵"], image: "./resources/cards/WCIcon.png", eo: 1, min: 6, sec: 0},
    {name: "IF23", otherNames: ["IF23", "이프23", "이프"], image: "./resources/cards/IF23.png", eo: 1, min: 21, sec: 0},
    {name: "ISS23", otherNames: ["ISS"], image: "./resources/cards/IconSuperStar_2.png", eo: 1, min: 6, sec: 0},
    {name: "LEGACY23", otherNames: ["23레거시", "레거시23", "레거시"], image: "./resources/cards/Legacy23.png", eo: 1, min: 25, sec: 30},
    {name: "FEARLESS23", otherNames: ["피어리스", "FL"], image: "./resources/cards/Fearless23.png", eo: 0, min: 32, sec: 15},
    {name: "FEARLESS23 ICON", otherNames: ["피어리스", "FL", "아이콘"], image: "./resources/cards/Fearless23_Icons.png", eo: 1, min: 7, sec: 30},
    {name: "ETERNAL FAN", otherNames: ["이터널", "팬카드", "팬카", "이터널스", "이터널아이콘"], image: "./resources/cards/EternalFan.png", eo: 1, min: 6, sec: 30},
    {name: "TOTS23", otherNames: ["토츠23", "23토츠", "토츠"], image: "./resources/cards/TOTS23_Moment.png", eo: 0, min: 33, sec: 30},
    {name: "UTOTS23", otherNames: ["얼토츠23", "23얼토츠", "얼토츠", "토츠"], image: "./resources/cards/UTOTS23.png", eo: 0, min: 37, sec: 5},
    {name: "UCL23", otherNames: ["챔스23", "23챔스", "챔스"], image: "./resources/cards/UCL23_TOP25.png", eo: 0, min: 27, sec: 0},
    {name: "UCL23 BEST", otherNames: ["23챔베", "챔베22", "챔베", "챔스"], image: "./resources/cards/UCL23_Best.png", eo: 0, min: 37, sec: 5},
    {name: "TOTY23 NOMINEE", otherNames: ["토티23", "23토티", "노미니", "토티"], image: "./resources/cards/TOTY23_Low.png", eo: 0, min: 23, sec: 20},
    {name: "TOTY23 FINAL", otherNames: ["23파토", "파토23", "파토", "파이널", "토티"], image: "./resources/cards/TOTY23_Final.png", eo: 0, min: 25, sec: 0},
    {name: "HERO23", otherNames: ["히어로23", "23히어로", "히어로"], image: "./resources/cards/HERO23_A.png", eo: 0, min: 0, sec: 0},
    {name: "TKL23", otherNames: ["K리그", "티케이엘", "케이리그"], image: "./resources/cards/TKL23.png", eo: 0, min: 37, sec: 30},
    {name: "HOL23 HIGH", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_High.png", eo: 0, min: 38, sec: 40},
    {name: "HOL23 ICON", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_Icon.png", eo: 1, min: 7, sec: 0},
    {name: "HOL23 (H)", otherNames: ["홀23", "HOL23"], image: "./resources/cards/HOL23_Icon.png", eo: 0, min: 0, sec: 0},
    {name: "FOUNDERS24", otherNames: ["파운더스24", "파운더스", "1차"], image: "./resources/cards/Founders24.png", eo: 0, min: 39, sec: 25},
    {name: "FOUNDERS24 ICON", otherNames: ["파운더스24", "파운더스", "1차", "아이콘"], image: "./resources/cards/Founders24_icon.png", eo: 1, min: 8, sec: 0},
    {name: "FOUNDERS24 (H)", otherNames: ["파운더스24", "파운더스", "1차", "아이콘"], image: "./resources/cards/Founders24_icon.png", eo: 0, min: 1, sec: 0},
    {name: "FOUNDERS24 2", otherNames: ["파운더스24", "파운더스", "2차"], image: "./resources/cards/Founders24_2.avif", eo: 0, min: 41, sec: 45},
    {name: "FOUNDERS24 2 ICON", otherNames: ["파운더스24", "파운더스", "2차", "아이콘"], image: "./resources/cards/Founders24_2_Icon.avif", eo: 1, min: 8, sec: 40},
    {name: "FOUNDERS24 2 ICON(H)", otherNames: ["파운더스24", "파운더스", "2차", "아이콘"], image: "./resources/cards/Founders24_2_Icon.avif", eo: 0, min: 1, sec: 20},
    {name: "KICK OFF(23-24)", otherNames: ["킥오프", "베이스"], image: "./resources/cards/KickOff23.png", eo: 0, min: 52, sec: 0},
    {name: "UCL24 BASE", otherNames: ["챔스24", "24챔스", "베이스", "챔스"], image: "./resources/cards/UCL24_Base.avif", eo: 0, min: 54, sec: 50},
    {name: "UCL24 STAR", otherNames: ["챔스24", "24챔스", "스타", "챔스"], image: "./resources/cards/UCL24_Star.avif", eo: 1, min: 11, sec: 0},
    {name: "JUV24", otherNames: ["유벤24", "유벤투스", "유벤"], image: "./resources/cards/JuventusAmb.png", eo: 1, min: 14, sec: 25},
    {name: "JUV24 ICON", otherNames: ["유벤24", "유벤투스", "유벤", "아이콘", "히어로"], image: "./resources/cards/JuventusAmb_Icon.png", eo: 1, min: 23, sec: 30},
    {name: "TROPHY ICONS", otherNames: ["Trophy Icon","Trophy Titan", "트아"], image: "./resources/cards/TrophyIcons.png", eo: 1, min: 9, sec: 0},
    {name: "TROPHY ICONS(H)", otherNames: ["trophy","트로피", "트아"], image: "./resources/cards/TrophyIcons.png", eo: 0, min: 1, sec: 25},
    {name: "KFA23&18", otherNames: ["KFA23", "KFA18", "KFA", "크파", "한국", "케이에프에이"," 켚하"], image: "./resources/cards/KFA23&18.png", eo: 0, min: 54, sec: 0},
    {name: "RIVALS24", otherNames: ["라이벌스", "라이벌"], image: "./resources/cards/Rivals_Mixed.png", eo: 1, min: 14, sec: 50},
    {name: "RIVALS24 ICON", otherNames: ["라이벌스", "라이벌", "아이콘"], image: "./resources/cards/Rivals24_Icon.png", eo: 1, min: 23, sec: 50},
    {name: "RULEBREAKERS24", otherNames: ["룰브레이커", "룰브"], image: "./resources/cards/RuleBreakers24.png", eo: 1, min: 34, sec: 50},
    {name: "RULEBREAKERS24 ICON", otherNames: ["룰브레이커", "룰브", "별", "별카드", "아이콘"], image: "./resources/cards/RuleBreakers24_Icon.png", eo: 1, min: 24, sec: 0},
    {name: "K03L24 ICON", otherNames: ["삼국", "중국"], image: "./resources/cards/KO3L_Icon.png", eo: 0, min: 24, sec: 0},
    {name: "PSG24", otherNames: ["생제", "파리", "피에스지", "이강인"], image: "./resources/cards/Captain24.avif", eo: 1, min: 35, sec: 0},
    {name: "TOTY24 NOMINEE", otherNames: ["토티24", "24토티", "노미니", "토티"], image: "./resources/cards/TOTY24_Live.avif", eo: 1, min: 36, sec: 20},
    {name: "TOTY24 HM", otherNames: ["토티24", "24토티", "HM", "토티", "아너블맨션", "아너블"], image: "./resources/cards/TOTY24_HM.png", eo: 1, min: 37, sec: 40},
    {name: "TOTY24 NYI", otherNames: ["토티24", "24토티", "NYI", "토티", "아이콘"], image: "./resources/cards/UTOTY24_Icon.png", eo: 1, min: 24, sec: 50},
    {name: "UTOTY24", otherNames: ["토티24", "24토티", "얼토티", "토티", "파토"], image: "./resources/cards/UTOTY24.png", eo: 1, min: 37, sec: 30},
    {name: "KFA24", otherNames: ["KFA24", "24KFA", "크파", "KFA", "한국", "케이에프에이", "켚하"], image: "./resources/cards/KFA24.png", eo: 1, min: 37, sec: 50},
    {name: "HERO24", otherNames: ["히어로24", "24히어로", "히어로"], image: "./resources/cards/Heroes24.png", eo: 0, min: 2, sec: 0},
    {name: "UNSUNG HERO24", otherNames: ["히어로24", "24히어로", "히어로", "언성", "언성히어로"], image: "./resources/cards/Heroes24_Unsung.png", eo: 1, min: 38, sec: 0},
    {name: "HATTRICK24", otherNames: ["해트트릭", "해트", "트릭", "신태용", "만우절", "멕시코"], image: "./resources/cards/DOD24.png", eo: 1, min: 39, sec: 15},
    {name: "HATTRICK24 ICON", otherNames: ["해트트릭", "해트", "트릭", "신태용", "만우절", "멕시코", "아이콘"], image: "./resources/cards/DOD24_ICON.png", eo: 1, min: 25, sec: 0},
    {name: "CENTURIONS24 1차", otherNames: ["센츄리온", "센츄", "CT", "센추리온", "센추리얼", "센츄리온스", "센추리온스", "1차"], image: "./resources/cards/CENTURIONS24.png", eo: 1, min: 25, sec: 20},
    {name: "CENTURIONS24 ICON 1차", otherNames: ["센츄리온", "센츄", "CT", "센추리온", "센추리얼", "센츄리온스", "센추리온스", "아이콘", "1차"], image: "./resources/cards/CENTURIONS24_ICON.png", eo: 1, min: 9, sec: 0},
    {name: "KL24", otherNames: ["KL", "케이엘", "케이리그", "케이", "TKL", "팀케이엘"], image: "./resources/cards/KL24_LIVE.png", eo: 1, min: 40, sec: 0},
    {name: "KL24 Icon", otherNames: ["KL", "케이엘", "케이리그", "케이", "TKL", "팀케이엘"], image: "./resources/cards/KL24_ICON.png", eo: 1, min: 27, sec: 0},
    {name: "CENTURIONS24 2차", otherNames: ["센츄리온", "센츄", "CT", "센추리온", "센추리얼", "센츄리온스", "센추리온스", "2차"], image: "./resources/cards/CENTURIONS24.png", eo: 1, min: 43, sec: 20},
    {name: "CENTURIONS24 Icon 2차", otherNames: ["센츄리온", "센츄", "CT", "센추리온", "센추리얼", "센츄리온스", "센추리온스", "아이콘", "2차"], image: "./resources/cards/CENTURIONS24_ICON.png", eo: 1, min: 27, sec: 30},
    {name: "TOTS24 BASE", otherNames: ["토츠24", "24토츠", "토츠", "베이스"], image: "./resources/cards/TOTS24_BASE.png", eo: 1, min: 28, sec: 0},
    {name: "TOTS24 LIVE", otherNames: ["토츠24", "24토츠", "토츠"], image: "./resources/cards/TOTS24_ELITE.png", eo: 1, min: 28, sec: 0},
    {name: "TOTS24 UTOTS", otherNames: ["토츠24", "24토츠", "토츠", "얼토츠"], image: "./resources/cards/TOTS24_UTOTS.png", eo: 1, min: 31, sec: 50},
    {name: "EURO24 LIVE", otherNames: ["유로24", "24유로", "유로", "현역"], image: "./resources/cards/EURO24_GERMANY.png", eo: 0, min: 30, sec: 0},
    {name: "EURO24 ICON", otherNames: ["유로24", "24유로", "유로", "아이콘"], image: "./resources/cards/EURO24_ICON_GERMANY.png", eo: 0, min: 0, sec: 0},
    {name: "UCL24 BEST11", otherNames: ["챔스24", "24챔스", "챔베"], image: "./resources/cards/UCL24_TOP11.png", eo: 0, min: 44, sec: 30},
    {name: "SO24 LIVE", otherNames: ["SO24", "SO", "스폐셜원", "스페셜원", "현역"], image: "./resources/cards/SO24_LIVE.png", eo: 1, min: 57, sec: 0},
    {name: "SO24 ICON", otherNames: ["SO24", "SO", "스폐셜원", "스페셜원", "아이콘"], image: "./resources/cards/SO24_ICON.png", eo: 1, min: 57, sec: 0},
    {name: "EURO24 BEST11(STAR)", otherNames: ["유로24", "24유로", "유로", "유베", "유로베스트", "베스트", "유로스타", "스타", "유스"], image: "./resources/cards/EURO24_BEST11_GERMANY_IMP.png", eo: 1, min: 10, sec: 0},
    {name: "ETERNALICON LV.6", otherNames: ["이터널", "모먼트"], image: "./resources/cards/EternalIcons_LV7.png", eo: 1, min: 8, sec: 0},
    {name: "COPA24_LIVE", otherNames: ["코파", "코파24", "24코파", "COPA", "아르헨티나"], image: "./resources/cards/COPA24_Live_ARGENTINA.png", eo: 0, min: 45, sec: 10},
    {name: "COPA24_ICON", otherNames: ["코파", "코파24", "24코파", "COPA", "아르헨티나"], image: "./resources/cards/COPA24_ICON_ARGENTINA.png", eo: 0, min: 9, sec: 0}
];

const odd = [1, 7, 9, 11, 13, 15, 17, 19, 21, 23];
const even = [0, 8, 10, 12, 14, 16, 18, 20, 22];


$(document).ready(function() {
    getList(datas);
});

var timer = null;

function getList(d) {
    clearInterval(timer);
    document.querySelector(".card-table").innerHTML = '<tr><th scope="col">THẺ</th><th scope="col">TÊN</th><th scope="col">THỜI GIAN CẬP NHẬT</th><th scope="col">THỜI GIAN CÒN LẠI</th</tr>';
    d.forEach(function(e, i) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "list");
        tr.setAttribute("idx", i);
        tr.innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + getUpdateRemain(e.eo, e.min, e.sec) + "</td>";
        document.querySelector(".card-table").appendChild(tr);
    });
    timer = setInterval(function() {
        if(document.querySelector(".card-table > tr:nth-child(2)") != null) {
            var tr = document.querySelectorAll(".card-table tr.list");
            d.forEach(function(e, i) {
                var rem = getUpdateRemain(e.eo, e.min, e.sec);
                if(rem.split("Phút")[0] == "0") {
                    tr[i].innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td><span class='close'>" + rem + "</span></td>";
                } else {
                    tr[i].innerHTML = '<td><img src="' + e.image + '"/></td><td>' + e.name + "</td><td>" + getUpdateTimes(e.eo, e.min, e.sec) + "</td><td>" + rem + "</td>";
                }
            });
        }
    }, 1000);
}

function getUpdateTimes(eo, m, s) {
    if(eo == 0) {
        return "Giờ Chẵn - " + m + " Phút " + s + " Giây";
    } else {
        return "Giờ Lẻ - " + m + " Phút " + s + " Giây";
    }
}

function getUpdateRemain(eo, m, s) {
    var date = new Date();
    if(eo == 0) {
        if(even.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s);
                var sec = parseInt(end - date) / 1000;
                var days = parseInt(sec / 60 / 60 / 24);
                sec = sec - days * 60 * 60 * 24;
                var hour = parseInt(sec / 60 / 60);
                var sec = sec - hour * 60 * 60;
                var min = parseInt(sec / 60);
                sec = parseInt(sec - min * 60);
                return min + " Phút " + sec +  " Giây";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    } else if(eo == 1) {
        if(odd.indexOf(date.getHours()) != -1) {
            if(date.getMinutes() < m) {
                var end = new Date();
                end.setHours(date.getHours());
                end.setMinutes(m);
                end.setSeconds(s);
                var sec = parseInt(end - date) / 1000;
                var days = parseInt(sec / 60 / 60 / 24);
                sec = sec - days * 60 * 60 * 24;
                var hour = parseInt(sec / 60 / 60);
                var sec = sec - hour * 60 * 60;
                var min = parseInt(sec / 60);
                sec = parseInt(sec - min * 60);
                return min + " Phút " + sec +  " Giây";
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    }
}

function checkEnter() {
    if(event.keyCode == 13) {
        searchSeason();
    }
}

function searchSeason() {
    if($('#inputTxt').val().length != 0) {
        var text = $('#inputTxt').val();
        var filter = datas.filter((v) => {
            if(v.name.indexOf(text.toUpperCase()) != -1 || v.otherNames.indexOf(text.toUpperCase()) != -1) {
                return true;
            }
            return false;
        });
        getList(filter);
    } else {
        getList(datas);
    }
}
