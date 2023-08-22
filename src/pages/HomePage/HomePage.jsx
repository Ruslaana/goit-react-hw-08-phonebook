import React from 'react';
import {
  StyledContainer,
  StyledParagraph,
  StyledText,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <StyledContainer>
        <StyledParagraph>Welcome to your Contacts 📘</StyledParagraph>
        <StyledText>
          Here you can register, add, delete and check your contacts 📖
        </StyledText>
        <StyledText>
          In Contacts application used: React, React Hooks, React Router,
          PropTypes, Redux, Redux Toolkit, Redux Persist, Material UI
        </StyledText>
      </StyledContainer>
    </>
  );
};
export default HomePage;
