import React, { useState } from "react";
import styled from "styled-components";
import { logout } from "../api/AuthApi";

// 오버레이
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 박스
const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 300px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 9px;
`;
const Text = styled.p`
  font-size: 14px;
  -webkit-text-fill-color: #6E6E6E;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  flex: 1;
  margin-right: 8px;
  padding: 10px 0;
  border-radius: 8px;
  background: #E1E1E1;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  flex: 1;
  margin-left: 8px;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  background: #8b6a55;
  color: white;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;

function LogoutModal({ visible, onClose }) {
  if (!visible) return null;

  const handleLogout = async () => {
    await logout();
    alert("로그아웃 되었습니다.");
    onClose();
    window.location.reload(); // 필요 시 페이지 초기화
  };

  return (
    <Overlay>
      <ModalBox>
        <Title>로그아웃</Title>
        <Text>정말 로그아웃 하시겠습니까?</Text>
        <ButtonGroup>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={handleLogout}>로그아웃</ConfirmButton>
        </ButtonGroup>
      </ModalBox>
    </Overlay>
  );
}

export default LogoutModal;
