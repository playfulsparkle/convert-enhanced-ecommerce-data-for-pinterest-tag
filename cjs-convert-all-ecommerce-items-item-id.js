// cjs - convert all ecommerce items item_id

function() {
    return function(items) {
        if (!Array.isArray(items)) {
            return items;
        }
        var content_ids = items.map(function(item) {
           return item.item_id.toString()
        })
        return content_ids;
    }
}