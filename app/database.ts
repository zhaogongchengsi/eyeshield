import { PrismaClient } from "@prisma/client";
import { existsSync, writeFileSync  } from 'fs'
import store from './store'

let prismaSingleton: PrismaClient
export function prismaClient () {
	const file = store.get('dbFile')
	if (!prismaSingleton) {
		if (!existsSync(file)){
			// 创建数据库文件
			writeFileSync(file, Buffer.alloc(0))
		}
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