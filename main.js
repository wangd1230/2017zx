$(document).ready(function(){
Bmob.initialize("ee77ec04af945c57847f7a5436266583","79c8446baaaafcd432d39710bbdde02f");

var Student = Bmob.Object.extend("Student");
var student = new Student();

$('.btn').click(function(){
	//
	var name = $('#name').val();
	var xueyuan = $('#xueyuan').val();
	var zhuanye = $('#zhuanye').val();
	var phone = String($('#phone').val());
	var zhiyuanyi = $('#zhiyuanyi').val();
	var zhiyuaner = $('#zhiyuaner').val();
	var zhiyuansan = $('#zhiyuansan').val();
	var techang = $('#techang').val();
	//
	if (name !=""&&xueyuan !="" &&zhuanye !="" &&phone !="" &&zhiyuanyi !="" &&zhiyuaner !="" &&
		techang !="" ) {
	student.set("name",name);
	student.set("xueyuan",xueyuan);
	student.set("zhuanye",zhuanye);
	student.set("phone",phone);
	student.set("zhiyuanyi",zhiyuanyi);
	student.set("zhiyuaner",zhiyuaner);
	student.set("zhiyuansan",zhiyuansan);
	student.set("techang",techang);
	student.save(null,{
	success:function(student){
		console.log('添加成功');
	},
	error:function(student,error){
		console.log("添加失败");
}
})
}
else{
	alert("请填写完整！");
}
})

})
