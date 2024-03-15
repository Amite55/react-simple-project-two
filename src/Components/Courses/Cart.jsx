/* eslint-disable react/prop-types */
import { totalCredit } from "../../App";

const Cart = ({cart}) => {
    const credits = cart.reduce((p,c)=> p+c.credit, 0);
    return (
        <div className="bg-slate-800 rounded-lg p-4 ">
            <div>
            <h1>Credit hour ramming {totalCredit - credits} hr</h1>
            </div>
            <div className="divider"></div>
            <div>
                <div>
                <h4 className="text-2xl font-bold">Course Name </h4>
                <ul>
                    {
                        cart.map(title => <li key={title.id}>{title.title}</li>)
                    }
                </ul>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <h4>Total credit hour {credits}
                    </h4>
            </div>
            <div className="divider"></div>
            <div>
                <h5>Total price {
                        cart.reduce((p,c) => p+c.price, 0)
                    }
                </h5>
            </div>
        </div>
    );
};

export default Cart;