import { apiClient } from "@/services/api/client";
import { ENDPOINTS } from "@/services/api/endpoints";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { Standard } from "@/types/standard";

export const standardsService = {
  getAll: (): Promise<PaginatedResponse<Standard>> =>
    apiClient.get(ENDPOINTS.standards.list),

  getById: (id: string): Promise<ApiResponse<Standard>> =>
    apiClient.get(ENDPOINTS.standards.detail(id)),
};
