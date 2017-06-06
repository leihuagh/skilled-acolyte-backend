const BC_ORDER_END_POS = 9;
const BC_ATTENDEE_END_POS = 18;

module.exports = {
  extractOrderId: (barcode) => {
    if (barcode.length !== 21) {
      return null;
    }
    return barcode.substring(0, BC_ORDER_END_POS);
  },
  extractAttendeeId: (barcode) => {
    if (barcode.length !== 21) {
      return null;
    }
    return barcode.substring(BC_ORDER_END_POS, BC_ATTENDEE_END_POS);
  },
};
