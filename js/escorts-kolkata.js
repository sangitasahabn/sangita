jQuery(document).ready(function(){var pos;jQuery(".figpopout").addClass("hide"),jQuery(".escort-profile-grid-view").click(function(e){if(jQuery(e.target).is(".new-fav-btn")||jQuery(e.target).is(".fa-heart"))return e.stopPropagation(),!1;if(jQuery(window).width()<=800)if((jQuery(e.target).is(".resp-img")||jQuery(e.target).is(".tourbanner"))&&e.preventDefault(),jQuery(jQuery(".figpopout",this)).hasClass("hide")){jQuery(".figpopout").addClass("hide"),jQuery("figure").addClass("dimmer"),jQuery(jQuery(".figpopout",this)).removeClass("hide"),jQuery(jQuery("figure",this)).removeClass("dimmer");var offset=jQuery(this).offset();jQuery(jQuery(".popout_arrow",this).css({left:offset.left+50}),100),jQuery("html,body").animate({scrollTop:eval(jQuery("#"+jQuery(this).attr("id")).offset()).top-100},500)}else jQuery(jQuery(".figpopout",this)).addClass("hide"),jQuery("figure").removeClass("dimmer");else jQuery(".figpopout").addClass("hide"),jQuery("figure").removeClass("dimmer")}),jQuery(".escort-profile-grid-view").mouseenter(function(e){jQuery(window).width()>800&&jQuery(jQuery(".extraInfo",this)).removeClass("hide")}),jQuery(".escort-profile-grid-view").mouseleave(function(){jQuery(window).width()>800&&jQuery(jQuery(".extraInfo",this)).addClass("hide")})});