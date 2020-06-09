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

    // 原始的静态数据
    var IntData = [
      {
        id: "1",
        testId: "1",
        testTime: "2018-07",
        testName: "垃圾土室内沉降测试",
        testUnit: "中原工学院",
        testMan: "测试人员1号",
        testNumber: "1",
        dwellTime: "1", // 采样时间
        samplingInterval: "1" // 采样间隔s
      },
      {
        id: "2",
        testId: "6570",
        testTime: "2018-07",
        testName: "垃圾土室内沉降测试",
        testUnit: "中原工学院",
        testMan: "董宇",
        testNumber: "2",
        dwellTime: "1", // 采样时间
        samplingInterval: "1" // 采样间隔
      }
    ];

    localStorage.clear();
    // 定义调用表格所需数据
    var data;
    // 第一次打开页面的时候 将原始数据存入缓存 然后获取缓存 渲染表格
    if (!localStorage.getItem("projectInfo")) {
      console.log("缓存为空,设置缓存");
      // localStorage.clear()
      var local_str = JSON.stringify(IntData);
      localStorage.setItem("projectInfo", local_str);
      var local_arr = localStorage.getItem("projectInfo");
      var project_arr = JSON.parse(local_arr);
      data = project_arr;
    }

    // 从其他页面调回本页面重新获取页面的缓存数据渲染表格
    var local_arr = localStorage.getItem("projectInfo");
    var project_arr = JSON.parse(local_arr);
    data = project_arr;

    var str = {
      id: "1",
      testId: "1",
      testTime: "2018-07",
      testName: "垃圾土室内沉降测试",
      testUnit: "中原工学院",
      testMan: "测试人员1号",
      testNumber: "1",
      dwellTime: "1", // 采样时间
      samplingInterval: "1" // 采样间隔s
    };
    var selected_arr_str = JSON.stringify(str);
    localStorage.setItem("selectedInfo", selected_arr_str);

    // 定义渲染表格的函数
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
        maxHeight: 600
      });
    }

    MiTale(data);

    //选择日期 日期时间选择器
    laydate.render({
      elem: "#test5",
      type: "datetime"
    });

    // 点击的新增事件
    $(".add_project").on("click", function() {
      // id 利用data数据的长度作为新添加数据的id值
      var id = data.length + 1;
      console.log("点击添加新项目");
      // 创建新对象存入输入框中的新的项目信息
      var new_obj = {
        id: id,
        testId: $("input[name='testId']").val(),
        testTime: $("input[name='testTime']").val(),
        testName: $("input[name='testName']").val(),
        testUnit: $("input[name='testUnit']").val(),
        testMan: $("input[name='testMan']").val(),
        testNumber: $("select[name='testNumber']").val(),
        dwellTime: "1", // 采样时间
        samplingInterval: "1" // 采样间隔
      };
      console.log(new_obj);
      // 判断输入的信息是否完整
      if (
        !(new_obj.testId == "") ||
        !(new_obj.testTime == "") ||
        !(new_obj.testName == "") ||
        !(new_obj.testUnit == "") ||
        !(new_obj.testMan == "") ||
        !(new_obj.testNumber == "")
      ) {
        // 将新数据放入原始的data数据中
        data.push(new_obj);
        // 重新渲染表格
        MiTale(data);
        // 清空页面中输入框的信息
        $("input[name='testId']").val("");
        $("input[name='testTime']").val("");
        $("input[name='testName']").val("");
        $("input[name='testUnit']").val("");
        $("input[name='testMan']").val("");
        $("input[name='testNumber']").val("");

        // 将信息存入缓存 方便页面调用 首先需要将原始的数据数组信息 序列化为json 然后存入缓存
        console.log(data);
        var local_str = JSON.stringify(data);
        localStorage.setItem("projectInfo", local_str);
        // 提取用户信息
        var local_arr = localStorage.getItem("projectInfo");
        var project_arr = JSON.parse(local_arr);
        console.log(project_arr);
      } else {
        layer.msg(
          "请输入完整信息",
          {
            icon: 0,
            time: 1000
          },
          function() {
            //do something
          }
        );
      }
    });
    // // 将信息存入缓存 方便页面调用
    // var str =  JSON.stringify(data)
    // localStorage.setItem('userInfo', str);
    // // 提取用户信息
    // var infoStr = localStorage.getItem('userInfo');
    // var info = JSON.parse(infoStr);
  }
);
