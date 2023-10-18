function calcGrade() {
    let s_number = document.getElementById("s-number").value;
    let s_name = document.getElementById("name").value;
    let s_midterm = document.getElementById("midterm").value;
    let s_final = document.getElementById("final").value;
    let s_project = document.getElementById("project").value;

    let average = (s_midterm * 0.3) + (s_final * 0.4) + (s_project * 0.3);

    document.getElementById("result").innerHTML =
    "Öğrenci Numarası" + s_number + "<br> Isim" + s_name + "<br> average" + average;

    let grade;
    if (average >= 90) {
        grade = 'A';
    }
    else if (average >= 80) {
        grade = 'B';
    }
    else if (average >= 70) {
        grade = 'C';
    }
    else if (average >= 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }

    document.getElementById("result").innerHTML =
    "<br> Isim: " + s_name + "<br> average: " + average + "<br> Harf Notu: " + grade;
}