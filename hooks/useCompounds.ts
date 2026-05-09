"use client";

import { useState, useEffect } from "react";
import { compoundsService } from "@/services/compounds/compounds.service";
import type { Compound, CompoundFilters } from "@/types/compound";

interface UseCompoundsResult {
  compounds: Compound[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCompounds(filters?: CompoundFilters): UseCompoundsResult {
  const [compounds, setCompounds] = useState<Compound[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    compoundsService
      .getAll(filters)
      .then((res) => {
        if (!cancelled) setCompounds(res.data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load compounds");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [tick]);

  return { compounds, loading, error, refetch: () => setTick((n) => n + 1) };
}
