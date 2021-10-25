import React, {useContext} from 'react';
import LocaleContext from "./LocalContext";
function Blog() {
const {locale,toggleLocale} = useContext(LocaleContext)
const text = locale==='en'?"the 'value' prop passed to 'Provider is" :  "قيمة الخاصية التي تم تمريرها إلى المزود هي";
return(
<>
<h1>{text} {locale}</h1>
<button onClick={toggleLocale}>change locale</button>
<h2>this is blog 1</h2>
</>

)


}

export default Blog;