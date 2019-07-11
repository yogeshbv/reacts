import React from 'react';

const Like = ({isLike, onLikeMovie}) => {
    const classes = (isLike) ?  'fa fa-heart' : 'fa fa-heart-o';
    return ( 
        <i 
            style={{cursor: 'pointer'}}
            onClick={() => onLikeMovie()}
            className={classes}/>
     );
}
 
export default Like;