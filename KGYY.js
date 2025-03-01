if (typeof `latex-inlineEquation response === "undefined" || !`response.body) {   $done({});    throw new Error("Invalid response"); }

var body = $response.body; // 定义常量
const VIP_DATE = "2099-09-09 23:59:59";
const DYNAMIC_DATE = "2030-02-21 21:54:36";  // 通用替换函数
function batchReplace(rules) {   rules.forEach(([pattern, replacement]) => {     body = body.replace(new RegExp(pattern, "g"), replacement);   });
}  // 批量替换规则
const replaceRules = [   ['"user_type"\\s*:\\s*\\d+', '"user_type":1'],   ['"user_y_type":\\d', '"user_y_type":9'],   ['"is_vip":\\d', '"is_vip":6'],   ['"vip_type":\\d', '"vip_type":6'],    ['"annual_fee_begin_time":".*?"', `"annual_fee_begin_time":"${VIP_DATE}"`],   ['"annual_fee_end_time":".*?"', `"annual_fee_end_time":"${VIP_DATE}"`],   ['"su_vip_end_time":".*?"', '"su_vip_end_time":"2099-09-09"'],   ['"vip_end_time":".*?"', `"vip_end_time":"${VIP_DATE}"`],    ['"svip_score":\\d+', '"svip_score":9'],     ['"svip_level":\\d+', '"svip_level":9'],   ['"duration":\\d+', '"duration":14213245'],      ['"m_is_old":(\\d+)', function(match, p1) {     return p1 === '0' ? '"m_is_old":8' : match;   }],      ['("photo"\\s*:\\s*")[^"]*(")', '`latex-inlineEquation 1https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png`2'],   ['"nickname":".*?"', '"nickname":"Rnik666🎖"']
];  batchReplace(replaceRules);  [   {pat: /"roam_type":\d/g, val: 1},   {pat: /"y_type":\d/g, val: 1},   {pat: /"m_type":\d/g, val: 1}
].forEach(item => {   body = body.replace(item.pat, ``latex-inlineEquation &`{item.val}`.replace(/\d$/, item.val));
}); 
$done({body});
