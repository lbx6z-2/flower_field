      function coverAll() {
        document.write(
          "<div style=\"background-color:green;\">" +
              "<h1 style=\"padding-left:550px;padding-top:200px;font-family:'Comic Sans MS';position:fixed;\">Nothing</h1>" + 
          "</div>");
      }

      function modify() {
        x = document.getElementById("here");
        if (x.innerHTML == "I'm here") {
          x.innerHTML = "what did you do?";
        }
        else {
          x.innerHTML = "I'm here";
        }
      }
      
      function mover(thisField) {
        thisField.innerHTML = "what did you do?";
      }
      
      function mout(thisField) {
        thisField.innerHTML = "I'm here";
      }



      function modifyColor() {
        x = document.getElementById("color");
        x.style.backgroundColor = x.value;
      }

      window.alert = function(str) {  
         /* var shield = document.createElement("DIV");  
         shield.id = "shield";
         shield.style.position = "absolute";  
         shield.style.left = "0px";  
         shield.style.top = "0px";  
         shield.style.width = "50%";  
         shield.style.height = document.body.scrollHeight / 2 +"px";  
         //弹出对话框时的背景颜色  
         shield.style.background = "#fff";  
         shield.style.textAlign = "center";  
         shield.style.zIndex = "25";  
         //背景透明 IE有效  
         //shield.style.filter = "alpha(opacity=0)";  */
         var alertFram = document.createElement("DIV");  
         alertFram.id="alertFram";
         alertFram.style.position = "fixed";  
         alertFram.style.left = "50%";
         alertFram.style.top = "15%";
         alertFram.style.marginLeft = "-225px";  
         alertFram.style.marginTop = "-75px";  
         alertFram.style.width = "450px";  
         alertFram.style.height = "150px";  
         alertFram.style.background = "#ff0000";  
         alertFram.style.textAlign = "center";
         alertFram.style.lineHeight = "150px";  
         alertFram.style.zIndex = "300";  
         strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";  
         strHtml += " <li style=\"background:#DD828D;text-align:left;padding:5px;padding-left:20px;font-size:14px;font-weight:bold;font-family:'STKaiti';height:25px;line-height:25px;border:1px solid #F9CADE;\">来自花田的提醒</li>\n";  
         strHtml += " <li style=\"background:#fff;text-align:center;font-family:'Comic Sans MS',cursive,sans-serif;font-size:20px;height:120px;line-height:120px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;\">"+str+"</li>\n";  
         strHtml += " <li style=\"background:#FDEEF4;text-align:center;padding:5px;font-weight:bold;height:25px;line-height:25px; border:1px solid #F9CADE;\"><input style=\"font-family:'STKaiti';padding-left:3px;padding-right:3px;background-color: Ivory;\" type=\"button\" value=\" 明白 \" onclick=\"doOk()\" /></li>\n";  
         strHtml += "</ul>\n";  
         alertFram.innerHTML = strHtml;  
         document.body.appendChild(alertFram);  
         // document.body.apprendChild(shield);  
         var ad = setInterval("doAlpha()",5);  
         this.doOk = function(){  
             alertFram.style.display = "none";  
             shield.style.display = "none";  
         }  
         alertFram.focus();
         document.body.onselectstart = function(){return false;};  
      }

      function showLanguage() {
        var lanField = document.getElementById("language");
        var fwField = document.getElementById("flower_field");
        var splitField = document.getElementById("split");
        lanField.style.display = "block";
        lanField.style.visibility = "visible";
        fwField.style.display = "none";
        fwField.style.visibility = "hidden";
        splitField.style.display = "none";
        splitField.style.visibility = "hidden";
      }
      function showField() {
        var lanField = document.getElementById("language");
        var fwField = document.getElementById("flower_field");
        var splitField = document.getElementById("split");
        fwField.style.display = "block";
        fwField.style.visibility = "visible";
        lanField.style.display = "none";
        lanField.style.visibility = "hidden";
        splitField.style.display = "none";
        splitField.style.visibility = "hidden";
      }
      function showAll() {
        var lanField = document.getElementById("language");
        var fwField = document.getElementById("flower_field");
        var splitField = document.getElementById("split");
        fwField.style.display = "block";
        fwField.style.visibility = "visible";
        lanField.style.display = "block";
        lanField.style.visibility = "visible";
        splitField.style.display = "block";
        splitField.style.visibility = "visible";        
      }
  
      function uppercase(thisField) {
        // var thisField = document.getElementById("color");
        thisField.value = thisField.value.toUpperCase();
      }












