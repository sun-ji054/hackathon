import { create } from 'zustand';
import axios from "axios";
import {api} from "../api/Api";

export const useCouponStore = create((set) => ({
  coupons: [],
  loading: false,
  error: null,

  fetchCoupons: async () => {
    set({loading: true, error: null});
    try{
      const response = await api.get('/couponbook/coupon-templates');
      set({coupons: response.data, loading: false});
    } catch (error) {
      set({error: error.message, loading: flase});
    }
  }
}));
