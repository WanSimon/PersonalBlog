import { defineConfig } from 'tsup';
import fastify from './index';
export default defineConfig({
  entry: ['index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  async onSuccess() {
    fastify.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        console.info(address);
        process.exit(1);
      }
      console.info(`Server listening at ${address}`);
    });
    return () => {
      fastify.close();
    };
  },
});
