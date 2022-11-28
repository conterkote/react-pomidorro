import React, {CSSProperties} from 'react';

interface ISectionHeaderProps {
  text : string
  style ?: CSSProperties
}

function SectionHeader({ text, style } : ISectionHeaderProps) {
  return (
    <h2 style={style} className={`sectionHeader`}>{text}</h2>
  );
}

export default SectionHeader;