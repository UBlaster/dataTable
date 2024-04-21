export interface FakeData {
  id: number,
  select: boolean,
  createdAt: string,
  ipAddress: string,
  macAddress: string,
  status: 'SUCCEED' | 'PROCESSING' | 'ERROR' | 'EMPTY',
  version: string
}

export type Error = string;
