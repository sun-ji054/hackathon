import { api } from "./Api";

export const getSuggestions = async () => {
    try {
        const response = await api.get('/couponbook/chat/');
        return response.data.suggestions;
    } catch (error) {
        console.error("Failed to fetch suggestions:", error);
        return [];
    }
};

export const sendMessage = async (message, conversationHistory) => {
    try {
        const response = await api.post('/couponbook/chat/', {
            message,
            conversation_history: conversationHistory,
        });
        return response.data;
    } catch (error) {
        console.error("Failed to send message:", error);
        throw error;
    }
};
