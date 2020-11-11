import React from 'react'
import {} from 'react-bootstrap'
import styled from 'styled-components'


const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat');


.title {
	font-family: "Montserrat";
	text-align: center;
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	letter-spacing: 1px;
}

h1 {
  background-image: url(https://wallpapercave.com/wp/wp2730878.gif);
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
	font-size: 15vh;
	line-height: .8;
	margin: 10px 0;
}
p {
  font-size: 1.75rem;
  color: #f7f7f7;
}
@media only screen and (max-width: 600px) {
	h1 {
		font-size: 9vh;
	}
}

`

const NeonName = (props) => {
  return (
    <Styles>
      <div class="title">
        <h1>Hi I'm<br/>Cortlyn Rosser</h1>
        <p>Software Developer in Atlanta, GA</p>
      </div>
    </Styles>
  )
}

export default NeonName