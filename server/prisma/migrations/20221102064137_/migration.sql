/*
  Warnings:

  - You are about to drop the column `blogCount` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `mail` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - You are about to alter the column `locaton` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blog_count` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANAGER', 'COMMON', 'INNER');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('READ', 'COMMENT', 'CREATE', 'NORIGHT', 'ALL');

-- CreateEnum
CREATE TYPE "TextStatus" AS ENUM ('SHOW', 'HIDDEN', 'DELETED');

-- AlterEnum
ALTER TYPE "Gender" ADD VALUE 'SECRET';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "blogCount",
ADD COLUMN     "avatar" VARCHAR(266),
ADD COLUMN     "blog_count" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "experience" INTEGER NOT NULL,
ADD COLUMN     "level" SMALLINT NOT NULL,
ADD COLUMN     "limition" "Permission"[],
ADD COLUMN     "profile" VARCHAR(128),
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MANAGER',
ADD COLUMN     "signature" VARCHAR(64),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "mail" SET DATA TYPE VARCHAR(32),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(32),
ALTER COLUMN "birthday" SET DATA TYPE DATE,
ALTER COLUMN "locaton" SET DATA TYPE VARCHAR(32);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(256) NOT NULL,
    "content" VARCHAR(512) NOT NULL,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "viewed_count" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL,
    "status" "TextStatus" NOT NULL DEFAULT 'SHOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "tag" VARCHAR(30) NOT NULL,
    "user_id" UUID NOT NULL,
    "user_name" VARCHAR(16) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnBlogs" (
    "blog_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnBlogs_pkey" PRIMARY KEY ("blog_id","category_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "pre_comment_id" TEXT,
    "user_id" TEXT NOT NULL,
    "blog_id" TEXT NOT NULL,
    "content" VARCHAR(266) NOT NULL,
    "like" INTEGER NOT NULL DEFAULT 0,
    "dislike" INTEGER NOT NULL DEFAULT 0,
    "status" "TextStatus" NOT NULL DEFAULT 'SHOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnUsers" (
    "user_id" TEXT NOT NULL,
    "cateory_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoriesOnUsers_pkey" PRIMARY KEY ("user_id","cateory_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnBlogs" ADD CONSTRAINT "CategoriesOnBlogs_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnBlogs" ADD CONSTRAINT "CategoriesOnBlogs_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_pre_comment_id_fkey" FOREIGN KEY ("pre_comment_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnUsers" ADD CONSTRAINT "CategoriesOnUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnUsers" ADD CONSTRAINT "CategoriesOnUsers_cateory_id_fkey" FOREIGN KEY ("cateory_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
