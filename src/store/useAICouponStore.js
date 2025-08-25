import { create } from 'zustand';
import { api } from '../api/Api';

export const useAICouponStore = create((set, get) => ({
    couponsById: {}, // { [templateId]: { ...data, already_owned: boolean } }
    order: [],
    loading: false,
    error: null,

    // 단일 쿠폰 템플릿 조회: GET /couponbook/coupon-templates/{coupon_template_id}/
    fetchCoupon: async (couponTemplateId) => {
        if (!couponTemplateId) {
            set({ error: '쿠폰 ID 없음' });
            return;
        }
        set({ loading: true, error: null });

        try {
            const { data } = await api.get(`/couponbook/coupon-templates/${couponTemplateId}/`);

            // 응답에 있는 already_owned 그대로 보관(없으면 false)
            const normalized = {
                ...data,
                already_owned: Boolean(data?.already_owned),
            };

            const idStr = String(normalized.id);
            const prevMap = get().couponsById;
            const prevOrder = get().order;

            set({
                couponsById: { ...prevMap, [idStr]: normalized },
                order: prevOrder.includes(idStr) ? prevOrder : [...prevOrder, idStr],
                loading: false,
                error: null,
            });
        } catch (e) {
            set({
                loading: false,
                error: e?.response?.data?.detail || e.message || '불러오기 실패',
            });
        }
    },

    // 필요 시 외부 이벤트(저장/삭제 후)에 맞춰 플래그만 갱신
    setAlreadyOwned: (couponTemplateId, owned) =>
        set((state) => {
            const id = String(couponTemplateId);
            const prev = state.couponsById[id] || { id: couponTemplateId };
            return {
                couponsById: {
                    ...state.couponsById,
                    [id]: { ...prev, already_owned: !!owned },
                },
            };
        }),

    // 호환용(무시 파라미터)
    fetchCoupons: async (_couponbookId, couponTemplateId) => {
        return get().fetchCoupon(couponTemplateId);
    },
}));
