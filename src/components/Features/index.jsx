import React from "react";
import styled from "styled-components";
import FeatureCard from "../FeatureCard";

export default function Features() {
  return (
    <FeatureSection>
      <PrimaryHeading>GET FOOD FAST — NOT FAST FOOD</PrimaryHeading>
      <SecondaryHeading>
        Hello, weâ€™re Omnifood, your new premium food delivery service. We know
        youâ€™re always busy. No time for cooking. So let us take care of that,
        weâ€™re really good at it, we promise!
      </SecondaryHeading>
      <Section>
        <FeatureCard
          icon="clock"
          title="UP TO 365 DAYS/YEAR"
          content="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if thats your style."
        />
        <FeatureCard
          icon="menu"
          title="UP TO 365 DAYS/YEAR"
          content="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if thats your style."
        />
        <FeatureCard
          icon="clock"
          title="UP TO 365 DAYS/YEAR"
          content="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if thats your style."
        />
        <FeatureCard
          icon="shopping-cart"
          title="UP TO 365 DAYS/YEAR"
          content="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if thats your style."
        />
      </Section>
    </FeatureSection>
  );
}
const FeatureSection = styled.section`
  padding: 64px 200px;
`;
const PrimaryHeading = styled.h2`
  font-size: ${36 / 16}rem;
  font-weight: 600;
  padding-top: 22px;
  padding-bottom: 48px;
  text-align: center;
  letter-spacing: 0.075rem;
  font-weight: 500;
`;
const SecondaryHeading = styled.h5`
  font-size: ${20 / 16}rem;
  font-weight: 500;
  max-width: 1100px;
  padding-left: 18%;
  padding-bottom: 64px;
`;
const Section = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 32px 96px;
`;
