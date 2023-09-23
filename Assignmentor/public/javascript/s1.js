
const add = document.getElementById("addtask");
        const name = document.getElementById("name");
        const date= document.getElementById("date")
        const time=document.getElementById("time")
        const addtaskmenu = document.getElementById("addtaskmenu");

        function show(){
            addtaskmenu.style.display="inline-block";
        }
        function increaseWidth(x){
            var nofCharacters = x.value.length;
            if(nofCharacters>=15){
                var length = nofCharacters+"ch"
                x.style.width = length;
            }
        }
        function DONe(){
            var taskname = name.value;
            var datex = date.value;
            var timex = time.value;
            const ol = document.createElement("ol")
            const tasks= document.createElement("li");
            const para = document.createElement("pre");
            para.classList.add("task");
            para.innerText = "Task:"+" "+taskname+"         ReminderAt"+"    "+"date:"+datex+"   "+"time:"+timex ;
            ol.appendChild(tasks)
            tasks.appendChild(para)
            document.body.appendChild(ol);
            
            addtaskmenu.style.display="none";
        }