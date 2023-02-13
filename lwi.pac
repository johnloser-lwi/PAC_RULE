// Configurations
var SurfsharkConfig = "SOCKS5 192.168.1.251:1080";
var ChinaConfig = "SOCKS5 192.168.1.1:1080";



// Hosts Rules
var surfshark = [
  "netflix.com",
  "openai.com",
  "v2rayssr.com"
];

var china = [
  "taobao.com",
  "jd.com",
  "qq.com",
  "iqiyi.com",
  "youku.com",
  "gamersky.com",
  "kmf.com",
  "bilibili.com",
  "bilibili.cn",
  "apple.com.cn",
  "bilivideo.com",
  "bilivideo.cn",
  "biliapi.com",
  "biliapi.net"
];




// Run
function FindProxyForURL(url, host) {

  for (var i = 0; i < surfshark.length; i++) {
    if (host.includes(surfshark[i])) return SurfsharkConfig; 
  }


  for (var i = 0; i < china.length; i++) {
    if (host.includes(china[i])) return ChinaConfig; 
  }

  return "DIRECT";
}
