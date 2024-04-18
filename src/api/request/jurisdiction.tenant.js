import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.JURISDICTION;

export async function getJurisdictionTenant() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}`);
  return data;
}
