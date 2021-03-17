import React from "react";


const Admin = ({handleLogOut}) => {
   return(
  <section>
<nav> 
<h2> 
    Welcome
</h2>
<button onClick={handleLogOut}>  
   Logout
</button>
</nav>
  </section>

   )
}



export default Admin;