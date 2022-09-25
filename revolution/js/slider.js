/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi1,
  tpj;
jQuery(function() {
  tpj = jQuery;
  if(tpj("#rev_slider_1_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  }else{
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1240,1240,778,480",
      gridheight:"880,880,450,350",
      spinner:"spinner0",
      perspective:600,
      perspectiveType:"global",
      editorheight:"880,768,450,350",
      responsiveLevels:"1240,1240,778,480",
      progressBar:{disableProgressBar:true},
      navigation: {
        onHoverStop:false
      },
      parallax: {
        levels:[2,3,4,5,6,7,12,16,20,30,35,36,37,38,40,30],
        type:"mouse",
        origo:"slidercenter",
        speed:"2000ms"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }
  
});


var revapi2,
    tpj;
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_2_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
      revapi2 = tpj("#rev_slider_2_1").show().revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1240,1024,992,480",
        gridwidth:"1240,1240,880,520",
        gridheight:"795,795,450,350",
        minHeight:"",
        spinner:"spinner0",
        editorheight:"795,768,880,350",
        responsiveLevels:"1240,1024,992,480",
        disableProgressBar:"on",
        navigation: {
          mouseScrollNavigation:false,
          onHoverStop:false,
          touch: {
            touchenabled:true
          },
          arrows: {
            enable:true,
            style:"uranus",
            hide_onmobile:true,
            hide_under:768,
            hide_onleave:true,
            left: {

            },
            right: {

            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });


          
var revapi3,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");
    }else{
        revapi3 = tpj("#rev_slider_3_1").show().revolution({
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1240,778,480",
            gridwidth:"1240,1240,778,480",
            gridheight:"705,705,450,350",
            minHeight:"",
            spinner:"spinner0",
            editorheight:"705,768,450,350",
            responsiveLevels:"1240,1240,778,480",
            disableProgressBar:"on",
            navigation: {
                mouseScrollNavigation:false,
                onHoverStop:false,
                touch: {
                    touchenabled:true
                },
                arrows: {
                    enable:true,
                    style:"custom",
                    hide_onmobile:true,
                    hide_under:768,
                    hide_onleave:true,
                    left: {

                    },
                    right: {

                    }
                }
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
    
});