window.onload=init;

function init(event){
    event.preventDefault();
    var button = document.getElementById("add");
    button.addEventListener("click", addTask);
    var remove = document.getElementById("todotasks");
    remove.addEventListener("click", deleteTask);
}

function addTask(event){
    event.preventDefault();
    var taskText = document.getElementById("Task").value;
    if(taskText == ""){
    }else{
        var trelement =  document.createElement('tr');
        var tdelement1 = document.createElement('td');
        var tdelement2 = document.createElement('td');
        
        tdelement1.innerHTML = document.getElementById("Task").value;
        tdelement2.innerHTML = 'Done';
        tdelement1.className = 'tdtask';
        tdelement2.className = 'tddelete';
                
        trelement.appendChild(tdelement1);
        trelement.appendChild(tdelement2);
      
        var tasktable = document.getElementById("todotasks");
        tasktable.getElementsByTagName("tbody")[0].appendChild(trelement);
          
    }
    document.getElementById("Task").value = "";
}

function deleteTask(event){
    var deletetr = event.target.parentNode;
    //console.log(deletetr);
    var tasktable = document.getElementById("todotasks").getElementsByTagName("tbody")[0];
    tasktable.removeChild(deletetr);
}

