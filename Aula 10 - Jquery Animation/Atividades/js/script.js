var bola = $("#bola")

$("#left").on("click", function(){
    bola.animate({marginLeft : "-=30px"})
})

$("#right").on("click", function(){
    bola.animate({marginLeft : "+=30px"})
})

$("#top").on("click", function(){
    bola.animate({marginTop : "-=30px"})
})

$("#bottom").on("click", function(){
    bola.animate({marginTop : "+=30px"})
})