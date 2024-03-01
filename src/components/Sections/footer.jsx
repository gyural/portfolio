import React from 'react'
import Inner from '../Commons/Inner'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: #313131;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`
const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  color: #fff;
  &:hover{
    color: #ccc;
  }
`
function Footer() {
  return (
    <Container>
      <Inner>
        <IconContainer>
          {/* Github */}
          <IconWrapper href='https://github.com/gyural'>
            <Icon icon="mdi:github" />
          </IconWrapper>
          {/* instagram */}
          <IconWrapper href='https://www.instagram.com/gyurallim/'>
            <Icon icon="lets-icons:insta" />
          </IconWrapper>
          {/* velog */}
          <IconWrapper style={{fontSize: '40px'}}href='https://velog.io/@gyural/posts'>
            <Icon icon="simple-icons:velog"/>
          </IconWrapper>
        
      </IconContainer>
      ©2024. LimGyuSeong. All rights reserved
      </Inner>
    </Container>
  )
}

export default Footer