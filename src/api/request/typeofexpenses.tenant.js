import { ALL_ROUTES, axiosProvider } from "../axiosConfig";

const CURRENT_ROUTE = ALL_ROUTES.TYPEOFEXPENSES;

export async function getAllTypesOfTenant() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/`);
  return data;
}
