// This
//odwołkuje się do danego elementu / wewnatrz zakresu/ funkcji czy obiektu w którym się znajduje w celu ułatwienia / uproszcenia kodu

//this globalnie poza obiektem
const showThis = () => {
    console.log("this in showThis: ", this);  // this odwołuje się do stałej dostepnej globalnie
  };
  
  showThis();
  
  const user = {
    username: "Mango",
  };
  user.showContext = showThis;
  
  user.showContext();

  // this wewnatrz obiektu
const hotel = {  
    username: "Resort hotel",  
    showThis() {    
    const foo = () => {          
    console.log("this in foo: ", this);    //// This  odwołujące sie do funkcji / wewnątrz funckji
    };  
      
    foo();    
    console.log("this in showThis: ", this);  /// this wewnątrz funkcji
    },
 };
    
    hotel.showThis();

//////////////////// zastosowanie praktyczne This

const person = {                          // utworzenie obiektu "user"
    username: "Maciej",                 // przypisnie wartości do username jako Maciej
    showName() {                        //zadeklarowanie metody shownname wewnąttrz obiektu
      console.log(this.username);       // Ciało metody zawierające instrukcję - wyświetl nazwę user name w konsoli przy użyciu thi czyli z tego konkretnego obiektu
    },
  };
  
  person.showName();                    // Wywołanie funkcji showName w obiekcie person. docelowo wykona się linia 37 i wyświetli naze username


/////////////////////////Rozszerzony przykład

const bookShelf = {                                  // zadeklarowanie obiektu o nazwie bookShlef
    authors: ["J. R. R. Martin", "M. Sapkowski"],  // nadanie tablicy o nazwie authors z wpisanymi 2 autorami
    showName() {                                     //zadeklarowanie funkcji showName /metody
        console.log(this.authors);                  //Body funkcji - wyświetl w konsoli autorów
    },
    addAuthor(authorName) {                          // zadeklarowanie metody dodawania authora -addAuthor
        this.authors.push(authorName)               // prz użyciu this odwołujemy się wewnątrz do metody add author i przy użyciu komendy push dodajemy wskazanego authora do tablicy authors
    },
};

bookShelf.showName()                        //wywołujemy metode showName z obiektu bookShekf wyświtli autorów
bookShelf.addAuthor("J. Piekara")           // wywołujemy metodę add author w obiekcie bookShelf inaczej dodajemy do tablicy authors autora J. Piekara
bookShelf.showName()                        // ponownie wywołujemy metodę showName i wyświetlamy autorów z dodanym j. Piekara
