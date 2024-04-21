import type { FakeData } from '@/types/FakeData';

export const mockData: FakeData[] = [
  {
    id: 1,
    select: true,
    createdAt: "2024-01-01",
    ipAddress: "192.168.1.1",
    macAddress: "00-B0-D0-63-C2-26",
    status: "SUCCEED",
    version: "1.0"
  },
  {
    id: 2,
    select: false,
    createdAt: "2024-01-01",
    ipAddress: "192.168.1.1",
    macAddress: "00-B0-D0-63-C2-26",
    status: "PROCESSING",
    version: "1.0"
  },
  {
    id: 3,
    select: true,
    createdAt: "2024-01-01",
    ipAddress: "192.168.1.1",
    macAddress: "00-B0-D0-63-C2-26",
    status: "ERROR",
    version: "1.0"
  },
  {
    id: 4,
    select: false,
    createdAt: "2024-01-01",
    ipAddress: "192.168.1.1",
    macAddress: "00-B0-D0-63-C2-26",
    status: "EMPTY",
    version: "1.0"
  },
  {
    id: 5,
    select: true,
    createdAt: "2024-01-01",
    ipAddress: "192.168.1.1",
    macAddress: "00-B0-D0-63-C2-26",
    status: "SUCCEED",
    version: "1.0"
  },
];