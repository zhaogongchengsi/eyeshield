import { PrismaClient } from "@prisma/client";

let prismaSingleton: PrismaClient
export function prismaClient (path: string) {
	if (!prismaSingleton) {
		new PrismaClient({
			datasources: {
				db: {
					url: path
				}
			}
		});
	}
	return prismaSingleton
}