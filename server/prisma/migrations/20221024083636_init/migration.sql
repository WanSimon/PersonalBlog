-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE', 'NOSURE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "mail" TEXT,
    "gender" "Gender",
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "blogCount" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3),
    "locaton" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
