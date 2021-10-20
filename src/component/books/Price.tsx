import React, {ChangeEvent, useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import NumberFormat from 'react-number-format';

type PriceProps = {
    onPriceChange: (price: string) => void;
    currentPrice: string;
    isValid: boolean
};

export const Price: React.FC<PriceProps> = (props) => {

    const {currentPrice, onPriceChange} = props;
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        if (currentPrice) {
            setValue(currentPrice)
        }
    }, [currentPrice])

    const handleOnValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        if (!e.target.value) {
            return;
        }
        setValue(e.target.value);
        onPriceChange(e.target.value);
    };

    return (
        <Form.Group>
            <Form.Label className="mb-0 ms-1 form-label mt-3">Price</Form.Label>
            <NumberFormat className="form-control  form-input py-lg-1"
                          displayType={'input'}
                          thousandSeparator={true}
                          prefix={'Rs'}
                          onChange={handleOnValueChange}
                          value={value}
                          required/>
            <Form.Control.Feedback type="invalid">Please Enter The Price</Form.Control.Feedback>
        </Form.Group>
    );
};
export default Price;


