

window.clt_navclick = function(A){
s.linkTrackVars='events,eVar55,prop22,prop43';
s.linkTrackEvents='event63';
s.eVar55=A;
s.prop22=s.pageName;
s.prop43=s.eVar55;
s.events='event63';
s.tl(this,'o',A);
};

var lang_reg = 'en_US';
if(window.location.href.indexOf('latino.nascar.com') > -1){
 lang_reg = 'es_US';
}

var channel_reg = 'nscr-';
if(window.location.href.indexOf('nascar.com') == -1){
 var channel_reg = digitalData.page.pageInfo.channel + '-';
}

jQuery('.navbar .navbar-container ul.primary > li > a').not('.list').click(function(e) {
    var navlink = jQuery(this).text();
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink + '-primary');
});

//spanish nav tabs
jQuery('#menu-main-nav \x3e li a').click(function(e) {
    navlink = jQuery(this).text().replace(/\s/g,'');
    if (jQuery(this).hasClass('search')) {
        navlink = navlink + 'search';
    } else {
        if (jQuery(this).hasClass('active')) {
            navlink = navlink + '-open';
        } else {
            navlink = navlink + '-exit';
        }
    }
	var menuType = (/sub/i.test(this.parentNode.parentNode.getAttribute('class')))? 'secondary' : 'primary';
    clt_navclick(channel_reg+lang_reg+'-min-nav-' + navlink + '-'+menuType);
});

//spanish top nav links
jQuery('.top-nav-inner-container li a').click(function(e){
		var linkName = this.innerText;
		clt_navclick(channel_reg+lang_reg+'-min-nav-' + linkName + '-primary');
});

//spanish Search button in top nav
jQuery('#searchform').submit(function(e){
    var searchTerm = document.querySelector('#s').value;
    clt_navclick(channel_reg+lang_reg+'-min-nav-' + searchTerm + '-primary');
});

//spanish Socials in Top Nav
jQuery('[class*="secondary-navigation"] a[class="social-header-icon"]').click(function(e){
    var social = this.getAttribute('href');
	social = (/twitter/i.test(social))? 'TWITTER' : (/facebook/i.test(social))? 'FACEBOOK' : (/youtube/i.test(social))? 'YOUTUBE' : (/instagram/i.test(social))?'INSTAGRAM' : 'unknown';
    clt_navclick(channel_reg+lang_reg+'-min-nav-' + social + '-primary');
});

//parent tabs more
jQuery('.navbar .navbar-container ul.primary > li > a').click(function(e) {
    navlink = jQuery(this).find('a').text().replace(/\s/g,'');
    var activeSeriesParentTabs = jQuery('.nav-tertiary .active').attr('data-series');
    if (jQuery(this).hasClass('search')) {
        navlink = navlink + 'search';
    } else {
        if (jQuery(this).find('a').hasClass('active')) {
            navlink = navlink + '-open';
        } else {
            navlink = navlink + '-exit';
        }
    }
    clt_navclick(activeSeriesParentTabs + '-'+channel_reg+lang_reg+'-min-nav-' + navlink + '-primary');
});

jQuery('.navbar .navbar-container ul.primary > li.search.no-mobile > a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-open-search');
});

jQuery('.searchbar button.trigger, .searchbar input[type=submit]').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-search-keyword: ' + jQuery('#search-string').val());
});

jQuery('.mobileLoginAndSearch .search a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-open-search-mobile');
});

jQuery('.mobileLoginAndSearch .login .registerOrLogin a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-login-register-mobile');
});

jQuery('.registerOrLogin > a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    var navitem = jQuery(this);
    var navlink = navitem.text();
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-login-register-' + navlink);
});

jQuery('.navmenu ul.secondary > li > a').not('.promolink').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    var navitem = jQuery(this);
    var navlink = navitem.text();
    if (!navitem.parent().hasClass('secondary-dropdown')) {
        clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-secondary');
    }
});

jQuery('.navmenu ul.secondary > li > a.promolink').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    var navlink = jQuery(this).text();
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-promolink');
});

jQuery('.navmenu ul.secondary > li.secondary-dropdown > ul > li > a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    var navlink = jQuery(this).text();
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-secondary-dropdown-link');
});

