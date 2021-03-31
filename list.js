family = ['Oleksii', 'Maryna', 'Taras', 'Zoriana', 'Kivi']
// myList.innerHTML = '<li>'+family[0]+'</li>'+'<li>'+family[1]+'</li>'+'<li>'+family[2]+'</li>'+ '<li>'+ family[3] + '</li>'
familyObj = {Oleksii: {}, Maryna: {}, Taras: {}, Zoriana: {}, Kivi: {}}
familyArr = []

for (name in familyObj) {
    familyArr.push(name)
}


for (i=0; i<family.length; i++) {
    myList.innerHTML += '<li>'+family[i]+'</li>'
}
for (i=0; i<family.length; i++) {
    mySelect.innerHTML += '<option>' + family [i] + '</option>' 
}








































 