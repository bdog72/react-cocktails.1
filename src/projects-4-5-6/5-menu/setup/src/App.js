//
//

// import React, { useState } from 'react';
import React from 'react';

import './index.scss';

// import Menu from './Menu';

// import Categories from './Categories';
// import items from './data';

function App() {
  // const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState([]);

  return (
    <div className='app__5-menu'>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>our menu</h2>
            <div className='underline'></div>
          </div>
        </section>
      </main>
    </div>
  );

  // return (
  //   <div className='app__menu-container'>
  //     <main>
  //       <section className='menu section'>
  //         <div className='title'>
  //           <h2>our menu</h2>
  //           <div className='underline'></div>
  //         </div>
  //         <Categories />
  //         <Menu items={menuItems} />
  //       </section>
  //     </main>
  //   </div>
  // );
}

export default App;