jQuery('.navmenu ul.secondary > li.secondary-dropdown > a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    var navlink = jQuery(this).text();
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-secondary-dropdown-expand');
});

//social
jQuery('.navmenu ul.tertiary > li > a').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    var navlink = jQuery(this).parent().attr('class');
    if (navlink == 'social') {
        navlink = jQuery(this).find('i').attr('class').split(' ').pop();
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-tertiary');
});

jQuery('.alertbar .primary a').click(function(e) {
    var navlink = jQuery(this).text();
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-alertbar');
});

jQuery('.alertbar ul.sociallinks a').click(function(e) {
    var navlink = jQuery(this).find('i').attr('class').split(' ').pop();
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-' + navlink.trim() + '-alertbar:social');
});

jQuery('.barmark').click(function(e) {
    var activeSeries = jQuery('.tertiary .active').attr('data-series');
    if (!activeSeries) {
        var activeSeries = jQuery('.nav-tertiary  .active').attr('data-series');
    }
    clt_navclick(activeSeries + '-'+channel_reg+lang_reg+'-min-nav-main-logo');
});

/*
 * end nav CQ Nav
 */

//Wordpress top nav
jQuery('.navbar .navbar-container ul.nav-primary > li').click(function(e) {
    navlink = jQuery(this).find('.no-mobile.no-tablet.tab').text().replace(/\s/g,'');
    if (jQuery(this).hasClass('search')) {
        navlink = navlink + 'search';
    } else {
      var navlink = jQuery(this).find('a').text();
    }
    clt_navclick(channel_reg+lang_reg+'-min-nav-' + navlink + '-primary');
});

//all list items under parent tab
jQuery('.navmenu ul.nav-secondary > li.nav-item').click(function(e) {
    var activeSeriesAllListItems = jQuery('.nav-tertiary .active').attr('data-series');
    var navlinkAllListItems = jQuery(this).find('a:first').text();

    if (jQuery(this).hasClass('secondary-dropdown')) {
        //items is under more table
        var sufSecondary = '-secondary-dropdown-expand';
    } else {
        var sufSecondary = '-secondary';
    }
    clt_navclick(activeSeriesAllListItems + '-'+channel_reg+lang_reg+'-min-nav-' + navlinkAllListItems.trim() + sufSecondary);
});

//for under more tab
jQuery('.navmenu ul.nav-secondary > li.secondary-dropdown > ul > li > a').click(function(e) {
    var activeSeriesUnderMoreTab = jQuery('.nav-tertiary  .active').attr('data-series');
    var navlinkUnderMoreTab = jQuery(this).text();
    clt_navclick(activeSeriesUnderMoreTab + '-'+channel_reg+lang_reg+'-min-nav-' + navlinkUnderMoreTab.trim() + '-secondary-dropdown-link');
});

//for under more tab series specific
jQuery('.navmenu ul.nav-tertiary > li[data-series] > a').click(function(e) {
    var activeSeriesSeriesSpecific = jQuery('.nav-tertiary  .active').attr('data-series');
    var navlinkSeriesSpecific = jQuery(this).parent().attr('data-series');
    clt_navclick(activeSeriesSeriesSpecific + '-'+channel_reg+lang_reg+'-min-nav-' + navlinkSeriesSpecific.trim() + '-tertiary');
});

//for spanish
jQuery('.navmenu ul.nav-tertiary > li.nav-item.lang a').click(function(e) {
    var activeSeriesSpanish = jQuery('.nav-tertiary  .active').attr('data-series');
    var navlinkSpanish = jQuery(this).text();
    clt_navclick(activeSeriesSpanish + '-'+channel_reg+lang_reg+'-min-nav-' + navlinkSpanish + '-tertiary');
});

//for social
jQuery('.navmenu ul.nav-tertiary > li.social a').click(function(e) {
    var activeSeriesSocial = jQuery('.nav-tertiary  .active').attr('data-series');
    var navlinkSocial = jQuery(this).find('i').attr('class').split(' ').pop();
    clt_navclick(activeSeriesSocial + '-'+channel_reg+lang_reg+'-min-nav-' + navlinkSocial.trim() + '-tertiary');
});

