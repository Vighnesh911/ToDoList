let taskinfo=document.getElementById('taskinfo');
let tasklist=document.getElementById('tasklist');
let task=document.getElementById('task');


document.getElementById('add').onclick=function(){
    if(taskinfo.value.length==0){
        alert('enter a task details')
    }
    else{
        tasklist.innerHTML=tasklist.innerHTML+`
        <div class="text">
            <span id='work'>${taskinfo.value}</span>
            <button class='del'>
                <i class='fa fa-trash'></i>
            </button>
            </div>`
            let alltasks=document.querySelectorAll('.del')
            for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick=function(){
                    this.parentNode.remove()
                }
            }
            taskinfo.value=''
        
    }
}