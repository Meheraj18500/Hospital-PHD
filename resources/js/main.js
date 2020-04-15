$(document).ready(function(){
    
    //Sticky manu
    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
    
    //Active link
    $("nav .menu li a").click(function(){
        $("nav .menu li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".top-header-area a img.logo").click(function(){
        $("nav .menu li a").removeClass("active");
        $("nav .menu li:first-child a").addClass("active");
    });
    
    //Scroll Active Link
    $(".js--services-section").waypoint(function(direction){
        if(direction == "up"){
           $("nav .menu li a").removeClass("active");
           $("nav .menu li:first-child a").addClass("active");
        }else{
           $("nav .menu li:first-child a").removeClass("active"); 
        }
    });    
});

function openNav() {
    document.getElementById("myNav").style.width = ("100%");
}
function closeNav() {
    document.getElementById("myNav").style.width = ("0%");
}