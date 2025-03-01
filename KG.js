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
var body = $response.body  .replace(/"user_type":\d+/g, '"user_type":1')   .replace(/"user_y_type":\d+/g, '"user_y_type":9')   .replace(/"is_vip":\d+/g, '"is_vip":6')   .replace(/"vip_type":\d+/g, '"vip_type":6')      .replace(/"annual_fee_begin_time":".*?"/g, '"annual_fee_begin_time":"2099-09-09 23:59:59"')   .replace(/"annual_fee_end_time":".*?"/g, '"annual_fee_end_time":"2099-09-09 23:59:59"')   .replace(/"su_vip_end_time":".*?"/g, '"su_vip_end_time":"2099-09-09"')   .replace(/"vip_end_time":".*?"/g, '"vip_end_time":"2099-09-09 23:59:59"')      .replace(/"svip_score":\d+/g, '"svip_score":9')   .replace(/"svip_level":\d+/g, '"svip_level":9')   .replace(/"duration":\d+/g, '"duration":14213245')   .replace(/"p_grade":\d+/g, '"p_grade":20')   .replace(/"p_current_point":\d+/g, '"p_current_point":14213245')      .replace(/"m_is_old":(\d+)/, function(match, p1) {     return Number(p1) < 5 ? '"m_is_old":8' : match;   })   .replace(/"roam_type":(\d+)/, function(match, p1) {     return Number(p1) === 0 ? '"roam_type":1' : match;   })      .replace(/("photo"\s*:\s*")[^"]*(")/, '`latex-inlineEquation 1https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png`2')    .replace(/"nickname":".*?"/, '"nickname":"Rnik666🎖"')      .replace(/"(\w+_time)":".*?"/g, function(match, p1) { const timeMap = {      end_time: "2099-09-09 23:59:59",      roam_end_time: "2099-09-09 23:59:59",      m_y_endtime: "2099-09-09 23:59:59"    };    return timeMap[p1] ? `"`latex-inlineEquation {p1}":"`{timeMap[p1]}"` : match;  });

$done({ body });
