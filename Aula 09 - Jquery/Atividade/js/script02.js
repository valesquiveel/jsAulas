var btnTema = $("#trocaTema")
var body = $("body")

btnTema.on("click", function(){
    if (btnTema.hasClass("temaClaro")) {
        btnTema.removeClass("temaClaro")
        body.removeClass("temaClaro")
        btnTema.addClass("temaEscuro")
        body.addClass("temaEscuro")

        btnTema.text("TEMA CLARO")
    }else {
        btnTema.removeClass("temaEscuro")
        body.removeClass("temaEscuro")
        btnTema.addClass("temaClaro")
        body.addClass("temaClaro")

        btnTema.text("TEMA ESCURO")
    }
    
})