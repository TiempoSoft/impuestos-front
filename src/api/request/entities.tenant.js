import { axiosProvider, ALL_ROUTES } from "../axiosConfig.js";

const CURRENT_ROUTE = ALL_ROUTES.ENTITIESTENANT;

export async function getAllEntities() {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/`);
  return data;
}

export async function getEntitiesByCuit(filter) {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/entitiesByCuitSearch/${filter}`);
  console.log("Cuit search", data);
  return data;
}

export async function getEntitiesByName(filter) {
  const { data } = await axiosProvider.get(`${CURRENT_ROUTE}/entitiesByName/${filter}`);
  console.log("entidades search name", data);
  return data;
}

export async function getEntitiesFromTenantById(id) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/EntitiesById/${id}`
  );
  return data;
}

export async function getCheckCuit(cuit) {
  const { data } = await axiosProvider.get(
    `${CURRENT_ROUTE}/EntitiesCheckCuit/${cuit}`
  );
  return data;
}

export async function createEntitiesTenantId(newEntity) {
  const { data } = await axiosProvider.post(CURRENT_ROUTE, newEntity);
  return data;
}

export async function updateByEntitiesTenantId(entity) {
  const { entities_id } = entity;
  const { data } = await axiosProvider.put(`${CURRENT_ROUTE}/${entities_id}`, entity);
  return data;
}

export async function deleteByEntitiesTenantId(id) {
  const { data } = await axiosProvider.delete(`${CURRENT_ROUTE}/${id}`);
  return data;
}

export async function discoverEntitiesFromTenant(filters) {
  const { data } = await axiosProvider.post(
    `${CURRENT_ROUTE}/discoverEntityFromTenant`,
    filters
  );
  return data;
}

export async function finishDateEntitiesTenant(entity) {
  const { id } = entity;
  const { data } = await axiosProvider.put(
    `${CURRENT_ROUTE}/finishEntities/${id}`,
    entity
  );
  return data;
}
