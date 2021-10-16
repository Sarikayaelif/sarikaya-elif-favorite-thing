(() => {
    const mainpage = document.querySelector("#main_page"),
          landingpage = document.querySelector("#landing_page"),
          more = document.querySelector("#more");

    let buttons = document.querySelectorAll("button"),
       favorites ={};

    /* function showData() {
         let key = this.dataset.key;
         let headline = document.querySelector(h1);
         headline.textcontent = favorites[key].name;
     } */

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);
                favorites = data;
                //buildThing(data);
            })
        .catch(error => console.error(error));
    }

    function showPages() {
        if(mainpage){
            mainpage.classList.remove('hidden');
            landingpage.classList.add('hidden');
        }
        else {
            mainpage.classList.add('hidden');
            landingpage.classList.remove('hidden');
        }
    } 

    function showData() {
        
        // grab the keys from the data object (the names)
        //const things = Object.keys(info);

        //things.forEach(thing => {
            let panel = document.querySelector('.fav_panel'); // make a copy of the template content
            let containers = panel.children;
            // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            if (panel) {
                panel.classList.remove('hidden');
                
            containers[0].querySelector("img").src = `images/${favorites[this.dataset.key].favpic}`;

            containers[1].textContent = favorites[this.dataset.key].title;
            containers[2].textContent = favorites[this.dataset.key].name;
            containers[3].textContent = favorites[this.dataset.key].description;
        }
        else {
            panel.classList.add('hidden');
        } 

            //theThing.appendChild(panel);
        };

    //function showData() {
       // const dataSelect = document.querySelector(".p_image"); 
       // debugger;
      //  containers[1].textContent = info[thing].title;
      //  containers[2].textContent = info[thing].name;
      //  containers[3].textContent = info[thing].description;   
  //}
   //dataSelect.addEventListener('click', showData);
   more.addEventListener('click', showPages); 
   buttons.forEach(button => button.addEventListener("click", showData)); 
   getData();
})();