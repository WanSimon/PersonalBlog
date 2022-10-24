import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  await prisma.user.create({
    data: {
      username: 'WanSimon',
      phone: '18638585665',
      blogCount: 0,
    },
  });

  const resultedUsers = await prisma.user.findMany();
  console.dir(resultedUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
