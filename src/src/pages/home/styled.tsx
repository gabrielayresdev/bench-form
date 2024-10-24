import styled from "styled-components";
import backgroundImage from '../../assets/BG.svg';
import '@fontsource/poppins';

export const AppScreen = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 100vh;
  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 60px;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: 968px) {
    width: 100%;
    height: 60px;
    position: relative;
  }
`;

export const LeftSidebar = styled(Sidebar)`
  background-color: #22A2F2;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  left: 0;

  @media (max-width: 968px) {
    height: auto;
  }
`;

export const RightSidebar = styled(Sidebar)`
  background: linear-gradient(to top, #22A2F2, #001238);
  right: 0;

  @media (max-width: 968px) {
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  width: 900px;

  @media (max-width: 968px) {
    width: 100%;
    padding: 10px;
  }
`;

export const SectionHeader = styled.h2`
  margin: 30px 0 10px;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  color: #22A2F2;
  font-weight: 700;

  @media (max-width: 968px) {
    font-size: 20px;
    margin: 20px 0;
  }
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #22A2F2;
`;

export const QuestionBlock = styled.div`
  margin-bottom: 20px;

  @media (max-width: 968px) {
    margin-bottom: 15px;
  }
`;

export const QuestionTextWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CandidateNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const InputBase = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 5px;
  outline: none;
`;

export const TextInput = styled(InputBase)`
  height: 20px;

  @media (max-width: 968px) {
    height: 40px;
  }
`;

export const TextAreaInput = styled(InputBase.withComponent('textarea'))`
  height: 180px;
  margin-top: 5px;
  resize: none;

  @media (max-width: 968px) {
    height: 100px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 20px;

  @media (max-width: 968px) {
    margin: 0 0 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BoldHeaderText = styled.span`
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  color: #001238;

  @media (max-width: 968px) {
    font-size: 24px;
  }
`;

export const RegularHeaderText = styled.span`
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;

  @media (max-width: 968px) {
    font-size: 24px;
  }
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 20px;

  @media (max-width: 968px) {
    margin-left: 0;
    justify-content: flex-start;
  }
`;

export const IndicatorDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #22A2F2;
`;

export const QuestionText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;

  @media (max-width: 968px) {
    font-size: 16px;
  }
`;

export const CandidateNameText = styled.p`
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #001238;
  width: 300px;

  @media (max-width: 968px) {
    width: auto;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 148px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34A9F2;
  color: #f4f4f4;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #28a0e1;
  }

  @media (max-width: 968px) {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 0 0 30px 0;

  @media (max-width: 968px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const InfoButton = styled.button`
  width: 18px;
  height: 18px;
  background-color: #d1d1d1;
  color: #ffffff;
  border-radius: 50%;
  margin-left: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 968px) {
    width: 24px;
    height: 24px;
  }
`;
