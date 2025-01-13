let value;

const firstName = "Ömer";
const lastName = "Höbek";

const langs = "Matematik,Özel,ders ";

value= firstName+ " " + lastName;   // boşluk bıraktı araya

value= "Mustafa Murat";
value= value +" " + "Coşkun"; //value+= "Coşkun" aynı işlevi görür

value= firstName.length; // kaç karakter içeridiğini söyler 
value= firstName.concat(" ", lastName," ", "Zevkle"); // Ömer Höebek Zevkle yazısı oluştu 

value= firstName.toLowerCase();  // tüm kelimeyi küçük harflerle yazar 
value= firstName.toUpperCase();  // tüm kelimeyi büyük harfle yazar 

value = firstName[0]; // kelimenin ilkharfini yazdırır
value = firstName[3];  // kelimenin son harfi yazdırırlır
value= firstName[firstName.length - 1]; // son elemanın yazdırır.


//İndex of 

value= firstName.indexOf("Ö"); //  ö harfinin kaçıncı index olduğunu söyler bize 
value= firstName.indexOf("r");
value= firstName.indexOf("m");  // içinde olmadığı için -1 yazdırır. 

//Char at
value= firstName.charAt(0); // 0. elemanın hangisi olduğunu söyler bize 
value= firstName.charAt(firstName.length -1); // son elemanın hangisi olduğunu söyler bize 


//Split 
value= langs.split(","); //(3) ['Matematik', 'Özel', 'ders '] ayırdı

//replace

value= langs.replace("ders", "Ders");

//Inclueds
value=langs.includes("Özel"); // Özel kelimesinin var olduğunu true ile gösterir 
value=langs.includes("matadssad");  // bu kelime langs uzantısı içine yazdıklarımız arasında olmadığıniçin false yazdı .

console.log(value);