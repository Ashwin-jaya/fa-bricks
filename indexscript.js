let availableKeywords = [
    {name: "Balcony railing", url:"balcony-railing/balconyrailing.html"},
    {name: "Stair railing", url:"stair-railing/stairrailing.html"},
    {name: "Window grill", url:"window-grill/windowgrill.html"},
    {name: "Window pane", url:"window-pane/windowpane.html"},
] ;

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    // console.log(input); 
    if(input.length){
        // console.log(input);
        result = availableKeywords.filter((keyword)=>{
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
   display(result);

   if(!result.length){
    resultbox.innerHTML = '';
   }
}

function display(result){
    const content = result.map((list) =>{
        return "<li>" + `<a href="${list.url}">${list.name}</a>` + "</li>"});

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}