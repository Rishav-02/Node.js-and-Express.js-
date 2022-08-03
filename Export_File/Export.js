const add = (a,b)=>{
    return a+b;
};
const subt = (a,b)=>{
    return a-b;
};
const name = "Rishav";

// module.exports = name;
// module.exports.add1 = add;
// module.exports.subt1 = subt;

module.exports = {add,subt,name};  //short form of exports in one line
