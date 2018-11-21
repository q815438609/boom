class Product{
    constructor(id,title,price,imgSrc){
        this.id=id;
        this.title=title;
        this.price=price;
        this.imgSrc=imgSrc;
    }
}

//订单类
class Order{
    constructor(product,qty,selectStatus){
      //订单成员
      this.id=product.id;
      this.title=product.title;
      this.price=product.price;
      this.imgSrc=product.imgSrc;
      this.qty=qty;
      this.selectStatus=selectStatus;
    }
  }

  //-------------------
  //购物车数据类，用于记录购物车数据。

  class CartData{
      constructor(){
          this.orderList=new Array();
          this.totalQty=0;
          this.totalAmount=0;
          this.units=0;
      }
  }


//   购物车数据操作

class ShoppingCart{

    //从本地储存中获取购物车数据
    getDataFromLocalStorage(){
        let lzzyCart=localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart==null||lzzyCart==''){
            return new CartData();
        }
        else{
            return JSON.parse(lzzyCart);
        }
    }
    //将购物车数据写入本地
    setDataToLocalSatorge(cartData){
        //清除原有存储写入新列表
        localStorage.removeItem('lzzyCart');
        //写入本地存储
        localStorage.setItem('lzzyCart',JSON.stringify(cartData));
    }
    
    //获取选中对象的订单列表
    getSelectedList(){

    }
    //获取选中对象的列表的总数量
    getSelectdeList(){

    }
    //获取选中对象的列表的总价格
    getSelectedAmount(){

    }
    //设置购物车订单选择状态
    setItemselectStatus(id,selectStatus){

    }
    //加入购物车(写入localStorage)
    addToCart(order){
        let cartData = this.getDataFromLocalStorage();
        let orderList = cartData.orderList;
        let isNewProduct = true;
        for(let i=0;i<orderList.lenhth;i++) 
        for(let i in orderList){
            if(order.id==orderList[i].id){
                orderList[i].qty +=order.qty;
                isNewProduct=false;
                break;
            }
        }
        if(isNewProduct){
            cartData.units++;
            orderList.push(order);
        }
        cartData.totalAmount += order.qty* order.price;
        cartData.totalQty += order.qty;
        

        this.setDataToLocalSatorge(cartData);
     }
    //清空购物车
    clearCart(){
        localStorage.removeItem('lzzyCart');
    }
    //获取选中商品的数量
    getSelectedQty(){

    }
    //选取选中商品的总价格
    getSelectedAmount(){

    }     
}

