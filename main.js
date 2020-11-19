var Students = [];

function Submit() {
    var Stu1 = document.getElementById("NS-1").value;
    var Stu2 = document.getElementById("NS-2").value;
    var Stu3 = document.getElementById("NS-3").value;
    var Stu4 = document.getElementById("NS-4").value;

    Students.push(Stu1);
    Students.push(Stu2);
    Students.push(Stu3);
    Students.push(Stu4);

    console.log(Students);

    document.getElementById("Results").innerHTML = Students;
    document.getElementById("SubmitB").style.display= "none";
    document.getElementById("SortB").style.display= "inline-block";
}

function Sort() {
    Students.sort();
    console.log(Students);
    document.getElementById("Results").innerHTML = Students;
}