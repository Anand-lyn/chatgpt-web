<script setup lang='ts'>
import {ref} from 'vue'
import {getAccessToken} from "@/api";
import {t} from "@/locales";
import {NButton, NInput, useMessage} from 'naive-ui'

const ms = useMessage()

const emit = defineEmits(['update:visible'])

const form = ref({
	username: '',
	password: '',
	mfa_code: ''
})

function updateAccessToken() {
	getAccessToken({...form.value}).then(res => {
		ms.success(t('common.success'))
		emit('update:visible', false)
	}).catch(err => {
		ms.error(err.message)
	})
}

</script>

<template>
	<div class="p-4 space-y-4">
		<div class="space-y-6">
			<div class="flex items-center space-x-4">
				<span class="flex-shrink-0 w-[100px]">账号</span>
				<div class="flex-1">
					<NInput v-model:value="form.username" placeholder="Enter your email address"/>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<span class="flex-shrink-0 w-[100px]">密码</span>
				<div class="flex-1">
					<NInput type="password" v-model:value="form.password" placeholder="Enter password"/>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<span class="flex-shrink-0 w-[100px]">MFA Code</span>
				<div class="flex-1">
					<NInput v-model:value="form.mfa_code" placeholder="Enter MFA code(optional)"/>
				</div>
			</div>
			<div class="flex">
				<NButton size="medium" text type="primary" @click="updateAccessToken">
					获取accessToken
				</NButton>
			</div>
		</div>
	</div>
</template>
