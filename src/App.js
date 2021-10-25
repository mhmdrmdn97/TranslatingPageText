import './App.css';
import LocaleContext from "./LocalContext";
import Blog from "./Blog";
import Blog2 from "./Blog2";
import React, {useState} from 'react';
function App() {

const [locale,setLocale] = useState('en');
const [locale2,setLocale2] = useState('ger');
const toggleLocale =() =>{
    
setLocale((locale) => {

return locale ==='en'? 'ar' : 'en';

});

}
  const toggleLocale2 =() =>{
    
setLocale2((locale2) => {

return locale2 ==='ger'? 'rus' : 'ger';

});

}

  return (
    <div className="App">
      <LocaleContext.Provider value={{ locale, locale2, toggleLocale2, toggleLocale}}>

        <Blog />
        <Blog2 />

      </LocaleContext.Provider>
    </div>
  );
}

export default App;
