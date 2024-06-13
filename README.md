# Enhanced e-commerce helpers for Pinterest tag

## Requirements

First of all you have to create four User-Defined Variables in Google Tag Manager.

Bellow you can see the mapping how each files depend on each other.

* cjs - Pinterest - ecommerce items -> cjs - convert ecommerce items to Pinterest items
* cjs - array of all ecommerce items item_id -> cjs - convert all ecommerce items item_id

We are using a User-Defined Variable `{dlv - ecommerce items}` to access `Data Layer Variable` `ecommerce.items`

![Alt](/assets/dlv-ecommerce-items.png.png "Variable configuration for dlv - ecommerce items")