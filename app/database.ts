import { PrismaClient } from "@prisma/client";
import store from './store'

let prismaSingleton: PrismaClient
export function prismaClient () {
	const file = store.get('dbFile')
	if (!prismaSingleton) {
		new PrismaClient({
			datasources: {
				db: {
					url: file
				}
			}
		});
	}
	return prismaSingleton
}