

const OrderSummary = (props) => {
    console.log(props.shippingdetails)
    return (
                <div className='border rounded-xl p-4 '>
                <h1 className='uppercase text-4xl mb-8'>order summary</h1>
                <div className='flex justify-between mb-8'>
                <span className='capitalize'>subtotal</span>
                <span>$ {props.orderdetails.totalPrice}</span>
                </div>
                <div className='flex justify-between mb-8'>
                <span className='capitalize'>estimated shipping</span>
                <span>$ {props.orderdetails.shippingCost}</span>
                </div>
                <div className='flex justify-between mb-8'>
                <span className='capitalize'>shipping discount</span>
                <span>-$ 00.00</span>
                </div>
                <div className='flex justify-between mb-8'>
                <span className='capitalize font-bold text-2xl'>Total</span>
                <span className='font-bold text-2xl'>$ {props.orderdetails.finalPrice}</span>
                </div>
            </div>
    );
};
export default OrderSummary;