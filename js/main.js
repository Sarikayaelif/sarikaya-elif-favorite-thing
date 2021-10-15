(() => {
    const   theThing= document.querySelector("#favSection"),
            theTemplate = document.querySelector("#fav_template").content;
         
    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);

                buildThing(data);
            })
        .catch(error => console.error(error));
    }

    function buildThing(info) {

        // grab the keys from the data object (the names)
        const things = Object.keys(info);

        things.forEach(thing => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${info[thing].favpic}`;

            
           containers[1].textContent = info[thing].title;
           containers[2].textContent = info[thing].name;
          containers[3].textContent = info[thing].description;
            

            theThing.appendChild(panel);
        });

    }
    
    //function showData() {
       // const dataSelect = document.querySelector(".p_image"); 
       // debugger;

      //  containers[1].textContent = info[thing].title;
      //  containers[2].textContent = info[thing].name;
      //  containers[3].textContent = info[thing].description;
       
  //}

   //dataSelect.addEventListener('click', showData);
   getData();  
})();