import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.INVOICESTENANT;
const MULTIPLE_INSERT_ROUTE = "insertMultipleInvoices";

export async function getInvoicesFromTenantById(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/InvoicesTenantById/${id}`
  );
  return data;
}

export async function getAllInvoices(letra) {
  console.log(letra);
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/${letra}`);
  return data;
}

export async function createMultiplesNewInvoices(newInvoice) {
  const { data } = await axiosProvider.post(
    `${CURRENT_ROUTE}/${MULTIPLE_INSERT_ROUTE}`,
    newInvoice
  );
  return data;
}

export async function createNewInvoice(newInvoice) {
  const { data } = await axiosProvider.post(`${CURRENT_ROUTE}/`, newInvoice);
  return data;
}

export async function updateInvoice(invoice) {
  console.log("invoice antes de update",invoice);
  const id = invoice.invoices_id;
  console.log("ID factura en archivo JS", id);
  const { data } = await axiosProvider.put(`${CURRENT_ROUTE}/${id}`, invoice);
  return data;
}

export async function deleteInvoice(invoice) {
  const { invoice_id } = invoice;
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${invoice_id}`);
  return data;
}
export async function finishDateInvoicesTenant(invoice) {
  const { invoices_id } = invoice; // Corregir para usar invoice_id
  const { data } = await axiosProvider.put(
    `${CURRENT_ROUTE}/finishInvoices/${invoices_id}`, // Corregir para usar invoice_id
    invoice
  );
  return data;
}
