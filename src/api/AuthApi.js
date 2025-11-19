import { api } from './Api';
import { userInfoStore } from '../store/userInfoStore';
import { useLocationStore } from '../store/useLocationStore';

//회원가입
export const signUp = async () => {
    const { username, email, password, phone } = userInfoStore.getState();
    const { province, city, district } = useLocationStore.getState();

    try {
        const response = await api.post('/accounts/auth/register/customer/', {
            username,
            email,
            password,
            phone,
            favorite_locations: [
                {
                    province,
                    city,
                    district,
                },
            ],
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('회원가입 실패:', error.response?.data || error.message);
        return null;
    }
};

//로그인
export const login = async () => {
    const { username, email, password } = userInfoStore.getState();

    try {
        const response = await api.post('/accounts/auth/login/', {
            identifier: username || email,
            password,
        });

        if (response.data && response.data.access) {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        }

        const meRes = await api.get('/accounts/auth/me/', {
            headers: { Authorization: `Bearer ${response.data.access}` },
        });

        const meData = meRes.data;

        userInfoStore.getState().setUserInfo({
            id: meData.id,
            username: meData.username,
            email: meData.email,
        });
        if (meData.favorite_locations && meData.favorite_locations.length > 0) {
            const favLocation = meData.favorite_locations[0];

            useLocationStore.getState().selectProvince(favLocation.province);
            useLocationStore.getState().selectCity(favLocation.city);
            useLocationStore.getState().selectDistrict(favLocation.district);
        }

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

        userInfoStore.persist?.clearStorage();
        useLocationStore.persist?.clearStorage();

        console.log('로그아웃 성공');
    } catch (error) {
        console.error('로그아웃 실패:', error);
    }
};
