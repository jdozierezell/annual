var socialWarfarePlugin=socialWarfarePlugin||{};!function(t,e){var i,a=t.socialWarfarePlugin;a.throttle=i=function(t,i,o,n){function s(){function a(){l=+new Date,o.apply(p,c)}function s(){r=e}var p=this,d=+new Date-l,c=arguments;n&&!r&&a(),r&&clearTimeout(r),n===e&&d>t?a():!0!==i&&(r=setTimeout(n?s:a,n===e?t-d:t))}var r,l=0;return"boolean"!=typeof i&&(n=o,o=i,i=e),a.guid&&(s.guid=o.guid=o.guid||a.guid++),s},a.debounce=function(t,a,o){return o===e?i(t,a,!1):i(t,o,!1!==a)}}(this),function(t,e,i){"use strict";function a(t){return parseInt(t,10)}function o(i){var a=e.Event(i);e(t).trigger(a)}function n(){e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover) .iconFiller").removeAttr("style"),e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover)").removeAttr("style")}function s(){e(".nc_wrapper").length&&e(".nc_wrapper").remove();var i=e(".swp_social_panel").not('[data-float="ignore"]').first(),a=i.data("float"),o=i.data("align");if(a){if(e(".swp_social_panel").not(".swp_social_panelSide").length){var n=e(".swp_social_panelSide").data("float-mobile"),s=i.offset(),r=e(".swp_social_panelSide").filter(":not(.mobile)"),l=r.data("screen-width");if(s.left<100||e(t).width()<l)var p=n;else var p=a}else var p=a;var d=e(".swp_social_panel").data("floatcolor"),c=e('<div class="nc_wrapper" style="background-color:'+d+'"></div>');if(c.appendTo("body"),"left"===a||"right"===a)var p=i.data("float-mobile");else var p=i.data("float");i.clone().appendTo(c),e(".nc_wrapper").hide().addClass(p);var f=i.outerWidth(!0),h=i.offset();e(".swp_social_panel").last().addClass("nc_floater").css({width:f,left:"center"==o?0:h.left}),e(".swp_social_panel .swp_count").css({transition:"padding .1s linear"}),e(".swp_social_panel").eq(0).addClass("swp_one"),e(".swp_social_panel").eq(2).addClass("swp_two"),e(".swp_social_panel").eq(1).addClass("swp_three")}}function r(){var i=e(".swp_social_panel"),a=i.not('[data-float="float_ignore"]').eq(0).data("float"),o=e(t),n=o.height(),s=e(".nc_wrapper"),r=e(".swp_social_panelSide").filter(":not(.mobile)"),l=(e(".swp_social_panel").data("position"),r.data("screen-width")),p=i.eq(0).offset(),d=o.scrollTop(),c=(e(t).scrollTop(),!1);if(void 0===t.swpOffsets&&(t.swpOffsets={}),"right"===a||"left"===a){var f=e(".swp_social_panelSide").data("float-mobile"),h=-1!==a.indexOf("left")?"left":"right";e(".swp_social_panel").not(".swp_social_panelSide").length?(e(".swp_social_panel").not(".swp_social_panelSide, .nc_floater").each(function(){var t=e(this).offset(),i=e(this).height();t.top+i>d&&t.top<d+n&&(c=!0)}),p.left<100||e(t).width()<l?(c=!0,"bottom"==f?a="bottom":"top"==f&&(a="top")):c||(c=!1)):e(t).width()>l?c=!1:(c=!0,"bottom"==f?a="bottom":"top"==f&&(a="top"));var _=r.data("transition");"slide"==_?1==c?r.css(h,"-150px"):r.css(h,"5px"):"fade"==_&&(1==c?r.fadeOut(200):r.fadeIn(200).css("display","flex"))}if("bottom"==a||"top"==a)if(c=!1,e(".swp_social_panel").not(".swp_social_panelSide, .nc_floater").each(function(){var t=e(this).offset(),i=e(this).height();t.top+i>d&&t.top<d+n&&(c=!0)}),c)s.hide(),"bottom"==a?e("body").animate({"padding-bottom":t.bodyPaddingBottom+"px"},0):"top"==a&&e("body").animate({"padding-top":t.bodyPaddingTop+"px"},0);else{var w,u;s.show(),"bottom"==a?(w=t.bodyPaddingBottom+50,e("body").animate({"padding-bottom":w+"px"},0)):"top"==a&&(u=e(".swp_social_panel").not(".swp_social_panelSide, .nc_wrapper .swp_social_panel").first().offset(),u.top>d+n&&(w=t.bodyPaddingTop+50,e("body").animate({"padding-top":w+"px"},0)))}}function l(){var e=jQuery("[class*=float-position-center]");if(e.length){var i=e.outerHeight(),a=t.innerHeight;if(i>a)return void e.css("top",0);var o=(a-i)/2;e.css("top",o)}}function p(){0!==e(".swp_social_panel").length&&(s(),l(),f.activateHoverStates(),c(),e(t).scrollTop(),e(t).scroll(f.throttle(50,function(){r()})),e(t).trigger("scroll"))}function d(){var i={wrap:'<div class="sw-pinit" />',pageURL:document.URL},a=e.extend(i,a);e(".swp-content-locator").parent().find("img").each(function(){var i=e(this);if(!(i.outerHeight()<swpPinIt.minHeight||i.outerWidth()<swpPinIt.minWidth)){var o=!1;if(void 0!==swpPinIt.image_source?o=swpPinIt.image_source:i.data("media")?o=i.data("media"):e(this).data("lazy-src")?o=e(this).data("lazy-src"):i[0].src&&(o=i[0].src),!1!==o&&!i.hasClass("no_pin")){var n="";void 0!==swpPinIt.image_description?n=swpPinIt.image_description:i.attr("title")?n=i.attr("title"):i.attr("alt")&&(n=i.attr("alt"));var s="http://pinterest.com/pin/create/bookmarklet/?media="+encodeURI(o)+"&url="+encodeURI(a.pageURL)+"&is_video=false&description="+encodeURIComponent(n),r=i.attr("class"),l=i.attr("style");i.removeClass().attr("style","").wrap(a.wrap),i.after('<a href="'+s+'" class="sw-pinit-button sw-pinit-'+swpPinIt.vLocation+" sw-pinit-"+swpPinIt.hLocation+'">Save</a>'),i.parent(".sw-pinit").addClass(r).attr("style",l),e(".sw-pinit .sw-pinit-button").on("click",function(){if(t.open(e(this).attr("href"),"Pinterest","width=632,height=253,status=0,toolbar=0,menubar=0,location=1,scrollbars=1"),"function"==typeof ga&&!0===swpClickTracking){ga("send","event","social_media","swp_pin_image_share")}return!1})}}})}function c(){e(".nc_tweet, a.swp_CTT").off("click"),e(".nc_tweet, a.swp_CTT").on("click",function(i){if(e(this).hasClass("noPop"))return!1;if(e(this).data("link")){i.preventDefault?i.preventDefault():i.returnValue=!1;var a,o,n,s,r,l=e(this).data("link");if(l=l.replace("’","'"),e(this).hasClass("pinterest")||e(this).hasClass("buffer_link")||e(this).hasClass("flipboard")?(a=550,o=775):(a=270,o=500),n=t.screenY+(t.innerHeight-a)/2,s=t.screenX+(t.innerWidth-o)/2,r="height="+a+",width="+o+",top="+n+",left="+s,t.open(l,"_blank",r),"function"==typeof ga&&!0===swpClickTracking){if(e(this).hasClass("nc_tweet"))var p=e(this).parents(".nc_tweetContainer").attr("data-network");else if(e(this).hasClass("swp_CTT"))var p="ctt";ga("send","event","social_media","swp_"+p+"_share")}return!1}})}var f=t.socialWarfarePlugin,h={};socialWarfarePlugin.fetchShares=function(){e.when(e.get("https://graph.facebook.com/?fields=og_object{likes.summary(true).limit(0)},share&id="+swp_post_url),swp_post_recovery_url?e.get("https://graph.facebook.com/?fields=og_object{likes.summary(true).limit(0)},share&id="+swp_post_recovery_url):"").then(function(t,e){if(void 0!==t[0].share){var i=a(t[0].share.share_count),o=a(t[0].share.comment_count);if(void 0!==t[0].og_object)var n=a(t[0].og_object.likes.summary.total_count);else var n=0;var s=i+o+n;if(swp_post_recovery_url){if(void 0!==e[0].share)var r=a(e[0].share.share_count),l=a(e[0].share.comment_count);else var r=0,l=0;if(void 0!==e[0].og_object)var p=a(e[0].og_object.likes.summary.total_count);else var p=0;var d=r+l+p;s!==d&&(s+=d)}h={action:"swp_facebook_shares_update",post_id:swp_post_id,activity:s}}})},f.activateHoverStates=function(){o("pre_activate_buttons"),e(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer").on("mouseenter",function(){if(e(this).hasClass("swp_nohover"));else{n();var t=e(this).find(".swp_share").outerWidth(),i=e(this).find("i.sw").outerWidth(),a=e(this).width(),o=1+(t+35)/a;e(this).find(".iconFiller").width(t+i+25+"px"),e(this).css({flex:o+" 1 0%"})}}),e(".swp_social_panel:not(.swp_social_panelSide)").on("mouseleave",function(){n()})},e(t).on("load",function(){"undefined"!=typeof swpPinIt&&swpPinIt.enabled&&d()}),e(document).ready(function(){c(),p();var i=e(".swp_social_panelSide");t.bodyPaddingTop=a(e("body").css("padding-top").replace("px","")),t.bodyPaddingBottom=a(e("body").css("padding-bottom").replace("px",""));var o=!1;if(e(".swp_social_panel").hover(function(){o=!0},function(){o=!1}),e(t).resize(f.debounce(250,function(){e(".swp_social_panel").length&&!1!==o||(t.swpAdjust=1,p())})),e(document.body).on("post-load",function(){p()}),0!==i.length){if(-1!==e(i).attr("class").indexOf("swp_side"))return;var n=e(i).height(),s=e(t).height(),r=a(s/2-n/2);setTimeout(function(){e(i).animate({top:r},0)},105)}1===e(".swp-content-locator").parent().children().length&&e(".swp-content-locator").parent().hide()})}(this,jQuery),function(t){var e=/iPhone/i,i=/iPod/i,a=/iPad/i,o=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,n=/Android/i,s=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,r=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/Windows Phone/i,p=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,c=/BB10/i,f=/Opera Mini/i,h=/(CriOS|Chrome)(?=.*\bMobile\b)/i,_=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,w=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),u=function(t,e){return t.test(e)},v=function(t){var v=t||navigator.userAgent,b=v.split("[FBAN");if(void 0!==b[1]&&(v=b[0]),b=v.split("Twitter"),void 0!==b[1]&&(v=b[0]),this.apple={phone:u(e,v),ipod:u(i,v),tablet:!u(e,v)&&u(a,v),device:u(e,v)||u(i,v)||u(a,v)},this.amazon={phone:u(s,v),tablet:!u(s,v)&&u(r,v),device:u(s,v)||u(r,v)},this.android={phone:u(s,v)||u(o,v),tablet:!u(s,v)&&!u(o,v)&&(u(r,v)||u(n,v)),device:u(s,v)||u(r,v)||u(o,v)||u(n,v)},this.windows={phone:u(l,v),tablet:u(p,v),device:u(l,v)||u(p,v)},this.other={blackberry:u(d,v),blackberry10:u(c,v),opera:u(f,v),firefox:u(_,v),chrome:u(h,v),device:u(d,v)||u(c,v)||u(f,v)||u(_,v)||u(h,v)},this.seven_inch=u(w,v),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},b=function(){var t=new v;return t.Class=v,t};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=v:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=b():"function"==typeof define&&define.amd?define("swp_isMobile",[],t.swp_isMobile=b()):t.swp_isMobile=b()}(this);