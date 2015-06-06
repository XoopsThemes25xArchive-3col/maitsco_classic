$(document).ready(function() {
    //Pour changer la direction haut/bas et gauche/droit, placez seulement 
    //le caract�re "-" devant la valeur de la propri�t� top/left
	
    //Coulissement vertical
    $('.boxgrid.slidedown').hover(function() {
        $(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});
    }, function() {
        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
    }); 

	//Coulissement horizontal
    $('.boxgrid.slideright').hover(function() {
        $(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});
    }, function() {
        $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
    });
    
    //Coulissement diagonal
    $('.boxgrid.thecombo').hover(function() {
        $(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});
    }, function() {
        $(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
    });

    //Petit coulissement (Montre seulement qu'une partie du fond)
    $('.boxgrid.peek').hover(function() {
        $(".cover", this).stop().animate({top:'90px'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
    });

    //Coulissement int�gral (De cach� � visible)
    $('.boxgrid.captionfull').hover(function() {
        $(".cover", this).stop().animate({top:'120px'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'180px'},{queue:false,duration:160});
    });

    //Coulissement de l�gende (Une partie cach� � visible)
    $('.boxgrid.caption').hover(function() {
        $(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
    }, function() {
        $(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});
    });
});	