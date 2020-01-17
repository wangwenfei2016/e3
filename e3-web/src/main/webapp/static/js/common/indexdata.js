var indexdata =
    [
        {url:getContextPath()+"/base/poorPerson",text:"导入数据" },
        {url:getContextPath()+"/base/lowInsured",text:"低保户" },
        {url:getContextPath()+"/base/specialPerson",text:"特定优抚人员" },
        {url:getContextPath()+"/base/precisionPoverty",text:"精准抚贫人员" },
        {url:getContextPath()+"/base/difficultPeople",text:"其他困难群众" }
    ];
var indexdata2 =
    [
        { url: getContextPath()+"/participationRescue/index", text: "合作医疗"}
        // { url: "", text: "合作医疗1" }
    ];
var indexdata3 =
    [
        { url: getContextPath()+"/participationRescue/index", text: "商业保险"}
        // { url: "", text: "商业保险1" }
    ];

var indexdata4 =
    [
        { url: getContextPath()+"/participationRescue/index", text: "参合保障"},
        // { url: getContextPath()+"/hospitalRescue/index", text: "住院救助"},
        {text: '住院保障', isexpand: false, children: [
            {url: getContextPath()+"/hospitalRescue/index?h_type=0", text: "定点医院"},
            {url: getContextPath()+"/hospitalRescue/index?h_type=1", text: "非定点医院"}
        ]},
        { url: getContextPath()+"/outpatientRescue/index", text: "门诊保障" },
        { url:getContextPath()+"/fallbackGuarantee/index", text: "兜底保障" }
    ];
var indexdata5=
    [
        // { url: "", text: "办事流程图"},
        { url:getContextPath()+"/workGuide/index", text: "办事指南"}
    ];
var indexdata6=
    [
        { url: getContextPath()+"/illnessRelief/index", text: "大病保障"},
        { url: getContextPath()+"/illnessRelief/afterindex", text: "医后大病保障"}
    ];

var indexdata7=
    [
        { url: getContextPath()+"/monthlyReport/index", text: "月报表数据"},
        { url: getContextPath()+"/monthlyReport/person", text: "人员类型统计"},
        { url:  getContextPath()+"/monthlyReport/civilABStatistics", text: "保障对象统计"},
        { url:  getContextPath()+"/monthlyReport/comprehensiveStatistics", text: "综合保障统计"}
    ];
var indexdata8=
    [
        {url:"",text:"特困供养人员"},
        {url:"",text:"低保户" },
        {url:"",text:"特定优抚人员" },
        {url:"",text:"精准抚贫人员" }
    ];
var indexdata9=
    [
        { url: getContextPath()+"/satisfactionSurvey/satisfactionManage", text: "满意度评价管理"},
        { url: getContextPath()+"/satisfactionSurvey/satisfactionStatistics", text: "满意度评价统计"},
        { url: getContextPath()+"/satisfactionSurvey/satisfactionEvaluate", text: "满意度评价"}
    ];
var indexdata10=
    [
        { url: getContextPath()+"/notice/index", text: "公告管理"}
    ];
var indexdata11=
    [
        { url: getContextPath()+"/druid/sql.html", text: "保护系统"}
    ];
var indexdata12=
    [
        { url: "", text: "权限管理"},
        { url: "", text: "用户管理"},
        { url: "", text: "系统设置"}
    ];
var indexdata13=
    [
        { url: getContextPath()+"/druid/sql.html", text: "保护系统"}
    ];
var indexdata14=
    [
        { url: "", text: "数据导入"},
        { url: "", text: "数据导出"},
        { url: "", text: "数据汇总分析"},
        { url: "", text: "数据政策性调整"}
    ];

