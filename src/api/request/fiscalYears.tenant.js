import { ALL_ROUTES, axiosProvider } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.FISCALYEARSTENANT;

export async function getAllFiscalYears() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}`);
  return data;
}

export async function getFiscalYearsFromTenant(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/FiscalYearById/${id}`
  );
  return data;
}

export async function createNewFiscalYearInTenant(newFiscalYear) {
  const { data } = await axiosProvider.post(CURRENT_ROUTE, newFiscalYear);
  return data;
}

export async function updateFiscalYear(fiscalYear) {
  const id = fiscalYear.fiscal_years_id;
  console.log(id);
  const { data } = await axiosProvider.put(
    `${CURRENT_ROUTE}/${id}`,
    fiscalYear
  );
  return data;
}

export async function deleteFiscalYear(id) {
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${id}`);
  return data;
}

export async function discoverFiscalYearFromTenant(filters) {
  const { data } = await axiosProvider.post(
    `${CURRENT_ROUTE}/discoverFiscarYear`,
    filters
  );
  return data;
}
