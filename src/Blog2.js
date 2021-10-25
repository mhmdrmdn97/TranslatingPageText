import React, {useContext} from 'react';
import LocaleContext from "./LocalContext";
function Blog2() {
const {locale2,toggleLocale2} = useContext(LocaleContext)
const text2 = locale2==='ger'?"der an Provider übergebene Wertprop ist" :  "свойство value, переданное поставщику, равно";


return(
<>

<h1>{text2} {locale2}</h1>
<button onClick={toggleLocale2}>change locale</button>
<h2>this is blog 2</h2>
</>

)


}

export default Blog2;