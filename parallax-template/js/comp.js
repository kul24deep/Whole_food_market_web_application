import navbar from "./component/navbar.js";

let navbar_div = document.getElementById('nav'); 

navbar_div.innerHTML = navbar();

// footer

import footer from "./component/footer.js";

let foter_div = document.getElementById('footer'); 

foter_div.innerHTML = footer();