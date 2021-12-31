function Time() {
//creating a date obj
var date = new Date();
// get current hour
var hour = date.getHours();

var minute = date.getMinutes();
// get the current
var second = date.getSeconds();
//am or pm
var period = "";


    if (hour >= 12) {
         period = "PM";
    } else {
    period = "AM";
    }
    //converting the hr in 12-hr format 
    if (hour ==0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }


hour = update(hour);
minute = update (minute);
second = update (second);

document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
//set Timer to 

setTimeout(Time, 1000);

}




//function to update time if less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
        } else {
    return t;
    }
}
Time()
