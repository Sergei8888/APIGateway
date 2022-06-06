import 'dotenv/config';

// Servers
import { FastifyInstance } from 'fastify';
import createAppInstance from './createAppIntstance';

const server = createAppInstance();

runServerInNetwork(server).then(() => {
    console.log(
        `           _____ _____    _____       _
     /\\   |  __ \\_   _|  / ____|     | |
    /  \\  | |__) || |   | |  __  __ _| |_ _____      ____ _ _   _
   / /\\ \\ |  ___/ | |   | | |_ |/ _\` | __/ _ \\ \\ /\\ / / _\` | | | |
  / ____ \\| |    _| |_  | |__| | (_| | ||  __/\\ V  V / (_| | |_| |
 /_/    \\_\\_|   |_____|  \\_____|\\__,_|\\__\\___| \\_/\\_/ \\__,_|\\__, |
                                                             __/ |
                                                            |___/
 has been started successfully`
    );
});

async function runServerInNetwork(server: FastifyInstance) {
    try {
        await server.listen({
            port: 1500,
            host: process.env.HOST || '0.0.0.0',
        });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}
