function clearScreen()
{
    document.getElementById("result").value ="" ;
}

function updScreen(val) {

    var x = document.getElementById("result").value;
    document.getElementById("result").value = x + val;
}

