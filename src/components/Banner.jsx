import React from 'react'
import { Typography, styled } from '@mui/material'


const Heading = styled(Typography)`
  color:#fff;
  font-weight:700;
  line-height:100%;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Body = styled(Typography)`
  color:#fff;
  font-weight:400;
  line-height:160%;
  font-size:24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


const Banner = () => {
    return (
        <>
            <Heading variant='h1'>Learn to code by watching others</Heading>
            <Body mt={5}>See how experienced developers solved problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Body>
        </>
    )
}

export default Banner