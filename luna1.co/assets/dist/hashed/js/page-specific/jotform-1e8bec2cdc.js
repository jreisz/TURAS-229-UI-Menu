var currentLanguage=AsanaI18n.getCurrentPageLanguage();function skrollTo(o){$(".genericCTA").remove(),$(".jotform").removeClass("-is-hidden"),$("html, body").animate({scrollTop:$(o).offset().top-100},500)}history.pushState({},"","?language="+currentLanguage),$("script + iframe").load((function(){setTimeout((function(){$(".section--contactForm").removeClass("-fullHeight")}),1e3)})),$(window).load((function(){$(".-trigger-form").click((function(o){o.preventDefault(),skrollTo(".jotform")})),"#form"===window.location.hash&&skrollTo(".jotform")}));