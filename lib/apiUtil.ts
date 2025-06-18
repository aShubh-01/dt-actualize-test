import axios from 'axios';

/**
 * Updates a user's status
 * @param {string|number} userId - The ID of the user
 * @param {string} newStatus - The new status to set
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise
 */

export const updateUserStatus = async (userId: string, newStatus: string) => {
  try {
    const response = await axios({
      url: '/api/v1/user/status',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        userId,
        newStatus
      }
    });

    if (response.status !== 200) {
      // TODO: add notification toasts to show API failure
      return false;
    }
    
    // TODO: add notification toast to show API success
    return true;
  } catch (error) {
    console.error('Error updating user status:', error);
    // TODO: add notification toast to show API error
    return false;
  }
};