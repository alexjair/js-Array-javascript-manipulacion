const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  const dtResp = users.map( data => {
    return data.attributes;
  });
  console.log('dtResp',dtResp.flat());

  //uso de flatmap
    const dtResp2 = users.flatMap(data => data.attributes);
    console.log('dtResp2',dtResp2);

    //reto-flatmap
    const calendars = {
        primaryCalendar: [
          {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
          },
          {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
          },
        ],
        secondaryCalendar: [
          {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
          },
          {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
          },
        ],
      };

      //mi solucion
      //console.log(calendars.primaryCalendar.flatMap(x=>x.endDate),calendars.secondaryCalendar.flatMap(x=>x.endDate));
      const result1 = calendars.primaryCalendar.flatMap(x=>x.endDate);
      const result2 = calendars.secondaryCalendar.flatMap(x=>x.endDate);
      console.log(result1);
      console.log(result2);
      const result3 = result1.concat(result2);
      console.log(result3);

      //nico solucion
      const resp = Object.values(calendars).flatMap(item => {
        return item.map(data => data.startDate);
      });
      console.log(resp);

      