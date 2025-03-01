/*        
        ➪：酷狗音乐

        ★：解锁永久🆅🅸🅿

        𖣘： @𝙍𝙣𝙞𝙠➏➏➏

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/gateway\.kugou\.com url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/KG.js

[MITM]
hostname = gateway.kugou.com


*/
const FUTURE_DATE = "2099-09-09 23:59:59";
const DYNAMIC_DATE = new Date();
DYNAMIC_DATE.setFullYear(DYNAMIC_DATE.getFullYear() + 10); // 当前时间+10年
const DYNAMIC_DATE_STR = DYNAMIC_DATE.toISOString().replace('T', ' ').slice(0, 19); const replaceRules = [     { pattern: /"user_type":\d+/g, replacement: '"user_type":1' },     { pattern: /"user_y_type":\d+/g, replacement: '"user_y_type":9' },     { pattern: /"is_vip":\d+/g, replacement: '"is_vip":6' },     { pattern: /"vip_type":\d+/g, replacement: '"vip_type":6' },      { pattern: /"annual_fee_(begin|end)_time":".*?"/g, 
replacement: `"annual_fee_`latex-inlineEquation 1_time":"`{FUTURE_DATE}"` },     { pattern: /"(su_)?vip_(end_time|y_endtime)":".*?"/g, 
replacement: `"`latex-inlineEquation 1vip_`2":"${DYNAMIC_DATE_STR}"` },      { pattern: /"svip_score":\d+/g, replacement: '"svip_score":9' },     { pattern: /"svip_level":\d+/g, replacement: '"svip_level":9' },     { pattern: /"duration":\d+/g, replacement: '"duration":14213245' },     { pattern: /"p_grade":\d+/g, replacement: '"p_grade":20' },      {     pattern: /("photo"\s*:\s*")[^"]*(")/g,     replacement: '`latex-inlineEquation 1https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png`2'   },     { pattern: /"nickname":".*?"/g, replacement: '"nickname":"Rnik666🎖"' } ];  let body = $response.body;
replaceRules.forEach(rule => {   body = body.replace(rule.pattern, rule.replacement); });  const specialReplacements = { '"m_is_old":0': '"m_is_old":8',   '"roam_type":0': '"roam_type":1'};
Object.entries(specialReplacements).forEach(([key, value]) => {   if (body.includes(key)) {     body = body.replace(key, value);   }
}); 
$done({ body });

