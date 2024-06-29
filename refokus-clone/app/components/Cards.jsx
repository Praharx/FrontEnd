import React from 'react';
import Card from './Card';

function Cards() {
    return (
      <div className='w-full'>
        <div className='mx-auto max-w-4xl h-[60vh] mb-20 flex gap-1'>
          <Card widthClass='w-1/3' text={{sub1: "Up Next: News", sub2:(<h1>Insights and behind<br/>the scenes</h1>), footer:"Explore what drives out team."}} hover={false}/>
          <Card widthClass='w-2/3' text={{sub1: "Get in touch", sub2:(<h1>Let's get to it<br />together.</h1>), heading:"Start a Project"}} hover={true}/>
        </div>
      </div>
    )
  }
  
  export default Cards;