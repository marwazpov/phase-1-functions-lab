// Code your solution in this file!
function distanceFromHqInBlocks (location){
    const destination=42;
    let distance = destination-location;
    return Math.abs(distance);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(location){
    const destination=42;
    let distance = [(destination-location)*264];
    return Math.abs(distance);
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(destination, location){
    let distance = [(destination-location)*264];
    return Math.abs(distance);
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
    let startConversion = (start*264);
    let destConversion = (destination*264)
    let distance = Math.abs((destConversion)-(startConversion))
    if (distance<400) {
        return 0;
    } if (distance>400 && distance<2000){
        return (distance-400)*0.02;
    } if (distance>2000 && distance<2500){
        return 25;
    } if (distance>2500){
        return "cannot travel that far";
    }
}



