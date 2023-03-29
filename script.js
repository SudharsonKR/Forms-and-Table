// // let submit = document.querySelector("#event_click");
// // submit.addEventListener("click", ()=>{
// //     console.log("check")
// // })



// let form=document.getElementById("form-id");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault()//stop refreshing page
//     let fname = document.getElementById("FirstName")
//     let LstName = document.getElementById("LastName")
//     let addr = document.getElementById("Address")
//     let pin = document.getElementById("PinCode")
//     let gender = document.getElementById("gender")
//     let fchoice = document.getElementById("First Choice")
//     let snchoice = document.getElementById("Second Choice")
//     let st = document.getElementById("state Choice")
//     let co = document.getElementById("Country Choice")

// //      fname.addEventListener("input", ()=>{
// // // console.log("sudharson")
// //      })
//      document.body.append(fname.value, LstName.value);
// })
function addData()

{
    let form=document.getElementById("form-id");
    form.addEventListener("submit", (event)=>{
        event.preventDefault()  //stop refreshing page
        var fname = document.getElementById("FirstName").value;
        var LstName = document.getElementById("LastName").value;
        var addr = document.getElementById("textarea").value;
        var pin = document.getElementById("PinCode").value;
        //var gender = document.getSelection("gender").value;
        // var fchoice = document.getElementById("FirstChoice").value;
        // var snchoice = document.getElementById("SecondChoice").value;
        // var st = document.getElementById("state").value;
        // var co = document.getElementById("Country").value;
        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        var newCell1 = document.createElement("td");
        var newCell2 = document.createElement("td");
        var newCell3 = document.createElement("td");
        var newCell4 = document.createElement("td");
        var newCell5 = document.createElement("td");
        var newCell6 = document.createElement("td");
        var newCell7 = document.createElement("td");
        var newCell8 = document.createElement("td");

    
var gen = document.getElementsByName('gender');
var gen_value;
for(var i = 0; i < gen.length; i++){
    if(gen[i].checked){
        gen_value = gen[i].value;
    }
}

var fchoice = document.getElementsByName('First Choice');
var fchoice_value;
for(var i = 0; i < fchoice.length; i++){
    if(fchoice[i].checked){
        fchoice_value = fchoice[i].value;
    }
}

var snchoice = document.getElementsByName('Second Choice');
var snchoice_value;
for(var i = 0; i < snchoice.length; i++){
    if(snchoice[i].checked){
        snchoice_value = snchoice[i].value;
    }
}

var st = document.getElementsByName('state');
var  st_value;

for(var i = 0; i < st.length; i++){
    if(state[i].selected){
        st_value = state[i].value;
    }
}

var co = document.getElementsByName('Country');
var  co_value;

for(var i = 0; i < co.length; i++){
    if(Country[i].selected){
        co_value = Country[i].value;
    }
}
newCell.innerHTML = fname;
        newCell1.innerHTML = LstName;
        newCell2.innerHTML = addr;
        newCell3.innerHTML = pin;
        newCell4.innerHTML = gen_value;
        newCell5.innerHTML = fchoice_value;
        newCell6.innerHTML = snchoice_value;        
        newCell7.innerHTML = st_value;
        newCell8.innerHTML = co_value;
        newRow.append(newCell, newCell1, newCell2, newCell3, newCell4, newCell5, newCell6, newCell7, newCell8); 

        
        document.getElementById("rows").appendChild(newRow);
        document.getElementById("fname").value = null;
        document.getElementById("LstName").value = null;
        document.getElementById("addr").value = null;        
        document.getElementById("pin").value = null;  
        document.getElementById('gen_value').innerHTML = null;
        document.getElementById("fchoice_value").value = null;
        document.getElementById("snchoice_value").value = null;
        document.getElementById("st_value").value = null;
        document.getElementById("co_value").value = null;
        // document.getElementById("form-id").reset();                    
    })
    
                  
}



