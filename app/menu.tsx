"use client";

import { styled } from "styled-components";

export default function Menu() {
  return (
    <Wrapper>
      <A href="/">Home</A>
      <A href="/contact">Contact</A>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: grey;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5em 1em;
  display: inline-block;
  &:hover {
    background: black;
  }
`;
