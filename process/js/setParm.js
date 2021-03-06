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

    // 缓存提取信息
    var local_arr = localStorage.getItem("projectInfo");
    var project_arr = JSON.parse(local_arr);
    // 将缓存信息设置为表格的初始信息
    var data = project_arr;
    // 定义下拉框的选中之后的value值作为标记数据的数组下标
    var select_id;
    // 定义缓存
    var local_str;
    // 定义选中的数据的 以及缓存名称
    var selected_arr;
    var selected_arr_str;
    var select_str;
    var selected_local_infoStr;
    // 判断缓存是否存在 因为数据从缓存中取得
    if (!localStorage.getItem("projectInfo")) {
      console.log("缓存为空,跳转页面");
      window.location.href = "./newProject.html";
    }

    console.log("缓存获取数据", data);
    //由缓存拿到数据 渲染页面的下拉框
    var select_str = "";
    for (var x = 0; x < data.length; x++) {
      select_str =
        select_str +
        `
     <option value="` +
        x +
        `" >` +
        data[x].id +
        `</option>
    `;
    }

    //   select_str = select_str + `
    //   <option value="`+data[x].id+`" >`+data[x].id+`</option>
    //  `

    $('select[name="sel"]').append(select_str);

    console.log(data[0]);

    //下拉框默认为第一条数据 渲染默认数据
    $("input[name='testId']").val(data[0].testId);
   // $("input[name='testTime']").val(data[0].testTime);
    $("input[name='testName']").val(data[0].testName);
    $("input[name='testUnit']").val(data[0].testUnit);
    $("input[name='testMan']").val(data[0].testMan);
    $("input[name='testNumber']").val(data[0].testNumber);

    $("input[name='dwellTime']").val(data[0].dwellTime);
    $("input[name='samplingInterval']").val(data[0].samplingInterval);

    //
    $(".select_num").on("change", function() {
      // select_id 减去1 之后再才是数组的对应下标
      // select_id = $(this).val() - 1;
      select_id = $(this).val();
      // select_id += 1
      console.log(select_id, data[select_id]);
      // 由select_id拿到对应的数据 渲染页面的输入框信息
      $("input[name='testId']").val(data[select_id].testId);
     // $("input[name='testTime']").val(data[select_id].testTime);
      $("input[name='testName']").val(data[select_id].testName);
      $("input[name='testUnit']").val(data[select_id].testUnit);
      $("input[name='testMan']").val(data[select_id].testMan);
      $("input[name='testNumber']").val(data[select_id].testNumber);
      $("input[name='dwellTime']").val(data[select_id].dwellTime);
      $("input[name='samplingInterval']").val(data[select_id].samplingInterval);
    });

    // 测试实验参数 事件
    $(".set_project").on("click", function() {
      // 判断 参数是否填写
      if (
        $("input[name='dwellTime']").val() &&
        $("input[name='samplingInterval']").val()
      ) {
        // 获取参数 并更新对应数据
        // data[select_id].dwellTime = $("input[name='dwellTime']").val()
        // data[select_id].samplingInterval = $("input[name='samplingInterval']").val()
        console.log(data[select_id]); // 选中的需要进行设置参数的条目
        console.log(data);

        // 将更新之后的数据 设置缓存
        local_str = JSON.stringify(data);
        localStorage.setItem("projectInfo", local_str);
        // 参数设置成功提示
        layer.msg(
          "参数设置成功！",
          {
            icon: 1,
            time: 1000
          },
          function() {
            // 在提示结束后 将选中的数据存入缓存中 方便实时采集页面使用
            console.log(select_id);
            if (select_id) {
              console.log("选择了");
              selected_arr = data[select_id]; // 选框选中的数据
              selected_arr.dwellTime = $('input[name="dwellTime"]').val();
              selected_arr.samplingInterval = $(
                'input[name="samplingInterval"]'
              ).val();
              selected_arr_str = JSON.stringify(selected_arr);
              console.log(selected_arr_str);
              localStorage.setItem("selectedInfo", selected_arr_str);
            } else {
              console.log("没有选择");
              selected_arr_str = JSON.stringify(data[0]);
              console.log(selected_arr_str);
              localStorage.setItem("selectedInfo", selected_arr_str);
            }

            //  selected_local_infoStr = localStorage.getItem('selectedInfo');
            //  select_str = JSON.parse(selected_local_infoStr);
          }
        );
      } else {
        layer.msg(
          "请填写参数！",
          {
            icon: 0,
            time: 1000
          },
          function() {}
        );
      }
    });
  }
);
