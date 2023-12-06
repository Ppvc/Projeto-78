var images = [
    "bigfamilia.jpg",
    "grandfather.jpg",
    "father.jpg",
    "brother.jpg",
    "sister.jpg",
    "mother.jpg",
    "agostinho.jpg"
];

var names = [
    "Álbum da Grande Família",
    "Seu Floriano",
    "Lineu",
    "Tuco",
    "Bebel",
    "Nenê",
    "Agostinho"
];

var i =0;
function update()
{
    i++;
    var numberOfFamilyMemberInArray = 6
    if(i > numberOfFamilyMemberInArray)
    {
        i=0;
    }
    var updatedImage = images[i];
    var uptadedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = uptadedName;
}