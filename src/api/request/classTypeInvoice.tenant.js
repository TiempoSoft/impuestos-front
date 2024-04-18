import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.CLASSTYPEINVOICETENANT;

export async function getClassTypeInvoice(){
    const {data} = await axiosProvider.get(`${CURRENT_ROUTE}/`);
    return data;
};