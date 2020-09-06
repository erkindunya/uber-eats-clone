import React from "react";
import { Button, Container, ButtonGroup, Form } from "react-bootstrap";
import PillDropdownBtn from "./PillDropdownBtn";

const NarrowBy = () => {
    return (
        <Container >
            <div>
                <Sort />
                <PriceRange />
                <MaxDeliveryFee />
                <Dietary />
            </div>

        </Container>
    )
}

const Sort = () => {
    return (
        <PillDropdownBtn title="Sort">
            <Form style={{ width: "300px" }}>
                <label htmlFor="for-you">Picked for you (default)</label>
                <input id="for-you" type="radio" name="sort by" /> <br></br>

                <label htmlFor="most-popular">Most popular</label>
                <input id="most-popular" type="radio" name="sort by" /><br></br>

                <label htmlFor="rating">Rating</label>
                <input id="rating" type="radio" name="sort by" /><br></br>

                <label htmlFor="delivery-time">Delivery time</label>
                <input id="delivery-time" type="radio" name="sort by" />
            </Form>
        </PillDropdownBtn>
    )
}

const PriceRange = () => {

    const btnStyle = {
        backgroundColor: "#F0F0F0",
        borderWidth: "0",
        color: "#000000",
        borderRadius: "16px",
        padding: "8px 24px",
        margin: "8px"
    }
    return (
        <PillDropdownBtn title="Price">
            <ButtonGroup aria-label="First group">
                {["$", "$$", "$$$", "$$$$"].map(price => {
                    return (
                        <Button key={price} style={btnStyle}>{price}</Button>
                    )
                })}
            </ButtonGroup>
        </PillDropdownBtn>
    )
}

const MaxDeliveryFee = () => {
    const btnStyle = {
        borderWidth: "0",
        backgroundColor: "transparent",
        color: "#000000",
        width: "90px",
    }

    // or use range inputs (in Forms)

    return (
        <PillDropdownBtn title="Max Delivery Fee">
            <ButtonGroup aria-label="First group">
                {["$2", "$3", "$6", "$6+"].map(fee => {
                    return (
                        <Button key={fee} style={btnStyle}>{fee}<span id={"line-" + { fee }}>----</span></Button>
                    )
                })}
            </ButtonGroup>
        </PillDropdownBtn>

    )
}

const Dietary = () => {
    return (
        <PillDropdownBtn title="Dietary">
            <Form style={{ width: "300px" }}>
                {["Vegetarian", "Vegan", "Gluten-free", "Halal", "Allergy Friendly"].map(restriction => {
                    return (
                        <div key={restriction}>
                            <label htmlFor={restriction.toLowerCase()}>{restriction}</label>
                            <input id={restriction.toLowerCase()} type="checkbox" name="dietary restrictions" /> <br></br>
                        </div>
                    )
                })}
            </Form>
        </PillDropdownBtn>
    )
}

export default NarrowBy;