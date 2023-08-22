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
          The Contacts application utilizes technologies such as React, React
          Hooks, React Router, PropTypes, Redux, Redux Toolkit, Redux Persist,
          and Material UI.
        </StyledText>
      </StyledContainer>
    </>
  );
};
export default HomePage;
