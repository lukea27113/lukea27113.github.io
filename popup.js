function checkCookie() {
  let isVerified = getCookie("isVerified");
  if (isVerified != "true") {
  document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
}); 
  } else {
      window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});

    
}
end

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
