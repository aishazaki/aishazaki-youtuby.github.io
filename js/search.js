$(document).ready(function () {
    $("#search-filter-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    /*عندما نحدد صندوق تاشير يعطى له الخاصية checked */
    $("input:checkbox").click(function() {
        var $box =$(this);
        if ($box.is(":checked")) {
            /**
         * نلاحظ أن كل صناديق التأشير ضمن العمود الواحد ,  تحوي نفس الاسم 
         * لذلك يمكن استخدام الاسم لتحديد جميع صناديق التأشير ضمن العمود الواحد 
         */
            var group = "input:checkbox[name='"+ $box.attr("name")+"']";
            $(group).prop("checked", false);// نقوم بجعل جميع صناديق التأشير ضمن العمود غير مفعّلة
            $box.prop("checked", true);  // تفعيل الصندوق الذي تم الضغط عليه 
        }

    });
});