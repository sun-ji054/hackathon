import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const SelectedDong = styled.div`
  display: flex;
  align-items: center;
`

export const DongShow = styled.div`
  margin-left: 25px;
  padding: 8px;
  font-weight: 600;
  font-size: 24px;
  
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  z-index: 20;
  padding: 10px;
`;