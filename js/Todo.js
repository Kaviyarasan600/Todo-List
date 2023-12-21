const EventDisplay = document.getElementById("OnDisplay");
const EventAddBtn = document.getElementById('OnAddBtn');
const EventInput = document.getElementById('OnInput');

let EventList = []
window.onload = () =>{
    EventList = JSON.parse(localStorage.getItem('EventList')) || []
    EventList.forEach(Event => NewElements(Event) );
};

function Validation(){
    const Values1 = EventInput.value
    // console.log(EventInput.value)
    Values1 === '' ?
    (
        EventInput.setAttribute('placeholder','Enter Event')
    ) : 
    (
        EventList.push(Values1),
        localStorage.setItem('EventList',JSON.stringify(EventList)),
        NewElements(Values1),
        EventInput.value = '',
        EventInput.setAttribute('placeholder','')
    );
};


function NewElements(Event){
    const NewDiv = document.createElement('div');
    const NewCheckBox = document.createElement('input');
    const NewLine = document.createElement('p');
    const NewBtn = document.createElement('button');

    
    NewCheckBox.type = 'checkbox';
    NewBtn.type = 'submit';

    NewLine.innerHTML = Event;
    NewBtn.innerHTML = 'x'

    NewDiv.classList = 'ma-a-dv';
    NewCheckBox.classList ='ma-a-dv-in';
    NewLine.classList = 'ma-a-dv-p';
    NewBtn.classList = 'ma-a-dv-Cbtn';

    NewDiv.appendChild(NewCheckBox);
    NewDiv.appendChild(NewLine);
    NewDiv.appendChild(NewBtn);

    NewCheckBox.addEventListener('click',()=>{
        NewCheckBox.checked == true ? (
            NewBtn.style.display = 'block',
            NewLine.style.textDecoration = 'line-through',
            NewLine.style.color = 'red'
        ) : (
            NewBtn.style.display = 'none',
            NewLine.style.textDecoration = 'none',
            NewLine.style.color = 'black'
        );
    });
    NewBtn.addEventListener('click',()=>{
        EventDisplay.removeChild(NewDiv)
        remove(Event)
    });
    function remove(){
        let index = EventList.indexOf(Event)
        if(index > -1){
            EventList.splice(index, 1)
        }
        localStorage.setItem('EventList',JSON.stringify(EventList))
    };

    EventDisplay.appendChild(NewDiv);
};

EventAddBtn.addEventListener('click',()=>{
    Validation()
});