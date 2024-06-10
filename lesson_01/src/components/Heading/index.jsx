const Heading = ({text, color, fs="16px"}) => {
    const headingStyle = {color, fontSize: fs};
    const headingClass = color === `red` ? `error` : `success`;
  
    return text ? <h2 className={headingClass} style={headingStyle}>{text}</h2> : null;
}

export default Heading;