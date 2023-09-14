class VariableHolder<T> {


	private static map: Map<string, any> = new Map<string, any>();

	private constructor() {
	}


	// 设置变量的值
	static set<T>(key: string, value: T): void {
		VariableHolder.map.set(key, value)
	}

	// 获取变量的值
	static get<T>(key: string): T | undefined {
		return VariableHolder.map.get(key);
	}

	// 清除变量的值
	static delete(key: string): void {
		VariableHolder.map.delete(key)
	}
}

export default VariableHolder;
