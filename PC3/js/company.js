// 페이지 로딩시 가장 첫 항목 보이기
$(".com_arco>ul>li").first().find(".com_sarco").show();

// 부서, 직무 선택 여부 인덱스
let mtab_old = 0; let mtab_sel = 0;
let stab_old = 0; let stab_sel = 0;

// 부서 탭 클릭
$(".com_arco>ul>li>h2").click(function() {
    mtab_sel = $(this).parent().index();

    if(mtab_old != mtab_sel) {
        old_mtab = $(".com_arco>ul>li").eq(mtab_old);
    
        // 기존 부서 탭 숨기기-기존 부서, 직무 선택 효과 삭제
        old_mtab.find(">.com_sarco").slideUp(); 
        old_mtab.find(".opened").removeClass("opened");
        old_mtab.find(">.com_sarco>.com_selected").removeClass("com_selected");
        
        // 선택 부서 서브 메뉴 보이기-선택 부서, 직무 선택 효과 부여
        $(this).parent().find(">.com_sarco").slideDown();
        $(this).addClass("opened");
        $(this).parent().find(">.com_sarco>li").first().addClass("com_selected");
    
        // 내부 텍스트 변경
        let ptab_sel = $(this).parent().index();
        $(".com_title").html(work_text[ptab_sel][0].title);
        $(".com_intro").html(work_text[ptab_sel][0].intro);
        $(".com_work").html(work_text[ptab_sel][0].work);
        $(".com_cond").html(work_text[ptab_sel][0].cond);

        mtab_old = mtab_sel;
        stab_old = 0; stab_sel = 0;
    }
});

