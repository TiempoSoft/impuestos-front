import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.COUNTRYTENANT;

export async function getCountryFromtTenantById(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/CountryById/${id}`
  );
  return data;
}

export async function getAllCountriesFromTenant() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/`);
  return data;
}
