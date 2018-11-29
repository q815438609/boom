var cart = new ShoppingCart();

function displayOrderList() {
    let cartData = cart.getDataFromLocalStorage();
    console.log(cartData);
    // 获取购物车json数据中的订单列表            
    let orderList = cartData.orderList;

    //找订单列表父元素
    let cartList = document.querySelector('#cartList');
    // 找样本节点
    let exmapleNode = document.querySelector('#orderExample');
    // 遍历订单列表
    for (let i = 0; i < orderList.length; i++) {
        //当前订单数据
        let order = orderList[i];
        console.log(order);
        //克隆样本节点形成当前订单节点
        node = exmapleNode.cloneNode(true);
        //挂接到父元素
        cartList.appendChild(node);

        //设置数据
        //节点ID
        node.id = order.id;

        //图像地址
        //找图像节点
        let imgNode = node.querySelector('[data-name="imgSrc"]')
        imgNode.src = 'images/' + order.imgSrc;

        let titleNode=node.querySelector('[data-name="title"]');
        titleNode.textContent=order.title;

        let priceNode=node.querySelector('[data-name="price"]');
        priceNode.textContent=order.price;

        let qtyNode=node.querySelector('[data-name="qty"]');
        qtyNode.textContent=order.qty;
        
        let subPriceNode = node.querySelector('[data-name="subPrice"]');
        subPriceNode.textContent = order.qty * order.price;

        //显示购物车所有总数据
        let unitsNode = document.querySelector('[data-name="units"]');
        cartData = cart.getDataFromLocalStorage();
        unitsNode.textContent = cartData.units;
        let selectedAmountNode = document.querySelector('[data-name="selectedAmount"]');
        selectedAmountNode.textContent = cart.getSelectedAmount().toFixed(2);
        let selectedQtyNode = document.querySelector('[data-name="selectedQty"]');
        selectedQtyNode.textContent = cart.getSelectedQty();



        node.classList.remove('d-none');


        //设选中状态
        //找选中节点
        let selectNode = node.querySelector('[data-operator="checkItem"]');
        selectNode.checked = order.selectStatus;
        console.log(selectNode);
        console.log(node);


    }
}
displayOrderList();
