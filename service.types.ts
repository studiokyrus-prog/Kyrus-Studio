export interface ServiceResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface StorageDriver {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}
