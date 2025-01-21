export async function loader() {
  const response = {
    status: 200,
    data: {
      componentList: [
        // { title: "title", subtitle: "subtitle", type: "pie", value: {} },
        // { title: "title", subtitle: "subtitle", type: "pie", value: {} },
        {
          title: "title",
          subtitle: "subtitle",
          type: "line",
          value: {
            labelName: "labelName",
            values: [
              { xAxis: "January", value: 186 },
              { xAxis: "February", value: 305 },
              { xAxis: "March", value: 237 },
              { xAxis: "April", value: 73 },
              { xAxis: "May", value: 209 },
              { xAxis: "June", value: 214 },
            ],
          },
        },
        // {
        //   title: "title",
        //   subtitle: "subtitle",
        //   type: "bar-horizontal",
        //   value: {},
        // },
        // {
        //   title: "title",
        //   subtitle: "subtitle",
        //   type: "bar-interaction",
        //   value: {},
        // },
      ],
    },
  };
  if (response.status !== 200) {
    throw "Error";
  }
  return response.data;
}
