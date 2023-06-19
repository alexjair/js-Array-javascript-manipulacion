//ejemplo 02
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const newdt = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]){
       obj[item] = 1;
    }else{
       obj[item] = obj[item] + 1;
    }
    return obj;
  },{});
console.log('map-reduce',newdt);
