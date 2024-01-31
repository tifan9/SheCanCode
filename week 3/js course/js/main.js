console.log("Hello");
      var body = document.getElementById("bd");
      var section = document.getElementsByClassName("sect");
      var paragraph= document.querySelector('p');
      var allParagraph = document.querySelectorAll('p');
      console.log(allParagraph);
      var button = document.getElementById('bgbtn');

      function changeBackground(){
        console.log(button)
          body.style.backgroundColor ="white";
      }
      button.addEventListener("click", changeBackground)
      function changeTextColors(){
        var colors= ["red","white","yellow","blue","green","yellow"];
        var col = colors.length;
        var colorPosition= Math.floor(Math.random() * col);
        var newColor= colors[colorPosition];
        paragraph.style.color= newColor;
      }