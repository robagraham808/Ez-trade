const { ShoppingCart, Product, User } = require("../models");
const user_id = require('../controllers/homeRoutes')

function getUserID(req) {
    if (req.session.user_id) {
      const user_id = req.session.user_id;
      return user_id
    }
};

module.exports = {
    cartCounter: async () => {
        getUserID;
        const shoppingCartDB = await ShoppingCart.findAll({
            include: [{model: Product}, {model: User}],
            where: { buyer_id:user_id },
          })
      
        const shoppingCart = shoppingCartDB.map((item) => item.get({ plain: true }));
    
        return `${shoppingCart.length}`;
    },
};