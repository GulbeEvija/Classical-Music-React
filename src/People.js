import { useState } from 'react';
import { data } from './data'

function People() {

  const [composers, setComposers] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeComposer = (id) => {
    let newComposers = composers.filter(composer => composer.id !== id);
    setComposers(newComposers)
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowMore(!showMore)
  }
  
  return (
    <div>
        <div className='container'>
          <h2 className='composerTitle'>{composers.length} CLASSICAL MUSIC COMPOSERS</h2>
        </div>

        {composers.map((element => {
          const {id, composerName, yearTwo, description, image, work, source, showMore} = element;

        return(
          <div className='containerTwo'>
            <img src={image} alt="composer" width="250px"/>
            <div key={id}>
              <h2 className='periodTitle'>{id} - {composerName}</h2>
            </div>
            <h3 className='slideYear'>{yearTwo}</h3>
            <div>
              <p className='textStyle'>{showMore ? description : description.substring(0,220) + "..."}
              <button className='moreBtn' onClick={() => {showTextClick(element)}}>{showMore ? "Show less" : "Show more"}</button>
              </p>
            </div>
              <p className='textStyle'><a href={source} target="_blank" rel="noreferrer">Listen to {work}</a></p>
              <button className='btnRemove' onClick={() => removeComposer(id)}>Remove</button>
          </div>
        )

        }))}

          <div className='container'>
            <button className='btnDelete' onClick={() => setComposers([])}>Delete all</button>
          </div>
    </div>
  );
}

export default People;
