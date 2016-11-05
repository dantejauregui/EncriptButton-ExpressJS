function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var newURL = getParameterByName('url');

if (newURL) {
	newURL = atob(newURL);
}
else{
    newURL = "#"
}

var finalButton =  document.getElementById("finalButton");

finalButton.href = newURL;




var nameTitle = getParameterByName('campaing_title');
document.getElementById("campaignTitle").innerHTML = nameTitle;

console.log(nameTitle);

var buttonTitle = getParameterByName('button_title');
document.getElementById("finalButton").innerHTML = buttonTitle;

var imgTitle = getParameterByName('img_title');

if (imgTitle) {
    imgTitle = atob(imgTitle);
}
else{
    imgTitle = "#"
}

document.getElementById("imageInsert").src = imgTitle;







// click
 function bodyHref(){
    this.location.href= newURL;
 };