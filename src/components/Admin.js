import React from "react";
import Button from '@material-ui/core/Button';

const Admin = ({handleLogOut}) => {
   return(
  <section>
<nav> 
<h2> 
    saas
</h2>

</nav>
<div style={{paddingTop:'300px'}}></div>
<Button 
style={{paddingLeft: '200px'}}
onClick={handleLogOut}
>  
   Logout 
</Button>
  </section>

   );
};



export default Admin;