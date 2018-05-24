function createStudent() {
    //document.getElementById("formStudent").submit();
    var x = document.forms["myform"]["name"].value;
    console.log("Aluno: " + x);
    return false;
}

function createBook() {
    //document.getElementById("formStudent").submit();
    var x = document.forms["myform"]["title"].value;
    console.log("Livro: " + x);
    return false;
}

function createLoan() {
    //document.getElementById("formStudent").submit();
    var student = document.forms["myform"]["student"].value;
    var book = document.forms["myform"]["book"].value;
    console.log("Emprestimo: " + student + " pegou o livro " + book);
    return false;
}

class Student {
  constructor(nome, cpf, serie, telefone, nomeDaMae, DataNascimento, obs){
    this.nome = nome;
    this.cpf = cpf;
    this.serie = serie;
    this.telefone = telefone;
    this.nomeDaMae = nomeDaMae;
    this.DataNascimento = DataNascimento;
    this.obs = obs;
  }

}

function AddStudent(){
  var student = new Student(document.forms["myform"]["name"].value, 
    document.forms["myform"]["cpf"].value, document.forms["myform"]["grade"].value, 
    document.forms["myform"]["contact"].value, document.forms["myform"]["mother"].value,
    document.forms["myform"]["bday"].value, "");

  var table = document.getElementById("StudentTable");
  var row = table.insertRow();
  var name = row.insertCell(0);
  var grade = row.insertCell(1);
  name.innerHTML = student.nome;
  grade.innerHTML = student.serie;

  return false;

}

