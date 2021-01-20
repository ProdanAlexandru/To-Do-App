    const add = document.querySelector(".btnadd");
    var text = document.querySelector(".input-txt");
    var cont = document.querySelector(".list-item");  

    add.addEventListener("click", function(){
        var note = document.createElement("p");
        var removebtn = document.createElement("BUTTON");
        
        
        cont.appendChild(note);
        note.innerHTML=text.value;
        note.classList.add("item-styling");
        text.value="";
    })

    