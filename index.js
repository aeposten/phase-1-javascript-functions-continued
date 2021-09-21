function saturdayFun (activity = 'roller-skate') {
     return `This Saturday, I want to ${activity}!`;
  }

  saturdayFun();
  saturdayFun('bathe my dog');

const mondayWork = (activityTwo= "go to the office") => {
    return `This Monday, I will ${activityTwo}.`
}

function wrapAdjective (flair = "*") {
    return function innerFunction (string = "special") {
        return `You are ${flair}${string}${flair}!`
    } 
}