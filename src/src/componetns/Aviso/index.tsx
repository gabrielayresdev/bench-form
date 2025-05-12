import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  InputBase,
  ModalContainer,
  ModalOverlay,
  StyText,
  StyTextBold,
  SubmitButton,
} from "./styled";

interface ModalProps {
  onClose: () => void;
}

export default function WarnignModal({ onClose }: ModalProps) {
  const [researcherName, setResearcherName] = useState<string>("");
  const [, setDateTime] = useState("");

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleString();
      setDateTime(formattedDate);
    };

    getCurrentDateTime();
    const intervalId = setInterval(getCurrentDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSendMessage = () => {
    if (researcherName.trim()) {
      onClose();
    } else {
      alert("Por favor, insira seu nome para prosseguir.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <StyTextBold>Atenção!</StyTextBold>
        <StyText>
          Não leia o texto em vermelho para o entrevistado! Ele indica os
          objetivos que buscamos alcançar com aquela pergunta.
        </StyText>
        <StyText>
          Faça as perguntas que são sequenciais pausadamente, dando tempo para o
          entrevistado responder uma antes de responder a próxima. Não pergunte
          tudo de uma vez.
        </StyText>
        <StyText>
          Anote as respostas de forma detalhada, se o entrevistado for muito
          vago e superficial, pergunte se ele pode explicar um pouco melhor.
        </StyText>
        <ButtonWrapper>
          <InputBase
            type="text"
            value={researcherName}
            onChange={(e) => setResearcherName(e.target.value)}
            placeholder="Insira seu nome (pesquisador)"
          />
          <SubmitButton onClick={handleSendMessage}>Prosseguir</SubmitButton>
        </ButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
}
