"use server";

import prisma from "./db";

import { JobType, CreateAndEditJobType, createAndEditJobSchema } from "./types";

import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { authenticateAndRedirect } from "./auth";

export async function createJobAction(
  values: CreateAndEditJobType
): Promise<JobType | null> {
  const userId = authenticateAndRedirect();
  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}
