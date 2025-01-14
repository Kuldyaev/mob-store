import s from "./style.module.scss"
import {useState} from "react";

const CartItem = ({goods}) => {
    const [checked, setChecked] = useState(false);
    const [quantity, setQuantity] = useState(1)

    return <div>
        {goods.map(({id, img, desc, size, delivery, color, price}) => {
            return <div key={id}>
                <div className={s.item}>
                    <div className={s.itemImg}>
                        <div
                            className={s.img}
                            style={{
                                backgroundImage: "url('images/" + img + ".png')",
                            }}
                        ></div>
                    </div>
                    <div className={s.textInfo}>
                        <div className={s.itemHeader}>
                            <div className={s.desc}>{desc}</div>
                            <input className={s.checkbox} type={"checkbox"} checked={checked}
                                   onClick={() => setChecked(prev => !prev)}/>
                        </div>
                        <div className={s.itemBody}>
                            <div className={s.bodySettings}>Цвет: <span>{color}</span></div>
                            <div className={s.bodySettings}>Размер: <span>{size} | {delivery} дней</span></div>
                        </div>
                        <div className={s.itemFooter}>
                            <div className={s.price}>{price} <span>₽</span></div>
                            {checked ? <div className={s.counter}>
                                <button className={s.dis} onClick={() => setQuantity(prev => prev - 1)} disabled={quantity <= 1}>-</button>
                                {quantity}
                                <button onClick={() => setQuantity(prev => prev + 1)}>+</button></div> : null}
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default CartItem