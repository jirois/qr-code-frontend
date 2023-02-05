import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

export const Container = styled.div`
  background: white;
  padding: 1rem;
  text-align: center;
  border-radius: 1em;
  box-shadow: 1px 3px 3px 5px rgba(0, 0, 0, 0.02);

  @media (min-width: 1000px) {
    max-width: 350px;
    margin: 5rem auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 1em;
  object-fit: cover;

  @media (min-width: 1000px) {
    height: 400px;
  }
`;

export const Content = styled.div`
  padding: 1.5rem 2rem 2rem;

  @media (min-width: 1000px) {
    padding: 0.5rem 1.5rem 1.5rem;
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  margin-top: 0;
`;

export const Para = styled.p`
  color: hsl(212, 45%, 89%);
  font-weight: 400;
  padding-top: 0.8rem;
  font-size: 15px;
`;
