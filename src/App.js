import React from 'react';
import PrintButton from './components/printButton.js'
import MultiPage from "./components/multiPage.js"
import SinglePage from "./components/singlePage.js"

const App =()=>{
  return(
    <div className='bg-black-80 w-100 pv5'>
      <div className="white mt3 tc f3">Single Page Mode</div>
      <PrintButton id={"singlePage"} label={"Print single page"} />
      <SinglePage id={"singlePage"}/>

      <div className="white mt3 tc f3">
        Multi page Mode </div>
        <PrintButton id={"multiPage"} label={" Print multiplate pages"} />
        <MultiPage id={"multiPage"} />
     

    </div>
  );
}

export default App;
