import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getSuggestions, sendMessage } from "../api/ChatApi";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

const ChatButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #f2592a;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 90px; /* Above the bottom nav */
  right: 20px;
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1001;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 90%;
    right: 5%;
    bottom: 80px;
  }
`;

const Header = styled.div`
  background-color: #f2592a;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;

  ${(props) =>
    props.isUser
      ? `
    align-self: flex-end;
    background-color: #F2592A;
    color: white;
    border-bottom-right-radius: 2px;
  `
      : `
    align-self: flex-start;
    background-color: #EADDD5;
    color: #333;
    border-bottom-left-radius: 2px;
  `}
`;

const SuggestionsArea = styled.div`
  padding: 10px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  border-top: 1px solid #eee;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
`;

const SuggestionChip = styled.button`
  padding: 6px 12px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #f2592a;
  color: #f2592a;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #fff0eb;
  }
`;

const InputArea = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  border-top: 1px solid #eee;
  background-color: white;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: #f2592a;
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  color: #f2592a;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:disabled {
    color: #ccc;
  }
`;

export default function Chatbot() {
  const { isOpen, toggleChat, closeChat } = useChatStore();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "안녕하세요! 쿠폰북 AI 어시스턴트입니다. 무엇을 도와드릴까요? 🤖",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && suggestions.length === 0) {
      loadSuggestions();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadSuggestions = async () => {
    const suggs = await getSuggestions();
    if (suggs) setSuggestions(suggs);
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const data = await sendMessage(text, history);

      const botMsg = { role: "assistant", content: data.response };
      setMessages((prev) => [...prev, botMsg]);

      if (data.suggestions) {
        setSuggestions(data.suggestions);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ChatButton onClick={toggleChat}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </ChatButton>

      {isOpen && (
        <ChatWindow>
          <Header>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={18} />
              <span>AI 어시스턴트</span>
            </div>
            <X size={20} style={{ cursor: "pointer" }} onClick={closeChat} />
          </Header>

          <MessagesArea>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} isUser={msg.role === "user"}>
                {msg.content}
              </MessageBubble>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  color: "#888",
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                답변 생성 중...
              </div>
            )}
            <div ref={messagesEndRef} />
          </MessagesArea>

          <SuggestionsArea>
            {suggestions.map((sug, idx) => (
              <SuggestionChip key={idx} onClick={() => handleSend(sug)}>
                {sug}
              </SuggestionChip>
            ))}
          </SuggestionsArea>

          <InputArea>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
              placeholder="메시지를 입력하세요..."
              disabled={loading}
            />
            <SendButton
              onClick={() => handleSend(inputValue)}
              disabled={loading || !inputValue.trim()}
            >
              <Send size={20} />
            </SendButton>
          </InputArea>
        </ChatWindow>
      )}
    </>
  );
}
