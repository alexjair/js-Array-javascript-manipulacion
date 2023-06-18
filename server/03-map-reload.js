const orders = [
    {
      name: "Nicolas",
      total: 60,
      deli: true,
    },
    {
      name: "Zulema",
      total: 120,
      deli: false,
    },
    {
      name: "Santiago",
      total: 180,
      deli: true,
    },
    {
      name: "Valentina",
      total: 240,
      deli: true,
    },
  ]
  console.log('orders',orders);

  //crear uno original
  const objTotals = orders.map( row => {
    return row.total
  });
  console.log('totals',objTotals);

  //agregar task : error
  /*
  const objTotals2 = orders.map( row => {
    row.taks = 0.19;
    return row
  });
    console.log('totals2',objTotals2);
    */

  //agregar task : error
  const objTotals3 = orders.map( row => {
      return {
        ...row,
        tax2: 0.19
      }
  });
  console.log('objTotals3',objTotals3);
