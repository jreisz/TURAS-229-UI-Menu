$(window).load((function(){var a=$(".searchbar-clear");function n(){$(".searchbar-input").val().length?a.removeClass("-is-hidden"):a.addClass("-is-hidden")}$(".searchbar-input").on("keyup",(function(a){n()})),a.click((function(a){$(".searchbar-input").val(""),$(".searchbar-input").trigger("fieldClear"),n()}))}));