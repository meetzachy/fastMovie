import React, { useState } from 'react'
import { sculptureList } from '../API';
function Articles() {
  const [index,setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);
  const hasNext = index < sculptureList.length-1;

  const handleNext = () => {
    if(hasNext) {
        setIndex(index+1);
    }
    else{
        setIndex(0);
    }
  }
  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  let article = sculptureList[index];
  return (
    <div>
        <button onClick={handleNext}>Next</button>
        ({index+1} of {sculptureList.length} )
        <h2>
            <i>{article.name}</i> by {article.artist}
        </h2>
        <button onClick={handleShowMore}>{showMore ? 'Hide' : 'Show'} Details</button>
        {showMore && article.description}
        <img 
        src={article.url}
        alt={article.alt}
        />

    </div>
  )
}

export default Articles;