// 직무 변경
let work_text0 = [
    {"title":"경영기획", "intro":"회사의 비전 및 경영혁신 활동의 방향 설정, 중&sol;장기 경영목표, 전략과제&sol;실행계획 수립, 사업부문의 실적과 조직운영에 관한 기획&sol;운영&sol;관리 역할을 담당하는 경영관리업무 수행", "work":"비전 및 전략 수립 &sol; 대내외 환경 분석 &sol; 사업계획 수립 및 예산 편성 &sol; 사업현황 관리 &sol; 사업부 지원 &sol; IR", "cond":"<li>경영/경제 관련 전문지식 보유한 자</li><li>재무회계/원가회계/관리회계에 대한 기본지식 보유한 자</li><li>전산 활용 능력 보유한 자&lpar;ERP, MS-Office 등&rpar;</li><li>적극적이고 주도적인 자세로 업무수행 가능한 자</li>"},
    {"title":"경영진단", "intro":"내부업무를 대상으로 정기적, 수시적 업무감사를 통해 비효율적인 업무프로세스 개선과 직장인으로서 부적절하고 비윤리적인 행위 등의 제보접수 및 처리를 통해 깨끗하고 공정한 조직문화 정착을 위한 업무 수행", "work":"업무감사&lpar;정기감사, 특별지시감사&rpar; &sol; 이행감사 &sol; 제보접수 및 처리 &sol; 업무 프로세스 개선 &sol; 윤리경영 실현", "cond":"<li>재무 및 회계에 대한 기본 지식 및 분석력</li><li>기획력 및 업무 프로세스&sol;수리 분석력</li><li>사업 전반에 걸친 이해도 및 분석력</li><li>문제점의 근본원인 해결을 위한 창의적인 개선방안 도출 능력</li><li>관련법규&lpar;청탁금지법, 약사법&rpar;에 대한 이해도</li><li>재무회계, 관리회계 및 재무에 대한 기본지식 &sol; 전산 활용 능력 &sol; 커뮤니케이션 스킬 &sol; 수리분석 및 프로세스 분석력 &sol;기획력 &sol; </li>"},
    {"title":"자금", "intro":"회사경영 목표 달성에 필요한 재무전략을 수립하고 회사의 재무현황이 재무전략과 일치하는 방향으로 전개되는지 여부를 점검하며, 금융비용을 최소화할 수 있도록 자금을 조달&sol;운용하고, 금리 환율 등과 같은 자금관련 주요 변수의 추이를 파악하여 그에 대한 대처방안을 제시함으로써 재무적 안정성을 추구하고 현금흐름을 원활하게 하는 역할 수행", "work":"재무전략 수립, 수지 및 계획 수립 &sol; 자금 조달 및 운용 &sol; 외환 Dealing &sol; 위험관리 &sol; 금융기관 등의 대외기관 대응업무 &sol; 신용평가 대응 &sol; 대금 지급 업무 &sol; 보유 유가증권 관리 &sol; 사업보고서 작성 및 공시 등", "cond":"<li>경제, 재무관리에 대한 전문지식</li><li>재무회계, 관리회계에 대한 기본적인 지식</li><li>관련법률&lpar;상법, 증권거래법, 외환거래법, 공정거래법 등&rpar; 기본적인 지식</li><li>수리능력, 분석적 의사결정 능력, 기획력 및 정확성, 전산 활용 능력, 대외 업무 수행 능력</li>"},
    {"title":"회계", "intro":"<li>국제회계기준 및 각종 법령에 적합한 회계&sol;세무처리를 통하여 대내외 정보이용자들에게 경영 및 투자에 필요한 자료를 제공하며 회사의 전반적인 경영 및 관리업무를 지원하는 업무수행</li><li>세무당국의 조세정책 변화에 맞추어 각종 세법과 처리규정 등을 검토하여 회사의 관리지침을 수립하고, 회사의 각종 세무신고 및 납부 업무 수행</li>", "work":"재무제표 작성 &sol; 전사적 자원관리시스템&lpar;ERP&rpar;의 운영 및 개선 &sol; 회계감사 수감업무 &sol; 내부통제평가시스템 관리 및 운영 &sol; 재무정보제공 &sol; 세무정책 수립 &sol; 각종 세무문제와 제세신고 납부 지도관리", "cond":"<li>재무회계, 관리회계, 원가회계 및 세무회계에 대한 전문적인 지식</li><li>관련법률&lpar;상법, 증권거래법, 외환거래법 등&rpar;에 대한 기본적인 지식</li><li>수리능력, 분석적 의사결정 능력, 기획력, 정확성, 전산 활용능력&lpar;O&sol;A&rpar; </li>"},
    {"title":"구매지원", "intro":"회사의 각 부문과 국내&sol; 외 협력사를 긴밀하게 연결하여 경영 및 영업, 마케팅 계획이 원활하게 수행되도록 필요한 원&sol;부자재와 물품, 상품 등을 적정한 협력사로부터 적정한 품질, 수량, 가격, 납기일을 확보, 구매관리하는 업무를 수행", "work":"원자재 &sol; 부자재 &sol; 공장시설 및 기계류 &sol; 완제품 &sol; 사무용품 &sol; 비품 &sol; 전산용품 &sol; 판촉물 등의 협력사 선정, 입찰, 계약, 구매관리 및 수입 업무", "cond":"구매관리 유경험자, 영어회화가능자, SAP M&sol;M 유경험자, 오피스 활용능력 중급이상"},
    {"title":"여신지원", "intro":"거래처에 대한 적정한 여신부여 및 담보를 확보하고, 도산, 폐업, 기타 법률분쟁 등으로 인하여 발생되는 채권에 대한 보전조치, 추심진행, 소송 응소와 더불어 계약&lpar;법률&rpar;검토를 통하여 회사의 손해방지 &lpar;Risk Management&rpar; 업무 수행. 또한 영업부서에 대한 정도영업 고취 및 관리로 회사의 합법적이고 안정적인 매출성장 지원 업무 수행", "work":"거래처의 신규∙변경 점검 &sol; 여신부여&lpar;한도관리&rpar;, 담보관리 &sol; 부실채권 &lpar;대손처리&rpar; 및 사고처 관리 법무 및 송무수행 &sol; 계약서&lpar;법률&rpar; 검토 &sol; 업무인수인계 &sol; 영업부 감사&lpar;사전∙사후 감사&rpar; 법령 제개정 Monitoring 및 사내규정 제개정", "cond":"<li>민법&sol;상법&sol;공정거래법 등 제반 법령에 대한 기본적 이해</li><li>법적 쟁점사항에 대한 분석능력 및 의사결정능력</li><li>보전조치, 본안소송 등 송무절차에 대한 기본적 이해</li>"},
    {"title":"영업지원", "intro":"영업과 관련한 각종 데이터를 관리, 분석, 평가하여 회사 목표 달성에 필요한 정보를 생산하고, 이를 필요한 곳에 신속히 전달하며 분석된 정보를 바탕으로 영업정책의 방향을 제시하고 영업부서의 활동에 대한 전반적인 관리 및 지원 수행", "work":"매출채권관리 &sol; 각종data의 입력 및 분석 &sol; 영업사원교육 &sol; 인센티브, 수수료 평가전도금 등 경비관리 &sol; 판매, 수금 마감업무 &sol; 세금계산서 관리", "cond":"전산활용능력&lpar;OA&rpar;, 커뮤니케이션 능력"},
    {"title":"IT전략&lpar;전산&rpar;", "intro":"<li>IT 기획 : 장단기적인 IT전략 방향 및 IT아키텍쳐를 수립하고 현업의 요건을 반영하여 IT사업계획과 예산편성 업무 수행</li><li>IT 개발 : 단위 프로젝트를 계획하고 업체 및 제품에 대한 기술평가를 통해 업무선정 및 계약을 지원하고, 체계적인 프로젝트 관리를 통해 어플리케이션 개발&sol;적용 업무 수행</li><li>IT 운영 : 도입 및 개발된 정보시스템의 일상적이고 안정적인 서비스를 위한 운영 및 유지보수와 운영지원 업무 수행</li><li>IT 관리 : IT 기획, 개발, 운영&sol;유지보수 등 전체 라이프사이클의 업무 기능을 포괄적으로 지원 및 관리하기 위한 업무 수행</li>", "work":"중장기 IT전략계획 수립, 관리 &sol; 연간 IT계획 수립 &sol; IT아키텍쳐 및 표준관리 &sol; 프로젝트 관리&sol; IT제품, 서비스 개발 &sol; IT제품&sol;서비스 설치 &sol; 어플리케이션 유지보수 및 개선 &sol; IT운영 관리 &sol; IT자산 관리 &sol; 사용자 교육 및 지원 &sol; 사용자 관계관리 &sol; 정보보안관리", "cond":"<li>관련전공 : 전산&sol;정보처리</li><li>자격사항 : 자격증 소지&lpar;정보처리&sol;보안&sol;DBMS&sol;프로그래밍&sol;인프라&rpar; </li><li>경력사항 : SAP ERP 시스템 개발 및 운영, 전산인프라 관리 및 운영 ABAP &sol; 웹 프로그래밍 개발</li>"},
    {"title":"인사", "intro":"인재의 채용, 배치, 운영, 평가, 퇴직에 이르는 일련의 프로세스를 관리하며 이 프로세스의 근간이 되는 인사제도를 기획하고 운영하는 업무를 담당. 또한 공동체적인 노사관계를 구축하여 조직을 활성화함으로써 구성원과 조직의 목표달성을 이루는 업무를 수행", "work":"채용 &sol; 교육, 인재육성 &sol; 임금관리 &sol; 승진, 평가, 보상관리 &sol; 인사제도 기획 및 운영 &sol; 조직문화와 조직개발 &sol; 대관업무", "cond":"<li>4년제 대졸이상 &lpar;전공 : 상경계열, 법학, 행정, 심리, 교육 전공 우대&rpar; </li><li>인사&sol;노무 관련 법규, 정부정책 이해, 기초 인적자원관리 지식, 조직행동&sol;조직심리 관련 기초 지식</li><li>커뮤니케이션 능력 &sol; 분석적 사고력 &sol; 문제해결능력 &sol; 협상능력 &sol; 데이터가공, 분석, 활용 능력 &sol; 대인관계능력 &sol; 글로벌 감각 &sol; OA활용능력</li>"},
    {"title":"총무", "intro":"각종 사내외 행사를 기획하고 진행하며 동산, 부동산, 비품 등의 자산관리 및 사내 시설물을 유지 보수 하는 역할을 수행", "work":"자산관리 및 공용시설 관리 &sol; 차량, 비품, 등 시설물 관리 &sol; 각종 인허가 업무 &sol; 복리후생", "cond":"<li>4년제 대졸이상 &lpar;경영학, 법학 우대&rpar; </li><li>부동산 관련 기초지식, 민법, 상법, 세법 등 법률 관련 지식</li><li>커뮤니케이션 및 대인관계 능력, 조정 및 협상 능력</li>"},
    {"title":"소비자상담", "intro":"소비자의 욕구를 만족시키고 소비자의 선택을 돕는 제품 정보를 제공하며 소비자의 피해를 적절하게 해결함으로써 소비자의 권리와 문화를 합리적으로 보장하고, 소비자들의 불만해소 통로의 역할수행 뿐만 아니라 소비자의 불만을 기업에 대한 신뢰로 바꾸어 놓는 제반업무 수행", "work":"소비자상담 및 불만접수처리 &sol; 소비자보호업무수행 &sol; 소비자보상관리 &sol; 제품문의 &sol; 품질개선", "cond":"<li>식품 및 소비자업무의 기본적인 지식과 소양을 갖춘자</li><li>소비자전문상담사 1급, 2급 우대</li>"},
]
let work_text1 = [
    {"title":"약국마케팅", "intro":"약국에 유통되는 일반의약품 및 약국용 드링크에 대하여 판매 증대 및 이익창출을 위해 전반적인 제품의 개발 및 생산, 가격 및 유통관리, 다양한 프로모션 등 계획 및 실행하며, 해당부문의 사업계획 및 정책을 수립하고, 시장조사를 통한 신제품개발, 출시된 제품의 생산에서 시장철수 될 때까지 전반적인 관리를 하는 제품의 Product Manager 업무 수행", "work":"시장조사 및 분석 &sol; 제품 기획 및 개발 &sol; 마케팅 전략 수립 및 실행 &sol; 영업기획 &sol; MR 교육 &sol; 약사 및 소비자 대상 프로모션", "cond":"약국 영업 및 채널에 대한 이해도, 창의력, 분석적 의사결정 능력, 기획력, 의사소통능력"},
    {"title":"에치칼마케팅", "intro":"", "work":"", "cond":""},
    {"title":"백신마케팅", "intro":"", "work":"", "cond":""},
    {"title":"유통마케팅", "intro":"", "work":"", "cond":""},
    {"title":"홍보", "intro":"", "work":"", "cond":""},
    {"title":"브랜드전략", "intro":"", "work":"", "cond":""},
    {"title":"디자인혁신센터", "intro":"", "work":"", "cond":""},
];
let work_text2 = [
    {"title":"사업개발", "intro":"", "work":"", "cond":""},
    {"title":"의약개발", "intro":"", "work":"", "cond":""},
    {"title":"임상개발", "intro":"", "work":"", "cond":""},
    {"title":"건식개발", "intro":"", "work":"", "cond":""},
];
let work_text3 = [
    {"title":"의약품연구", "intro":"", "work":"", "cond":""},
    {"title":"신약연구", "intro":"", "work":"", "cond":""},
    {"title":"F&amp;B제제연구", "intro":"", "work":"", "cond":""},
    {"title":"건식연구", "intro":"", "work":"", "cond":""},
];
let work_text4 = [
    {"title":"OTC영업", "intro":"", "work":"", "cond":""},
    {"title":"DTC영업", "intro":"", "work":"", "cond":""},
    {"title":"에치칼영업", "intro":"", "work":"", "cond":""},
    {"title":"백신영업", "intro":"", "work":"", "cond":""},
    {"title":"유통영업", "intro":"", "work":"", "cond":""},
];
let work_text5 = [
    {"title":"의약품생산", "intro":"", "work":"", "cond":""},
    {"title":"식품생산", "intro":"", "work":"", "cond":""},
    {"title":"생산기획", "intro":"", "work":"", "cond":""},
    {"title":"자재지원", "intro":"", "work":"", "cond":""},
    {"title":"기술지원", "intro":"", "work":"", "cond":""},
    {"title":"물류지원", "intro":"", "work":"", "cond":""},
    {"title":"공장관리", "intro":"", "work":"", "cond":""},
];
let work_text6 = [
    {"title":"품질보증", "intro":"", "work":"", "cond":""},
    {"title":"품질감사", "intro":"", "work":"", "cond":""},
    {"title":"의약품품질관리", "intro":"", "work":"", "cond":""},
    {"title":"식품품질경영", "intro":"", "work":"", "cond":""},
];
let work_text = [work_text0, work_text1, work_text2, work_text3, work_text4, work_text5, work_text6];
// initialize
$(".com_title").html(work_text[0][0].title);
$(".com_intro").html(work_text[0][0].intro);
$(".com_work").html(work_text[0][0].work);
$(".com_cond").html(work_text[0][0].cond);

