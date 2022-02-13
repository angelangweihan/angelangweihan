import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
        <div>
                <ul class="nav navbar-nav">
                    <li><a id="len1" class="hoverable" href="./">Home</a></li>
                    <li><a id="len2" class="hoverable" href="./About">About</a></li>
                    <li><a id="len3" class="hoverable" href="#">Portfolio</a></li>
                    <li><a id="len4" class="hoverable" href="./Contact">Contact</a></li>
                </ul>
        </div>
  );
}

export default Navigation;