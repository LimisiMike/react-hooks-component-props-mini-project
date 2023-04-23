const About = (props) => {
  return (
    <aside>
      {/* <img src={ props.image } alt="blog logo">{ props.image }</img> */}
      <p> { props.about }</p>
    </aside>
  )
}

// img.defaultProps = {
//     image: 'https://via.placeholder.com/215'
//   }

export default About
