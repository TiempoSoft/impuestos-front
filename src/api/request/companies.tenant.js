import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.COMPANIESTENANT;

export async function getAllCompanies() {
  const {data} = await axiosProvider.get(`${CURRENT_ROUTE}/`);
  return data;
}

export async function getCompanyFromTenantById(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/CompaniesById/${id}`
  );
  return data[0];
}

export async function createNewCompanyInTenant(newCompany) {
  const { data } = await axiosProvider.post(CURRENT_ROUTE, newCompany);
  return data;
}

//
export async function updateCompanyInTenant(company) {
  const { id } = company;
  const { data } = await axiosProvider.put(`${CURRENT_ROUTE}/${id}`, company);
  return data;
}

export async function deleteCompanyInTenant(id) {
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${id}`);
  return data;
}
