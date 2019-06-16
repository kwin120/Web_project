$(Document).ready(function(){
    $("#courseTable").append("<tr><th>Location</th><th>Date</th><th>Time</th></tr>");
    
    var GPCount = grand_prix.length;
    var today = Date.parse((new Date()).toDateString());
    
    
    var secondUnit=1000;
    var minuteUnit=secondUnit*60;
    var hourUnit=minuteUnit*60;
    var dayUnit=hourUnit*24;
    
    for(var x=0;x<GPCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+grand_prix[x]+"</td>");
        $("#courseTable").append("<td>"+GpDate[x]+"</td>");
        $("#courseTable").append("<td>"+GpTime[x]+"</td>");
        $("#courseTable").append("</tr>");
        
    }


});