import { ref } from 'vue';
import { api } from 'boot/axios';
import { Notify } from 'quasar';

export function BaseStorePlugin(context) {
	// base state
	const item = ref({}); // single item
	const collection = ref([]); // array of items
	const loading = ref(false); // loading status of current store

	// util
	/**
	 * determines if the API has returned a successful result
	 * @param {Object} response to test
	 * @returns {Promise}
	 */
	function handleApiResponse(response) {
		return new Promise((resolve, reject) => {
			if (response.status) {
				resolve(response);
			} else {
				reject(response);
			}
		});
	}

	/**
	 * displays error notification
	 * @param {String} message to display
	 */
	function handleApiError(message) {
		Notify.create({
			type: 'negative',
			message: message,
		});
	}

	/**
	 * displays success notification
	 * @param {String} message to display
	 */
	function handleApiSuccess(message) {
		console.warn(message);
		Notify.create({
			type: 'positive',
			message: message,
		});
	}

	// actions
	/**
	 * calls GET function and assigns response to item value
	 * @param {String} url API endpoint
	 */
	function getItem(url) {
		loading.value = true;

		api.get(url)
			.then(async (response) => {
				await handleApiResponse(response);

				item.value = response.data;

				handleApiSuccess(`${context.store.$id} retrieved successfully`);
			})
			.catch(() => {
				handleApiError(`error getting ${context.store.$id}`);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	/**
	 * calls GET function and assigns response to collection value
	 * @param {String} url API endpoint
	 */
	function getCollection(url) {
		loading.value = true;

		api.get(url)
			.then(async (response) => {
				await handleApiResponse(response);

				collection.value = response.data;

				console.log(response);

				handleApiSuccess(`${context.store.$id}s retrieved successfully`);
			})
			.catch(() => {
				handleApiError(`error getting ${context.store.$id}s`);
			})
			.finally(() => {
				loading.value = false;
			});
	}


	return {
		// state
		item,
		collection,
		loading,

		// actions
		getItem,
		getCollection,
	};
}