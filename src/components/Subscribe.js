import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";

const StyledContainer = styled.div`
  margin-top: 120px;
  border-radius: 24px;
  background: #f8f3ed;
  text-align: center;
  padding: 32px 32px 40px 32px;
`;

const StyledTitle = styled.h3`
  color: #2b1b05;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: -0.08rem;
  font-family: "Literata", serif;
`;

const StyledSubTitle = styled.p`
  color: #51483c;
  font-size: 18px;
  margin-top: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: 400px;
`;

const StyledEmail = styled.input`
  height: 48px;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 2px solid #c1b7ab;

  &:focus {
    border-color: #7b7266;
  }
`;

const StyledButton = styled.button`
  border: none;
  height: 48px;
  color: #553600;
  padding: 0 16px;
  font-size: 17px;
  font-weight: 500;
  background: #ffb941;
  align-items: center;
  display: inline-flex;
  margin-left: 12px;
  border-radius: 4px;

  &:hover {
    background: #f5aa2a;
  }
`;

const StyledSmall = styled.p`
  color: #8c847a;
  font-size: 13px;
`;

const StyledError = styled.p`
  color: #a80a00;
  font-size: 16px;
`;

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addToMailchimp(email);

    if (response?.result === "error") {
      setError(response.msg);
    } else {
      setSubscribed(true);
    }
  };

  const contents = subscribed ? (
    <>
      <StyledTitle>Subscribed!</StyledTitle>
      <StyledSubTitle>
        Thanks for signing up. I don&apos;t post often, but when I do i&apos;ll
        let you know.
      </StyledSubTitle>
    </>
  ) : (
    <>
      <StyledTitle>Join the mailing list</StyledTitle>
      <StyledSubTitle>
        Subscribe to get my latest content by email.
      </StyledSubTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledEmail
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Your email address"
        />
        <StyledButton type="submit">Subscribe</StyledButton>
      </StyledForm>
      {error && <StyledError>{error}</StyledError>}
      <StyledSmall>
        I will never send you spam and you can unsubscribe at any time.
      </StyledSmall>
    </>
  );

  return <StyledContainer>{contents}</StyledContainer>;
}
