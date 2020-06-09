layui.use(
  [
    "jquery",
    "element",
    "laydate",
    "upload",
    "table",
    "laypage",
    "layer",
    "carousel",
    "form",
    "laytpl"
  ],
  function() {
    var element = layui.element;
    var table = layui.table;
    var laydate = layui.laydate;
    var table = layui.table;
    var $ = layui.jquery;
    var upload = layui.upload;
    var layer = layui.layer;
    var laydate = layui.laydate;
    var laypage = layui.laypage;
    var carousel = layui.carousel;
    var form = layui.form;
    var laytpl = layui.laytpl;

    var local_str; //定义变量在后期在缓存中存数据使用

    if (!localStorage.getItem("projectInfo")) {
      // console.log('缓存为空,跳转页面')
      window.location.href = "./newProject.html";
    }

    // 提取用户信息
    var local_arr = localStorage.getItem("projectInfo");
    var project_arr = JSON.parse(local_arr);
    // 将缓存信息设置为表格的初始信息
    var data = project_arr;
    // 定义表格
    function MiTale(data) {
      table.render({
        elem: "#demo",
        cols: [
          [
            //标题栏
            { field: "id", title: "项目序号" },
            { field: "testId", title: "测试编号" },
            { field: "testTime", title: "测试时间" },
            { field: "testName", title: "项目名称" },
            { field: "testUnit", title: "测试单位" },
            { field: "testMan", title: "测试人员" },
            { field: "testNumber", title: "土样" }
          ]
        ],
        data: data,
        minHeight: 500
      });
    }

    MiTale(data);

    // 删除事件

    $(".del_project").on("click", function() {
      console.log("删除项目");
      // 获取输入框中的 删除序号del_id ：由输入框中的项目序号-1 对应到表格数据的数组的下标
      // var del_id = $("input[name='delId']").val() - 1
      var del_id = $("input[name='delId']").val();
      // console.log(data.length)
      // console.log(del_id);
      // console.log("data", data);
      for (var x = 0; x < data.length; x++) {
        if (del_id == data[x].id) {
          // console.log("找到", x);
          data.splice(x, 1);
          // console.log("删除之后的", data);
          local_str = JSON.stringify(data);
          localStorage.setItem("projectInfo", local_str);
          local_arr = localStorage.getItem("projectInfo");
          project_arr = JSON.parse(local_arr);
          data = project_arr;
          // 重新渲染表格
          MiTale(data);
          // 输入框清空
          var del_id = $("input[name='delId']").val("");
        }
      }     
    });   
  }
);
