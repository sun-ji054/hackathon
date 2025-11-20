import { api } from './Api';


//회원가입
export const signUp = async (userData) => {
    try {
        const response = await api.post('/accounts/auth/register/customer/', userData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('회원가입 실패:', error.response?.data || error.message);
        return null;
    }
};

//로그인
export const login = async (identifier, password) => {
    try {
        const response = await api.post('/accounts/auth/login/', {
            identifier,
            password,
        });

        if (response.data && response.data.access) {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        }

        // Store update logic moved to component/store action
        // const meRes = await api.get('/accounts/auth/me/', {
        //     headers: { Authorization: `Bearer ${response.data.access}` },
        // });

        console.log('로그인 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('로그인 실패:', error);
        return null;
    }
};

//로그아웃
export const logout = async () => {
    try {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (!accessToken || !refreshToken) {
            console.warn('토큰이 존재하지 않습니다.');
            return;
        }

        const response = await api.post(
            '/accounts/auth/logout/',
            { refresh_token: refreshToken },
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        console.log('로그아웃 성공:', response.data);

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        // Store clearing logic moved to component/store action
        // userInfoStore.persist?.clearStorage();
        // useLocationStore.persist?.clearStorage();

        console.log('로그아웃 성공');
    } catch (error) {
        console.error('로그아웃 실패:', error);
    }
};
