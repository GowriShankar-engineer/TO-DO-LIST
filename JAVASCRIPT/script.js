var rowCounter = 1;

function addValues()
{
    var container = document.getElementById('display');

    var displayDiv = document.createElement('div');
    container.appendChild(displayDiv);
    displayDiv.className = "display-div";
    displayDiv.id = "display-div-"+rowCounter;

    var label = document.createElement('label');
    displayDiv.appendChild(label);
    label.innerText = document.getElementById('txtInput').value;
    label.style.float = "left";
    label.className = "labels";
    label.id = "labels-" + rowCounter; 

    var btnContainer = document.createElement('div');
    displayDiv.appendChild(btnContainer);
    btnContainer.id = "btnContainer-"+rowCounter;
    btnContainer.style.float = "right";

    var doneSpan = document.createElement('button');
    btnContainer.appendChild(doneSpan);
    doneSpan.title = "Done";
    doneSpan.className = "span done";
    doneSpan.setAttribute("onclick","doneUpdation(this)");
    doneSpan.id = "doneSpan-"+rowCounter;
    var doneImg = document.createElement('img');
    doneImg.setAttribute("src", "https://raw.githubusercontent.com/GowriShankar-engineer/Linkedin-Signin-Page-Clone/main/tick.png");
    doneImg.setAttribute("width", "20");
    doneImg.setAttribute("height", "20");
    doneImg.className = "actionImgs";
    doneSpan.appendChild(doneImg);
    doneImg.id = "doneImg-"+rowCounter;

    var updateSpan = document.createElement('button');
    btnContainer.appendChild(updateSpan);
    updateSpan.className = "span update";
    updateSpan.setAttribute("onclick","UpdateValues(this)");
    updateSpan.id = "updateSpan-"+rowCounter;
    updateSpan.title = "Update";
    var updateImg = document.createElement('img');
    updateImg.setAttribute("src", "https://raw.githubusercontent.com/GowriShankar-engineer/Linkedin-Signin-Page-Clone/main/refresh.png");
    updateImg.setAttribute("width", "20");
    updateImg.setAttribute("height", "20");
    updateImg.className = "actionImgs";
    updateSpan.appendChild(updateImg);
    updateImg.id = "updateImg-"+rowCounter;

    var deleteSpan = document.createElement('button');
    btnContainer.appendChild(deleteSpan);
    deleteSpan.title = "Delete";
    deleteSpan.className = "span delete";
    var deleteImg = document.createElement('img');
    deleteImg.setAttribute("src", "https://github.com/GowriShankar-engineer/Linkedin-Signin-Page-Clone/blob/main/trash.png?raw=true");
    deleteImg.setAttribute("width", "20");
    deleteImg.setAttribute("height", "20");
    deleteImg.className = "actionImgs";
    deleteSpan.appendChild(deleteImg);
    deleteSpan.setAttribute("onclick","deleteValues(this)");
    deleteSpan.id = "deleteSpan-"+rowCounter;
    deleteImg.id = "deleteImg-"+rowCounter;

    rowCounter = rowCounter + 1;
    document.getElementById('txtInput').value = "";
}

function doneUpdation(doneUpdate)
{
    var rowId = doneUpdate.id.replace("doneSpan-","");
    var rowUpdation = "display-div-"+rowId;
    document.getElementById(rowUpdation).style = "background-color: rgba(0, 230, 64,0.2);";
    //document.getElementById("labels-"+rowId).style = "color:rgba(0, 230, 64,0.8);";
}

function deleteValues(deleteUpdate)
{
    rowId = deleteUpdate.id.replace("deleteSpan-","");
    document.getElementById('display-div-'+rowId).remove();
}

function UpdateValues(UpdateValue)
{
    rowId = UpdateValue.id.replace("updateSpan-","");
    var listTxt = document.getElementById("labels-"+rowId).innerText;
    document.getElementById('txtInput').value = listTxt;
    document.getElementById('hiddenInput').value = rowId;
}

function EditValues(){
    var hiddenValue = document.getElementById('hiddenInput').value;
    if(hiddenValue!=undefined && hiddenValue!="")
    {
        document.getElementById('labels-'+hiddenValue).innerText = document.getElementById('txtInput').value;

        document.getElementById('hiddenInput').value = "";
        document.getElementById('txtInput').value = "";
    }
    else{
        addValues()
    }
}

