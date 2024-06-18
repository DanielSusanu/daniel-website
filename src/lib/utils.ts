export const time = {
  /**
   * Converts minutes to milliseconds.
   * @param {number} minutes - The number of minutes.
   * @returns {number} - The equivalent milliseconds.
   */
  minutesToMilliseconds(minutes: number): number {
    return minutes * 60 * 1000;
  },

  /**
   * Converts hours to milliseconds.
   * @param {number} hours - The number of hours.
   * @returns {number} - The equivalent milliseconds.
   */
  hoursToMilliseconds(hours: number): number {
    return hours * this.minutesToMilliseconds(60);
  },

  /**
   * Converts days to milliseconds.
   * @param {number} days - The number of days.
   * @returns {number} - The equivalent milliseconds.
   */
  daysToMilliseconds(days: number): number {
    return days * this.hoursToMilliseconds(24);
  },
};
