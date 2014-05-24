var TokenScraper = {
  token: function() {
    return $("meta[name='csrf-token']").attr("content");
  }
}