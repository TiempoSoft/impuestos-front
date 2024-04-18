import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.AUDITLOGS;

export async function getAuditLogsByUserId(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/AuditLogsByUserId/${id}`
  );
  return data;
}

export async function createNewAuditLog(newAuditLog) {
  const { data } = await axiosProvider.post(CURRENT_ROUTE, newAuditLog);
  return data;
}

export async function updateAuditLog(auditLog) {
  const { id } = auditLog;
  const { data } = await axiosProvider.put(`${CURRENT_ROUTE}/${id}`, auditLog);
  return data;
}

export async function deleteAuditlog(id) {
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${id}`);
  return data;
}
