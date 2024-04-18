import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.INVOICESTAXESTENANT;

export async function getAllInvoicesTaxes() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}`);
  return data;
}

export async function getTaxesByInvoiceNum(params) {
  const { data } = await axiosProvider.post(`${CURRENT_ROUTE}/TaxesByInvoiceNum`,params);
  return data;
}

export async function createInvoiceTaxes(newInvoiceTax) {
  const { data } = await axiosProvider.post(`${CURRENT_ROUTE}/`, newInvoiceTax);
  return data;
}

export async function createMultiplesInoiceTaxes(newInvoiceTaxes){
  const {data} = await axiosProvider.post(`${CURRENT_ROUTE}/insertMultipleInvoicesTax`, newInvoiceTaxes);
  return data;
}

export async function getInvoicesTaxesByInvoiceNum(invoiceNum) {
  const {data} = await axiosProvider.get(`${CURRENT_ROUTE}/TaxesByInvoiceNum`, invoiceNum);
  return data;
}