
import { PrismaClient } from '@prisma/client';
import { perfil } from './seeds/perfil.seed';
import { statusPayment } from './seeds/statusPayment';

const prisma = new PrismaClient();
async function main() {

  //await prisma.perfil.deleteMany(); 
  //await prisma.perfil.createMany({ data: perfil })
  await prisma.estadoPagamento.deleteMany()
  await prisma.estadoPagamento.createMany({data:statusPayment})
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