//for unread bell posts
jQuery('div.unread-post-list > div.unread-post-container a').click(function(e){
		var linkName = jQuery(this).find('.unread-post-title').text();
		clt_navclick(channel_reg+lang_reg+'-unread-post-nav-' + linkName);
});

//Mobile PWA logo
jQuery('.navbar-mobile-container .logo a').click(function(e) {
  clt_navclick('pwa-logo-barmark');
});

//Mobile PWA Shop
jQuery('.navbar-mobile-container .mobile-store-shop').click(function(e) {
  clt_navclick('pwa-mobile-store-shop');
});

//Mobile PWA Feature nav
jQuery('div.mobile-featured-button span').click(function(e) {
  var txt = jQuery(this).text();
  clt_navclick('pwa-featured-button-'+txt);
});

//Mobile PWA Feature Hamburger
jQuery('#mobile-hamburger').click(function(e) {
  clt_navclick('pwa-hamburger');
});

//Mobile PWA Slide nav
jQuery('#mobileSideNav div a, .mobileSideNavInner a').click(function(e) {
    var txt = jQuery(this).attr('title');
    clt_navclick('pwa-slide-nav-'+txt);
});

//Mobile PWA Footer Tab
jQuery('.footer-tab-item .footer-tab-text a').click(function(e) {
    var txt = jQuery(this).text();
    clt_navclick('pwa-footer-tab-'+txt);
});



			
        
		
			


      +function(a,p,P,b,y) {
        appboy={};for(var s="destroy toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "),i=0;i<s.length;i++){for(var k=appboy,l=s[i].split("."),j=0;j<l.length-1;j++)k=k[l[j]];k[l[j]]=function(){console&&console.error("The Appboy SDK has not yet been loaded.")}}appboy.initialize=function(){console&&console.error("Appboy cannot be loaded - this is usually due to strict corporate firewalls or ad blockers.")};appboy.getUser=function(){return new appboy.ab.User};appboy.getCachedFeed=function(){return new appboy.ab.Feed};
        (y = a.createElement(p)).type = 'text/javascript';
        y.src = '/wp-content/themes/ndms/js/appboy/appboy.min.js';
        (c = a.getElementsByTagName(p)[0]).parentNode.insertBefore(y, c);
        if (y.addEventListener) {
          y.addEventListener("load", b, false);
        } else if (y.readyState) {
          y.onreadystatechange = b;
        }
      }(document, 'script', 'link', function() {
          appboy.initialize('6065bcf9-bd05-4e7a-b19a-a7ccfc5afb7b', {safariWebsitePushId: 'web.nascar.production.com/OU=9JNAN5YNJY/O=NASCAR Digital Media, LLC', doNotLoadFontAwesome: true});
          appboy.toggleAppboyLogging();                    appboy.subscribeToNewInAppMessages(function(inAppMessages) {
          var message = inAppMessages[0];
          if (message != null) {
            var shouldDisplay = true;

            if (message instanceof appboy.ab.InAppMessage) {
              // Read the key/value pair for msg-id
              var msgId = message.extras["msg-id"];

              // If this is our push primer message
              if (msgId == "push-primer") {
                // We don't want to display the soft push prompt to users on browsers that don't support push, or if the user
                // has already granted/blocked permission
                if (!appboy.isPushSupported() || appboy.isPushPermissionGranted() || appboy.isPushBlocked()) {
                  shouldDisplay = false;
                }
                if (message.buttons[0] != null) {
                  // Prompt the user when the first button is clicked
                  message.buttons[0].subscribeToClickedEvent(function() {
                    appboy.registerAppboyPushMessages();
                  });
                }
              }
            }

            // Display the message
            if (shouldDisplay) {
              appboy.display.showInAppMessage(message);
            }
          }

          // Remove this message from the array of IAMs and return whatever's left
          return inAppMessages.slice(1);
        });
          appboy.openSession();
          appboy.logCustomEvent("prime-for-push");
                            });
        var pageType = 'drivers';

        var logAppBoyEvent = function(eventName){
          jQuery( document ).ready(function() {
            if (!!window.appboy) {
              appboy.logCustomEvent(eventName);
            }
          });
        };
      