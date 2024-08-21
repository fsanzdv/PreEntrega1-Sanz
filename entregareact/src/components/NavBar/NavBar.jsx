import { CartWidget } from "./components/CartWidget"


export const NavBar = () => {
    return  <>
          <nav>
    <div class="nav-wrapper  teal darken-1">
      <a href="#!" class="brand-logo center">RugbyShop</a>
      <ul class="left hide-on-med-and-down">
        <li><a href="sass.html">Internacional</a></li>
        <li><a href="badges.html">Clubs</a></li>
        <li class="active"><a href="collapsible.html">Sale</a></li>
      </ul>
      <CartWidget/>
    </div>
  </nav>
    
    </>
}