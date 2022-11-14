let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function(){
    var text = this.value;
    document.getElementById("char").innerHTML = text.length;

    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elem){
        return elem!="";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});
