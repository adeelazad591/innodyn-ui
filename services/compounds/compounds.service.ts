import { apiClient } from "@/services/api/client";
import { ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { Compound, CompoundFilters } from "@/types/compound";

export const compoundsService = {
  getAll: (filters?: CompoundFilters): Promise<PaginatedResponse<Compound>> => {
    const params = new URLSearchParams(
      Object.entries(filters ?? {}).filter(([, v]) => v !== undefined) as [
        string,
        string,
      ][]
    );
    const query = params.size ? `?${params}` : "";
    return apiClient.get(`${ENDPOINTS.compounds.list}${query}`);
  },

  getById: (id: string): Promise<ApiResponse<Compound>> =>
    apiClient.get(ENDPOINTS.compounds.detail(id)),

  getBySlug: (slug: string): Promise<ApiResponse<Compound>> =>
    apiClient.get(ENDPOINTS.compounds.bySlug(slug)),
};
