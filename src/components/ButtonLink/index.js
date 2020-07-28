import React from 'react';

function ButtonLink(props){
    //props => { className: 'xxxxxx', href: '/' }
console.log('props', props)
   return (
       <a href={props.href} className={ props.className }>
           { props.children }
       </a>
   ) 
}

export default ButtonLink;