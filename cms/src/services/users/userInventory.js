import api from "../api";

/**
 * GET a user's full inventory (populated with item details)
 * 
 * @param {Object} userData - Object containing user information
 * @param {string} userData.id - The user's ID
 * @returns {Promise<Object>} Populated inventory array
 */
export async function getUserInventory(userData) {
  try {
    const { id } = userData;
    const response = await api.get(`/users/${id}/inventory`);
    return response.data;
  } catch (err) {
    console.error("getUserInventory Failed. userInventoryApi.js", err);
    throw err;
  }
}


/**
 * Check if an item exists in a user's inventory.
 * Returns null if not found.
 *
 * @param {Object} userData - Object containing user + item info
 * @param {string} userData.userId - User ID
 * @param {string} userData.itemId - Item ID to check
 * @returns {Promise<Object|null>} Inventory item or null
 */
export async function checkUserInventory(userData) {
  try {
    const { userId } = userData;
    const response = await api.get(
      `/users/${userId}/inventory/check`,
      { params: userData }
    );
    return response.data;
  } catch (err) {
    console.error("checkUserInventory Failed. userInventoryApi.js", err);
    throw err;
  }
}


/**
 * Add an item to a user's inventory.
 * If it already exists, backend increases quantity.
 *
 * @param {Object} userData - { userId, itemId, quantity }
 * @returns {Promise<Object>} Updated user inventory document
 */
export async function addUserItem(userData) {
  try {
    const { userId } = userData;
    const response = await api.put(
      `/users/${userId}/inventory/add`,
      userData
    );
    return response.data;
  } catch (err) {
    console.error("addUserItem Failed. userInventoryApi.js", err);
    throw err;
  }
}


/**
 * Remove an item entirely from a user's inventory.
 * (Ignores quantity — deletes the full stack.)
 *
 * @param {Object} userData - { userId, itemId }
 * @returns {Promise<Object>} Updated user inventory
 */
export async function removeUserItem(userData) {
  try {
    const { userId } = userData;
    const response = await api.put(
      `/users/${userId}/inventory/remove`,
      userData
    );
    return response.data;
  } catch (err) {
    console.error("removeUserItem Failed. userInventoryApi.js", err);
    throw err;
  }
}


/**
 * Update the quantity of an item in the user's inventory.
 * Backend removes item automatically if quantity <= 0.
 *
 * @param {Object} userData - { userId, itemId, quantity }
 * @returns {Promise<Object>} Updated user inventory
 */
export async function updateUserItemQuantity(userData) {
  try {
    const { userId } = userData;
    const response = await api.put(
      `/users/${userId}/inventory/update`,
      userData
    );
    return response.data;
  } catch (err) {
    console.error("updateUserItemQuantity Failed. userInventoryApi.js", err);
    throw err;
  }
}


/**
 * Remove ALL items from a user's inventory.
 *
 * @param {Object} userData - { id }
 * @returns {Promise<Object>} Updated user inventory (empty array)
 */
export async function clearUserInventory(userData) {
  try {
    const { id } = userData;
    const response = await api.put(`/users/${id}/inventory/clear`);
    return response.data;
  } catch (err) {
    console.error("clearUserInventory Failed. userInventoryApi.js", err);
    throw err;
  }
}
