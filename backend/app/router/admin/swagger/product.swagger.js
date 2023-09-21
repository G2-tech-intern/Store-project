
/**
 * @swagger
 *  components:
 *      schemas:
 *          Product:
 *              type: object
 *              required:
 *                  -   title
 *                  -   desc
 *                  -   price
 *                  -   count
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of product
 *                      example: title
 *                  desc:
 *                      type: string
 *                      description: the title of product
 *                      example: text
 *                  price:
 *                      type: string
 *                      description: the title of product
 *                      example: 2500000
 *                  count:
 *                      type: string
 *                      description: the title of product
 *                      example: 100
 *                  images:
 *                      type: array
 *                      items:
 *                          type : string
 *                          format : binary
 *          edit-Product:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title of product
 *                  desc:
 *                      type: string
 *                      description: the title of product
 *                  price:
 *                      type: string
 *                      description: the title of product
 *                  count:
 *                      type: string
 *                      description: the title of product
 *                  images:
 *                      type: array
 *                      items:
 *                          type : string
 *                          format : binary
 */

/**
 * @swagger
 *  /admin/products/list:
 *      get:
 *          tags: [Product(AdminPanel)]
 *          summary: get all products
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: text for search in title , text and short text for product
 *          responses:
 *              200:
 *                  description: success
 */

/**
 * @swagger
 *  /admin/products/{id}:
 *      get:
 *          tags: [Product(AdminPanel)]
 *          summary: get one product
 *          parameters:
 *              -   in: path
 *                  name: id
 *                  type: string
 *                  required: true
 *                  description: object id of product
 *          responses:
 *              200:
 *                  description: success
 */
