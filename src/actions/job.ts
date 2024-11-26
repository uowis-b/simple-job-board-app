"use server";

import { JobPost } from "@/types/job";
import { headers } from "next/headers";

export async function list(): Promise<JobPost[]> {
  const nextHeaders = await headers();
  const host = nextHeaders.get("host");
  const protocol = nextHeaders.get("x-forwarded-proto") || "https";
  try {
    const url = `${protocol}://${host}`;
    const resp = await fetch(`${url}/data/data.json`);
    return resp.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
