let mongoose  = require("./mongoconfig");
mongoose = mongoose.mongoose

const MenuSchema = new mongoose.Schema({ Name: String, Price:Number, din:Boolean, lun:Boolean, bre:Boolean});
const Menu = mongoose.model('Menu', MenuSchema);



const orderSchema = new mongoose.Schema({ table:Number, order:Array});
const Order = mongoose.model('orders', orderSchema);


 module.exports.Menu = Menu;
 module.exports.Order= Order;
