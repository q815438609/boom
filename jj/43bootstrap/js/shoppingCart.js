//商品类
class Product {
    constructor(id, title, price, imgSrc) {
        //商品类的成员
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
    }
}

//订单类2
class Order {
    constructor(product, qty, selectStatus) {
        //订单成员
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.imgSrc = product.imgSrc;
        this.qty = qty;
        this.selectStatus = selectStatus;
    }
}

//购物车数据类，用于记录购物车数据
//包括订单列表项包括：某类商品、商品数量小计
//商品包括：商品id、图片、名称、单价
class CartData {
    constructor() {
        this.orderList = new Array();
        this.units = 0;
        this.totalQty = 0;
        this.totalAmount = 0;
        this.units = 0;

    }
}

//购物车操作类
class ShoppingCart {

    // 将购物车数据写入本地存储中
    setDataToLocalSatorge(cartData) {
        //清除原有存储写入新列表
        localStorage.removeItem('lzzyCart');
        //写入本地存储
        localStorage.setItem('lzzyCart', JSON.stringify(cartData));
    }

    // 从本地存储中获取购物车数据
    getDataFromLocalStorage() {
        let lzzyCart = localStorage.getItem('lzzyCart');
        // 判断购物车是否为空
        if (lzzyCart == null || lzzyCart == '') {
            return new CartData();
        }
        else {
            return JSON.parse(lzzyCart);
        }
    }


    addToCart(order) {
        //从本地存储中获取购物车的数据
        let cartData = this.getDataFromLocalStorage();
        //获取购物车json数据中的订单列表
        let orderList = cartData.orderList;
        //设置标志位判断是否为购物车新商品，默认为是新商品
        let isNewProduct = true;
        //遍历订单列表，判断新加入商品是否在购物车中
        for (let i in orderList) {
            if (order.id == orderList[i].id) {
                //若新加入订单商品已经在购物车中，则变更订单列表中对应的商品数量，且变更新商品标志位
                orderList[i].qty += order.qty;
                isNewProduct = false;
                break;
            }
        }
        //如果是新商品
        if (isNewProduct) {
            //购物车总样本+1
            cartData.units++;
            //导入新商品置入购物车
            orderList.push(order);
        }
        //修改购物车总金额及商品总数量
        cartData.totalAmount += order.qty * order.price;
        cartData.totalQty += order.qty;
        //写入localStorage
        this.setDataToLocalSatorge(cartData);

    }
    // 清空购物车（移除本地存储购物车项）
    clearCart() {
        localStorage.removeItem('lzzyCart');
    }

    getSelectedQty() {
        let statusQty = 0;
        let cartData = this.getDataFromLocalStorage();
        for (let i = 0; i < cartData.orderList.length; i++) {
            if (cartData.orderList[i].selectStatus) {
                statusQty += cartData.orderList[i].qty;
            }
        }
        return statusQty;
    }
    // 获取选中商品的总价格
    getSelectedAmount() {
        let cartData = this.getDataFromLocalStorage();
        let orderList = cartData.orderList;
        let selectedAmount = 0;
        for (const key in orderList) {
            if (orderList[key].selectStatus) {
                selectedAmount += orderList[key].qty * orderList[key].price;
            }
        }
        return selectedAmount;
    }

    //设置购物车订单项选择状态
    setItemSelectStatus(id, selectStatus) {
        //获取购物车数据
        let cartData = this.getDataFromLocalStorage();
        let orderList = cartData.orderList;
        //查找id对应的订单
        let index = this.find(id, orderList);

        //判断位置，位置为空报错提示，如果不为空就设置状态
        if (index == null) {
            //没有找到id
            console.log('订单id有误')
            return;
        } else {
            //找到对应id
            order.selectStatus = selectStatus;
        }
        //写入本都存储
        this.setDataToLocalSatorge(cartData);
    }

    //查找制定id的订单
    find(id, orderList) {
        // let cartData = this.getDataFromLocalStorage();
        // let orderList = cartData.orderList;
        let index = null;
        for (const i in orderList) {
            if (id == orderList[i].id) {
                index = i;
                break;
            }
        }
        if (index != null) {
            return orderList[index];
        }
        else {
            return null;
        }

    }

}