$(".com_sarco>li").click(function() {
    stab_sel = $(this).index();
    let ptab_sel = $(this).parent().parent().index();

    if(stab_old != stab_sel) {
        // 기존 직무 선택 효과 삭제
        $(this).parent().find(">li").eq(stab_old).removeClass("com_selected");
        // 선택 직무 선택 효과 부여
        $(this).addClass("com_selected");
        
        // 내부 텍스트 변경
        $(".com_title").html(work_text[ptab_sel][stab_sel].title);
        $(".com_intro").html(work_text[ptab_sel][stab_sel].intro);
        $(".com_work").html(work_text[ptab_sel][stab_sel].work);
        $(".com_cond").html(work_text[ptab_sel][stab_sel].cond);

        stab_old = stab_sel;
    }
});

// 직무 설명
let work_num0 = $(".com_arco>ul>li").eq(0).find(">ul>li").length;
let work_num1 = $(".com_arco>ul>li").eq(1).find(">ul>li").length;
let work_num2 = $(".com_arco>ul>li").eq(2).find(">ul>li").length;
let work_num3 = $(".com_arco>ul>li").eq(3).find(">ul>li").length;
let work_num4 = $(".com_arco>ul>li").eq(4).find(">ul>li").length;
let work_num5 = $(".com_arco>ul>li").eq(5).find(">ul>li").length;
let work_num6 = $(".com_arco>ul>li").eq(6).find(">ul>li").length;
//11 7 4 4 5 7 4