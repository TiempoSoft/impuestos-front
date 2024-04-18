import { ALL_ROUTES, axiosProvider } from "../axiosConfig";

const CURRENT_ROUTE = ALL_ROUTES.TAXESTENANT;

export async function getAllTaxesFromTenant() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/`);
  return data;
}

export async function getTaxesFromTenant(id) {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/TaxesById/${id}`);
  return data;
}

export async function createNewTaxesInTenant(newTaxes) {
  const { data } = await axiosProvider.post(CURRENT_ROUTE, newTaxes);
  return data;
}

export async function updateTaxes(taxes) {
  const { id } = taxes;
  const { data } = await axiosProvider.put(`${CURRENT_ROUTE}/${id}`, taxes);
  return data;
}

export async function deleteTaxes(id) {
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${id}`);
  return data;
}

export async function discoverTaxesFromTenant(filters) {
  const { data } = await axiosProvider.post(
    `${CURRENT_ROUTE}/discoverTaxesFromTenant`,
    filters
  );
  return data;
}
