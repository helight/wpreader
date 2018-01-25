const API_BASE = "https://zhwen.org";
// https://zhwen.org/?json=1&p=982
module.exports = {
  API_FEED: API_BASE + "?feed=json",
  API_DETAIL: API_BASE + "?json=1&p=:id",
  API_BLANK: ":id&json=1"
}
