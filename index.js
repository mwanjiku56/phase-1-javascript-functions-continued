function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function(job = 'go to the office'){
    return (`This Monday, I will ${job}.`);
}

function wrapAdjective(adjective = "*"){
    return function(wrap = ("special")){
        return(`You are ${adjective}${wrap}${adjective}!`);
    }
}
wrapAdjective("%")("a dedicated programmer");
