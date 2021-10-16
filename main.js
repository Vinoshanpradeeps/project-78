var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "me.jpeg", "sister.jpeg", "mother.jpeg", "father.jpeg", "elder cousin.jpeg", "younger cousin.jpeg", "bigmother.jpeg", "bigfather.jpeg", "grandmother.jpeg", "grandfather.jpeg"];
var names = ["Fmaily Book","Vinoshan", "Sesheka", "Sujitha", "Pradeep", "Hanshikka", "Haniya", "Preethi", "Arasu", "Nirmala", "Natajaj"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 10
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
}
