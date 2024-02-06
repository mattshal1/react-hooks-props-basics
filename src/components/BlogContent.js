// BlogContent.js (Child component)  
import React from 'react';

function BlogContent(props) {
  if(!props.isPublished) {
    return null;
  }

  return (
    <div>
      {props.articleText} 
    </div>
  ); 
}

export default BlogContent;