const navbar = () => {
   return `<div class="nav-wrapper container">
    <a id="logo-container" href="index.html" class="brand-logo"><img class="blogo" src="/images/brand_logo.png" alt="brandlogo"></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#orderonline">Order Online</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Find Store</a></li>
      <li><a href="contact.html">Contact us</a></li>
    </ul>

    <ul id="nav-mobile" class="sidenav">
      <li>
        <a href="#">Navbar Link</a>

      </li>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>`;
}


export default navbar;