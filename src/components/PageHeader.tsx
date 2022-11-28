import React from 'react';

interface IPageHeaderProps {
  text : string
}

function PageHeader({ text } : IPageHeaderProps) {
  return (
    <h1 className={`pageHeader`}>{text}</h1>
  );
}

export default PageHeader;