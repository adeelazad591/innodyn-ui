"use client";

import { useState, useEffect } from "react";
import { standardsService } from "@/services/standards/standards.service";
import type { Standard } from "@/types/standard";

interface UseStandardsResult {
  standards: Standard[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useStandards(): UseStandardsResult {
  const [standards, setStandards] = useState<Standard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    standardsService
      .getAll()
      .then((res) => {
        if (!cancelled) setStandards(res.data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load standards");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [tick]);

  return { standards, loading, error, refetch: () => setTick((n) => n + 1) };
}
