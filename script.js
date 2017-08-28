var wodTypes = [
    {name: "For Time"},
    {name: "AMRAP"},
    {name: "TABATA"},
    {name: "60/15"},
    {name: "21-15-9"},
    {name: "2-4-6-8"}
];

var timeOrPieceBasedSwitch = true;

var exerciseType = [
    {name: "Jumping Squat", oneMinuteStandard: 15, unit: "rep"},
    {name: "Box Jump", oneMinuteStandard: 15, unit: "rep"},
    {name: "Pistol", oneMinuteStandard: 15, unit: "rep"},
    {name: "Burpee", oneMinuteStandard: 15, unit: "rep"},
    {name: "Over The Bar Burpee", oneMinuteStandard: 15, unit: "rep"},
    {name: "Chest To Bar", oneMinuteStandard: 10, unit: "rep"},
    {name: "Pull-ups", oneMinuteStandard: 15, unit: "rep"},
    {name: "Push-ups", oneMinuteStandard: 15, unit: "rep"},
    {name: "Tolóckodás", oneMinuteStandard: 15, unit: "rep"},
    {name: "Evezés", oneMinuteStandard: 15, unit: "rep"},
    {name: "Running", oneMinuteStandard: 150, unit: "m"},
    {name: "Swimming", oneMinuteStandard: 50, unit: "m"},
    {name: "Muscle Up", oneMinuteStandard: 5, unit: "rep"},
    {name: "Toast To Bar", oneMinuteStandard: 15, unit: "rep"},
    {name: "Sit Ups", oneMinuteStandard: 15, unit: "rep"},
    {name: "KB Rowing", oneMinuteStandard: 20, unit: "rep", weightMen: 32, weightWoman: 24},
    {name: "KB Swing", oneMinuteStandard: 15, unit: "rep", weightMen: 32, weightWoman: 24},
    {name: "KB Snatch", oneMinuteStandard: 20, unit: "rep", weightMen: 24, weightWoman: 16},
    {name: "KB Goblet Squat", oneMinuteStandard: 15, unit: "rep", weightMen: 32, weightWoman: 24},
    {name: "KB Farmer's Walk", oneMinuteStandard: 20, unit: "m", weightMen: 64, weightWoman: 48},
    {name: "KB Lunge", oneMinuteStandard: 15, unit: "rep", weightMen: 64, weightWoman: 48},
    {name: "Deadlift", oneMinuteStandard: 15, unit: "rep", weightMen: 80, weightWoman: 60},
    {name: "Clean", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 40},
    {name: "Front Squat", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 40},
    {name: "Back Squat", oneMinuteStandard: 15, unit: "rep", weightMen: 32, weightWoman: 60},
    {name: "GTOH", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 60},
    {name: "STOH", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 60},
    {name: "Snatch", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 60},
    {name: "Overhead Squat", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 60},
    {name: "Thruster", oneMinuteStandard: 15, unit: "rep", weightMen: 60, weightWoman: 60},
    {name: "Wall Ball", oneMinuteStandard: 15, unit: "rep", weightMen: 10, weightWoman: 6},
    {name: "Rope Climbing", oneMinuteStandard: 3, unit: "rep"},
    {name: "Double Unders", oneMinuteStandard: 30, unit: "rep"},
    {name: "Simple Unders", oneMinuteStandard: 60, unit: "rep"},
    {name: "Hand Stand Push-up", oneMinuteStandard: 5, unit: "rep"}
];

function generateWOD() {

};