// cjs - convert ecommerce items to Pinterest items

function() {
    return function (items) {
        if (!Array.isArray(items)) {
            return items;
        }

        var result = items.map(function (item) {
            var prodObj = new Object();
            if (item.item_name) { prodObj.product_name = item.item_name; }
            if (item.item_id) { prodObj.product_id = item.item_id.toString(); }
            if (item.price) {
                if (item.discount) {
                    prodObj.product_price = (parseFloat(item.price) + parseFloat(item.discount)).toFixed(4);
                } else {
                    prodObj.product_price = parseFloat(item.price).toFixed(4);
                }
            };
            if (item.quantity) { prodObj.product_quantity = parseInt(item.quantity); }
            if (item.item_category) { prodObj.product_category = item.item_category; }
            if (item.item_variant) { prodObj.product_variant = item.item_variant; }
            if (item.item_brand) { prodObj.product_brand = item.item_brand; }

            return prodObj;
        })

        return result;
    }
}