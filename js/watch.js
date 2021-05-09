$(document).ready(function () {
    $("#myBtn").on("click", function () {
        read();
    });
    $(".reply").click(function () {
        $(this).parents("div.row").next("div.card").toggle();
       
        /*$(".card-inner").toggle(); 
        اذا قمنا بكتابة المر  بهذه الصيغة يسوديالى اظهار الردود لجميع التعليقات دفعة واحدة 
        وليس الرد على التعليق الذي تم الضغط علية 
        
        $(this)لتحديد الزر الذي ضغط عليه فقط
        .parents("div.row")لتحديد الاب(جد) لهذا الزر 
        .next("div.card")لتحديد الاب الاقرب لهذا الزر 
        .toggle()  اخفاء واظهار العنصر المحدد*/
    });
});
/*الداله لاظهار النص الموجود بجانب فيديو المشاهدة او  اخفاءه*/ 
function read() {
    var dots= document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText =document.getElementById("myBtn");
    /*اذا كانت النقاط مخفية اي ان النص ظاهر بشكل كامل قم باظهار النقاط واخفاء النص وجعل الكلام على الزر عرض المزيد */
    if (dots.style.display === "none"){
        dots.style.display ="inline";
        btnText.innerHTML ="عرض المزيد";
        moreText.style.display ="none";
    } else {
        dots.style.display ="none";
        btnText.innerHTML ="عرض عناصر اقل";
        moreText.style.display="inline"
    }
};
/*function ready() {
    var dots = $("#dots");
    var more = $("#more");
    var btnText = $('#myBtn');
    if (dots.css("display") === "none") {
        console.log("if")
        dots.css({ "display": "inline" });
        btnText.text("عرض المزيد");
        more.css({ "display": "none" });

    } else {
        console.log("else")
        dots.css({ "display": "none" });
        btnText.text("عرض عناصر أقل");
        more.css({ "display": "inline" });
    }
}*/