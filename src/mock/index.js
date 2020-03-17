//import Mock from "mockjs";
const Mock = require("mockjs");
const data = Mock.mock({
    "data|50":[
        {
          "key|+1":1001,
          "booksName":"@csentence(4, 8)",
          "authName":"@cname",
          "booksImage":"@image('70x90', '#50B347', '#FFF', 'Mock.js')",
          "tags":()=>{
              var arr = ["玄幻","修仙","动作","爱情","都市","校园","黑道","穿越"]
              var n = parseInt(2+Math.random()*arr.length-1);
              return arr.slice(0,n);
          },
          "booksDes":"@cparagraph()",
          "isPay":()=>{
              var n = Math.random();
              if(n>0.5){
                  return true;
              }else{
                  return false
              }
          }
        }
    ]
})

Mock.mock(/\/books\/booksPage/,"get",(options)=>{
    let {page,limit} = JSON.parse(options.body);
    var arr = [];
    for(var i=(page-1)*limit;i<page*limit;i++){
        arr.push(data.data[i]);
    }

    return {
        data:arr,
        count:data.data.length
    };
})