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

    var docu = {};
    var docu_str;
    var local_infoStr = localStorage.getItem("docuInfo");
    var initDocuInfo = JSON.parse(local_infoStr);
    // 判断缓存是否存在
    if (localStorage.getItem("docuInfo")) {
      $("input[name='docMajor']").val(initDocuInfo.docMajor);
      $("input[name='docClass']").val(initDocuInfo.docClass);
      $("input[name='docName']").val(initDocuInfo.docName);
      $("input[name='docStudentId']").val(initDocuInfo.docStudentId);
      $(".docFirst").val(initDocuInfo.docFirst);
      $(".docSecond").val(initDocuInfo.docSecond);
      $(".docThird").val(initDocuInfo.docThird);
      $(".docFour").val(initDocuInfo.docFour);
      $(".docFifthOne").val(initDocuInfo.docFifthOne);
      $(".docFifthTwo").val(initDocuInfo.docFifthTwo);
    }
    // 获取页面信息
    $(".scan").on("click", function() {
      docu.docMajor = $("input[name='docMajor']").val();
      docu.docClass = $("input[name='docClass']").val();
      docu.docName = $("input[name='docName']").val();
      docu.docStudentId = $("input[name='docStudentId']").val();
      docu.docFirst = $(".docFirst").val();
      docu.docSecond = $(".docSecond").val();
      docu.docThird = $(".docThird").val();
      docu.docFour = $(".docFour").val();
      docu.docFifthOne = $(".docFifthOne").val();
      docu.docFifthTwo = $(".docFifthTwo").val();

      // 存入缓存
      docu_str = JSON.stringify(docu);
      localStorage.setItem("docuInfo", docu_str);
    });
  }
);
