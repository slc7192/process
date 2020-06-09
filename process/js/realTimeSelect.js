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

    var selected_local_infoStr, select_str, init_data;

    // 判断缓存是否存在 因为数据从缓存中取得
    if (!localStorage.getItem("selectedInfo")) {
     
    } else {
      // 从缓存中获取数据 渲染页面
      selected_local_infoStr = localStorage.getItem("selectedInfo");
      select_str = JSON.parse(selected_local_infoStr);
      init_data = select_str;
      console.log(select_str);
    }

    $("input[name='testId']").val(init_data.testId);
   // $("input[name='testTime']").val(init_data.testTime);
    $("input[name='testName']").val(init_data.testName);
    $("input[name='testUnit']").val(init_data.testUnit);
    $("input[name='testMan']").val(init_data.testMan);
    $("input[name='testNumber']").val(init_data.testNumber);
  }
);


