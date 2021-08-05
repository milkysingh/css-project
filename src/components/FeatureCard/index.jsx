import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

export default function FeatureCard({ title, content, icon }) {
  return (
    <FeatureCardWrapper>
      <Icon id={icon} strokeWidth="1" size={48} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </FeatureCardWrapper>
  );
}

const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 250px;
`;
const Title = styled.h3`
  font-size: ${22 / 16}rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.075rem;
  padding: 18px 0;
`;
const Content = styled.p`
  font-size: ${18 / 16}rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.075rem;
`;
