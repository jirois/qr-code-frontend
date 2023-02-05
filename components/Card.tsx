import React from 'react'
import {Container, Wrapper, Image, Content, H2, Para} from './CardElement';
 
const Card = () => {
  return (
    <Wrapper>
        <Container>
            <Image src='/images/image-qr-code.png' alt="qr code pic" />
            <Content>
                <H2>
                Improve your front-end skills by building projects
                </H2>
                <Para>
                scan the QR code to visit the Frontend Mentor and take your coding
            skills to the next level.
                </Para>
            </Content>
        </Container>
    </Wrapper>
  )
}





export default Card