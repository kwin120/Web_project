var GpTime=[
    "13:10",
    "23:10",
    "14:10",
    "20:10",
    "21:10",
    "21:10",
    "02:10",
    "21:10",
    "21:10",
    "21:10",
    "21:10",
    "21:10",
    "21:10",
    "21:10",
    "20:10",
    "19:10",
    "13:10",
    "03:10",
    "03:10",
    "02:10",
    "21:10",
];

var GpDate=[
    "03/17",
    "03/31",
    "04/14",
    "04/28",
    "05/12",
    "05/26",
    "06/10",
    "06/23",
    "06/30",
    "07/14",
    "07/28",
    "08/04",
    "09/01",
    "09/08",
    "09/22",
    "09/29",
    "10/13",
    "10/28",
    "11/04",
    "11/18",
    "12/01"
]

var grand_prix=[
    "Australian GP, Melbourne",
    "Bahrain GP, Sakhir",
    "Chinese GP, Shanghai",
    "Azerbaijan GP, Baku",
    "Spanish GP, Catalunya",
    "Monaco GP, Monte Carlo",
    "Canadian GP, Montreal",
    "French GP, Paul Ricard",
    "Austrian GP, Spielberg",
    "British GP, Silverstone",
    "German GP, Hockenheim",
    "Hungarian GP, Budapest",
    "Belgian GP, Spa-Francorchamps",
    "Italian GP, Monza",
    "Singapore GP, Singapore",
    "Russian GP, Sochi",
    "Japanese GP, Suzuka",
    "Mexican GP, Mexico City",
    "United States GP, Austin",
    "Brazilian GP, Sao Paulo",
    "Abu Dhabi GP, Yas Marina"
]


var startDate=new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5,4);