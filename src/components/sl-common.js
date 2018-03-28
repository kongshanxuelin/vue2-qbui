export default {
	os(){
		var u = navigator.userAgent, app = navigator.appVersion;   
        return {//移动终端浏览器版本信息   
                trident: u.indexOf('Trident') > -1, //IE内核  
                presto: u.indexOf('Presto') > -1, //opera内核  
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
                iPad: u.indexOf('iPad') > -1, //是否iPad    
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部  
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信   
                qq: u.match(/\sQQ/i) == " qq", //是否QQ
                language:(navigator.browserLanguage || navigator.language).toLowerCase()
        };  
    }, 
	isMobile(){
	  var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;  
	  var u = navigator.userAgent;  
	  if (null == u) {  
	   return true;  
	  }  
	  var result = regex_match.exec(u);  
	  if (null == result) {  
	   return false  
	  } else {  
	   return true  
	  }  
	},
	isPC(){
		var userAgentInfo = navigator.userAgent;  
	    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
	    var flag = true;    
	    for (var v = 0; v < Agents.length; v++) {    
	        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }    
	    }    
	    return flag;    
	}
	
};
