function returnFirstTwoDrivers(drivers) {
    return [drivers[0],drivers[1]]
}
function returnLastTwoDrivers(drivers) {
    return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}