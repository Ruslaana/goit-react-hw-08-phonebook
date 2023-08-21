import React from 'react';
import { 
  StyledContainer, 
  StyledParagraph, 
  StyledText 
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledParagraph>Welcome to your Contacts 📘</StyledParagraph>
        <StyledText>Here you can register, add, delete and check your contacts 📖</StyledText>
    </StyledContainer>
  )
}
export default HomePage;