function me(){
   let nome = document.getElementById('nm').value
   let n1 = Number(document.getElementById('n1').value)
   let n2 = Number(document.getElementById('n2').value)
   let n3 = Number(document.getElementById('n3').value)
if (n1 >= 10) {n1 = 10}
    else {}
if (n2 >= 10) {n2 = 10}
    else {}
if (n3 >= 10) {n3 = 10}
    else {}
      m = (n1 + n2 + n3)/3
      document.getElementById('nome').innerHTML = ('A sua nota foi '+ nome + m)

if(m >= 6)
    document.getElementById('Aprov').innerHTML = ("APROVADO")
else
    document.getElementById('Rprov').innerHTML = ("REPROVADO")
     
}

     
    



